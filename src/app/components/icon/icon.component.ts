import { Component, effect, input, viewChild, ViewContainerRef } from "@angular/core";
import { iconsPath } from "./configs/config";

@Component({
    standalone: true,
    selector: 'app-icon',
    template: `<div [class]="'size_' + size()"><ng-template #dynamic></ng-template></div>`,
    styleUrl: './icon.component.scss'
})
export class IconComponent
{
    iconName = input.required<string>();
    size = input<'m' | 's' | 'l'>('m');
    
    private readonly dynamicContainer = viewChild('dynamic', {read: ViewContainerRef})

    constructor() {
        effect(() => {
            const iconName = this.iconName()

            if (iconName) {
                this.getComponent(iconName);
            }
        })
    }

    getComponent(iconName: string) {
        if (iconsPath.has(iconName)) {
            this.loadIconComponent(iconName)
        } else {
            this.loadIconComponent('icon-one')
        }
    }

    async loadIconComponent(iconName: string) {
        const svg = await iconsPath.get(iconName);

        if (svg) {
            this.dynamicContainer()?.clear();
            this.dynamicContainer()?.createComponent(svg.SvgComponent);
        }
    }
}

