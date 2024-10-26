import { ComponentRef, Type } from '@angular/core';

export const iconsPath = new Map<string, Promise<{SvgComponent: Type<unknown>}>>([[
    'icon-one', import('../icons-list/icon-one.component'),
], ['icon-two', import('../icons-list/icon-two.component')]])