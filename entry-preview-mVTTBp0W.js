import { Q } from './lit-element-C1CIaNfO.js';

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t;

function dedent(templ) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var strings = Array.from(typeof templ === 'string' ? [templ] : templ);
    strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var indentLengths = strings.reduce(function (arr, str) {
        var matches = str.match(/\n([\t ]+|(?!\s).)/g);
        if (matches) {
            return arr.concat(matches.map(function (match) { var _a, _b; return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0; }));
        }
        return arr;
    }, []);
    if (indentLengths.length) {
        var pattern_1 = new RegExp("\n[\t ]{" + Math.min.apply(Math, indentLengths) + "}", 'g');
        strings = strings.map(function (str) { return str.replace(pattern_1, '\n'); });
    }
    strings[0] = strings[0].replace(/^\r?\n/, '');
    var string = strings[0];
    values.forEach(function (value, i) {
        var endentations = string.match(/(?:^|\n)( *)$/);
        var endentation = endentations ? endentations[1] : '';
        var indentedValue = value;
        if (typeof value === 'string' && value.includes('\n')) {
            indentedValue = String(value)
                .split('\n')
                .map(function (str, i) {
                return i === 0 ? str : "" + endentation + str;
            })
                .join('\n');
        }
        string += indentedValue + strings[i + 1];
    });
    return string;
}

var {Node}=__STORYBOOK_MODULE_GLOBAL__.global,render=(args,context)=>{let{id,component}=context;if(!component)throw new Error(`Unable to render story ${id} as the component annotation is missing from the default export`);let element=document.createElement(component);return Object.entries(args).forEach(([key,val])=>{element[key]=val;}),element};function renderToCanvas({storyFn,kind,name,showMain,showError,forceRemount},canvasElement){let element=storyFn();if(showMain(),nt(element)){(forceRemount||!canvasElement.querySelector('[id="root-inner"]'))&&(canvasElement.innerHTML='<div id="root-inner"></div>');let renderTo=canvasElement.querySelector('[id="root-inner"]');Q(element,renderTo),__STORYBOOK_MODULE_PREVIEW_API__.simulatePageLoad(canvasElement);}else if(typeof element=="string")canvasElement.innerHTML=element,__STORYBOOK_MODULE_PREVIEW_API__.simulatePageLoad(canvasElement);else if(element instanceof Node){if(canvasElement.firstChild===element&&!forceRemount)return;canvasElement.innerHTML="",canvasElement.appendChild(element),__STORYBOOK_MODULE_PREVIEW_API__.simulateDOMContentLoaded();}else showError({title:`Expecting an HTML snippet or DOM node from the story: "${name}" of "${kind}".`,description:dedent`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `});}

var parameters={renderer:"web-components"};

export { parameters, render, renderToCanvas };
