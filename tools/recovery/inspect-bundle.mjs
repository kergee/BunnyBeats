import fs from 'node:fs';
import { parse } from '@babel/parser';
import generateModule from '@babel/generator';
import * as t from '@babel/types';

const generate = generateModule.default ?? generateModule;
const source = fs.readFileSync('assets/index-ifD7iYwv.js', 'utf8');
const ast = parse(source, { sourceType: 'module' });
const inventory = ast.program.body.map((node, index) => ({
  index,
  type: node.type,
  start: node.start,
  end: node.end,
  names: Object.keys(t.getBindingIdentifiers(node)),
  preview: source.slice(node.start, Math.min(node.end, node.start + 140)),
}));
const output = 'recovery/2026-10-15-rea/evidence';
fs.writeFileSync(`${output}/bundle-inventory.json`, JSON.stringify(inventory, null, 2));
fs.writeFileSync(`${output}/original-readable.js`, generate(ast, { comments: true }).code);
console.log(JSON.stringify({ statements: inventory.length, lastStatements: inventory.slice(-160) }, null, 2));
