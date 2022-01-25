import { IPropertyResult } from "./IPropertyResult";

export const ValidatorTraverse = (object: any, reflectionProperties: Map<string, string[]>, reflectionPropertiesExcludable: Map<string, string[]>, result: IPropertyResult[] = []) => {

    result = result || [];

    const currentType = object.constructor.name !== 'Array' ? object.constructor.name : object[0].constructor.name;

    object = object.constructor.name !== 'Array' ? object : object[0];

    if ((currentType !== 'Array' && !reflectionProperties.has(currentType)) || (currentType === 'Array' && !reflectionProperties.has(object[0].constructor.name))) {
        console.log(`${currentType} type not found in reflection.`);
        return;
    } 

    let properties: string[] = reflectionProperties.get(currentType)!;

    const excludable: string[] | undefined = reflectionPropertiesExcludable.get(currentType);

    if (excludable) {
        properties = properties.filter(property => !excludable.includes(property));
    }

    for (const property of properties) {
        if ((typeof object[property] !== 'object') && (!object.hasOwnProperty(property) || object[property] === undefined)) {
            result.push({ valid: false, property, message: `required ${property} is missing or undefined.`, objectType: currentType });
        }
        else if ((typeof object[property] === 'object' && object[property] !== null)) {
            ValidatorTraverse(object[property], reflectionProperties, reflectionPropertiesExcludable, result);
        }
    }

    return result;
};