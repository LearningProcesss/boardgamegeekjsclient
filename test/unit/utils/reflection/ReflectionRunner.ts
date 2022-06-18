import { ReflectionType, ReflectionTypeExcludable } from '.';
import path from 'path'
import fs from 'fs';

if (fs.existsSync(path.join(__dirname, 'reflectionexport.json'))) {
    fs.unlinkSync(path.join(__dirname, 'reflectionexport.json'));
}

ReflectionTypeExcludable();
ReflectionType(path.join(__dirname, '../../../..', 'src/dto/concrete'));