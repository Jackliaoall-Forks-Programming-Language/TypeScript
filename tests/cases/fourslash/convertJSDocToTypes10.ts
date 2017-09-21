/// <reference path='fourslash.ts' />

/////**
//// * @param {?} x
//// * @returns {number}
//// */
////var f = /*1*/(/*2*/x) => x

verify.applicableRefactorAvailableAtMarker('1');
verify.fileAfterApplyingRefactorAtMarker('1',
`/**
 * @param {?} x
 * @returns {number}
 */
var f = (x): number => x`, 'Convert to Typescript type', 'convert');
