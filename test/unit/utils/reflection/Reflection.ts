import path from 'path'
import fs from 'fs'

export const ReflectionType = (dirPathToScan: string): Map<string, string[]> => {

    const map = new Map<string, string[]>()

    const mapAsFile = ReflectionRead()

    if(mapAsFile) {
        return new Map(JSON.parse(mapAsFile))
    }

    scanFilesRecursive(dirPathToScan)
        .forEach(file => map.set(path.basename(file, '.ts'), readFile(file)))

    ReflectionWrite(JSON.stringify(Array.from(map.entries())))

    return map
}

export const ReflectionTypeExcludable = () => {
    const map = new Map<string, string[]>()

    map.set('BggPollResultItemDto', ['level'])
    map.set('BggLinkDto', ['inbound'])
    map.set('BggCollectionDto', ['id'])
    map.set('BggCollectionItemDto', ['originalname', 'comment'])
    map.set('BggLinkDto', ['inbound'])
    map.set('BggPlayDto', ['id'])
    map.set('BggSearchDto', ['id'])
    
    return map
}

const ReflectionRead = () => {
    if (!fs.existsSync(path.join(__dirname, 'reflectionexport.json'))) {
        return null
    }
    return fs.readFileSync(path.join(__dirname, 'reflectionexport.json'), 'utf-8');
}

const ReflectionWrite = (data: string) => {
    if (!fs.existsSync(path.join(__dirname, 'reflectionexport.json'))) {
        fs.writeFileSync(path.join(__dirname, 'reflectionexport.json'), data, 'utf-8')
    }
}

const scanFilesRecursive = (dirPathToScan: string, files: string[] = []) => {

    files = files || []

    fs.readdirSync(dirPathToScan).forEach(item => {
        const Absolute = path.join(dirPathToScan, item);
        if (fs.statSync(Absolute).isDirectory()) {
            files = scanFilesRecursive(Absolute, files);
        }
        else {
            files.push(Absolute);
        }
    });

    return files
}

const readFile = (filePath: string) => {
    return fs.readFileSync(filePath, 'utf-8')
        .split(/\r?\n/)
        .filter(line => line.includes('!:'))
        .map(line => line.split('!')[0].trim())
}