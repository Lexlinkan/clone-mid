import {surpriseMePrompts} from '../constans'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.flooer(Math.random() * 
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}