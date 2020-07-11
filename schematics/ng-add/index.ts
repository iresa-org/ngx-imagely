import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addPackageJsonDependency,
  getAppModulePath,
  getProjectFromWorkspace,
  getWorkspace,
  InsertChange,
  NodeDependency,
  NodeDependencyType,
  addModuleImportToRootModule,
} from 'schematics-utilities';
import * as ts from 'typescript';

import { insertImport } from './utils';

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      {
        type: NodeDependencyType.Default,
        name: '@iresa/ngx-imagely',
        version: '2.0.0',
      },
    ];

    dependencies.forEach((dependency) => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing package...`);

    return host;
  };
}

function getTsSourceFile(host: Tree, path: string): ts.SourceFile {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not read file (${path}).`);
  }
  const content = buffer.toString();
  const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);

  return source;
}

function injectImports(): Rule {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, Object.keys(workspace.projects)[0]);
    const modulePath = getAppModulePath(host, (project as any).architect.build.options.main);

    const moduleSource = getTsSourceFile(host, modulePath);

    const change = insertImport(moduleSource, modulePath, 'NgxImagelyModule', '@iresa/ngx-imagely');

    if (change) {
      const recorder = host.beginUpdate(modulePath);
      recorder.insertLeft((change as InsertChange).pos, (change as InsertChange).toAdd);
      host.commitUpdate(recorder);
    }

    return host;
  };
}

function addModuleToImports(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, Object.keys(workspace.projects)[0]);

    const moduleImport = `NgxImagelyModule`;

    addModuleImportToRootModule(host, moduleImport, null as any, project);

    context.logger.log('info', `🌈 @iresa/ngx-imagely is imported`);

    return host;
  };
}

function log(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.logger.log('info', `👏 @iresa/ngx-imagely ready to use`);

    return host;
  };
}

export default function imagelyNgAdd(): Rule {
  return chain([
    addPackageJsonDependencies(),
    installPackageJsonDependencies(),
    addModuleToImports(),
    injectImports(),
    log(),
  ]);
}
