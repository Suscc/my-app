import { Component, ElementRef, OnInit, AfterViewInit, Pipe, PipeTransform, NgModule, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SearchService} from '@framework/Component/Search/search.component';
import { Router, RoutesRecognized, NavigationEnd, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { CommHeaderComponent } from '@framework/Component/Header/header.component';
import { LoadingComponent, LoadingService } from '@framework/Component/Loading/loading.component';
import { NavigationService } from '@framework/Component/Navigation/navigation.component';
declare var jquery: any;
declare var $: any;

@Component({

    selector: 'app-index-page',
    templateUrl: './index.page.html'
})

export class IndexPageComponent implements OnInit, AfterViewInit {

    private viewMainHig: number;
    private viewHig: number;
    private url: string;
    private navControl: boolean;
    private navMini: boolean = false;
    private fuck = [
        {
            'navName': '大佬',
            'sub': [
                { 'subName': '子导航栏1' },
                { 'subName': '子导航栏2' }
            ]
        },
        {
            'navName': '带带我',
            'href': '/index/header'
        },
        {
            'navName': '牛逼',
            'sub': [
                {
                    'subName': '子导航栏1',
                    'href': '/index/header'
                },
                { 'subName': '子导航栏2' },
                { 'subName': '子导航栏3' },
                { 'subName': '子导航栏4' },
                { 'subName': '子导航栏5' },
                { 'subName': '子导航栏6' },
                { 'subName': '子导航栏7' },
                { 'subName': '子导航栏8' },
                { 'subName': '子导航栏9' }
            ]
        },
        {
            'navName': 'Shit',
            'href': '/index'
        },
        {
            'navName': 'Fuck',
            'sub': [
                { 'subName': '子导航栏1' },
                { 'subName': '子导航栏2' },
                { 'subName': '子导航栏3' },
                { 'subName': '子导航栏4' },
                { 'subName': '子导航栏5' },
                { 'subName': '子导航栏6' },
                { 'subName': '子导航栏7' },
                { 'subName': '子导航栏8' },
                { 'subName': '子导航栏9' }
            ]
        }
    ];

    constructor(
        private searchService: SearchService,
        private router: Router,
        private elementRef: ElementRef,
        private http: HttpClient,
        private activatedRoute: ActivatedRoute,
        private zone: NgZone,
        private loadingService: LoadingService,
        private navigationService: NavigationService
    ) {
        this.router.events.subscribe((url: any) => {});
    }

    ngAfterViewInit() {
        this.loadingService.show.emit(null);
    }

    ngOnInit() {
        this.navigationService.navigationClick.subscribe((str?: any) => {

            this.router.navigate([str], { replaceUrl: true });
        });
    }

    signOut() {
        setTimeout(() => {
            this.router.navigate(['/login'], { replaceUrl: true });
        });
    }

    reloadPage() {

        this.url = this.router.url;

        this.router.navigate(['/11111'])
            .then(() => {
                this.router.navigate([this.url]);
            });
    }

    searchShow() {
        this.searchService.searchShow.emit(null);
    }

    private choseDom(dom: string): any {
        const selectedDom = this.elementRef.nativeElement.querySelector(dom);
        return selectedDom;
    }

    private match(tar, id) {
        let result;
        tar.forEach((v?: any) => {
            const identityMark = v.name.split('-');

            if (identityMark.length === 1 && identityMark[0] === id) {
                result = v;
            }
        });

        return result;
    }
}
