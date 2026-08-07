import asanas from "./asanas";
import pranayamas from "./pranayamas";
import stretchings from "./stretchings";
import focusings from "./focusings";
import heatings from "./heatings";
import meditations from "./meditations";
import relaxations from "./relaxations";

const suggestionMap = {
    asanas: asanas,
    pranayama: pranayamas,
    stretching: stretchings,
    focusing: focusings,
    heating: heatings,
    meditation: meditations,
    relaxation: relaxations
}

export function getSuggestions(type) {
    return (suggestionMap[type] ?? []).map(item => ({
        ...item,
        type
    }));
}