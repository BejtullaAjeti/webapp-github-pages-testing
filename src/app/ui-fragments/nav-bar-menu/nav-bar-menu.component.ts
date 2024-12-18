import { NavigationItem } from '../../interfaces/navigation-item';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar-menu',
    templateUrl: './nav-bar-menu.component.html',
    styleUrls: ['./nav-bar-menu.component.scss']
})
export class NavBarMenuComponent implements OnInit {
    @Input() items: NavigationItem[] = [];
    public openMenu: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public toggleMenu(event): void {
        event.stopPropagation();
        this.openMenu = !this.openMenu;
    }

    public navigate(url: string, index: number): void {
        index ? this.router.navigate([url]) : window.open('https://apps.apple.com/no/app/moonlight-create-read-share/id1510126988', '_blank');
    }

    public navigateToWebStore(): void {
        window.open('https://apps.apple.com/no/app/moonlight-create-read-share/id1510126988', '_blank');
    }

}
