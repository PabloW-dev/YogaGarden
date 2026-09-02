//TO-DO: implementar idiomas

import asanas from "./asanas";
import pranayamas from "./pranayamas";
import stretchings from "./stretchings";
import focusings from "./focusings";
import heatings from "./heatings";
import meditations from "./meditations";
import relaxations from "./relaxations";

import coursesList from "./courses";

const suggestionMap = {
    asanas: asanas,
    pranayama: pranayamas,
    stretching: stretchings,
    focusing: focusings,
    heating: heatings,
    meditation: meditations,
    relaxation: relaxations
}

const courses = coursesList;

export function getCourses() {
    return (courses ?? []);
}

export function getSuggestions(type) {
    return (suggestionMap[type] ?? []).map(item => ({
        ...item,
        type
    }));
}