import {Directive, OnInit, ElementRef, Renderer, Query, QueryList, Optional, Attribute} from "angular2/core";
import {Router, RouterLink} from 'angular2/router';
import {isPresent} from 'angular2/src/facade/lang';

@Directive({
    selector: '[router-active]'
})
export class RouterActiveDirective implements OnInit {

    constructor(private element:ElementRef,
                private renderer:Renderer,
                private router:Router,
                @Query(RouterLink, {}) private routerLink:QueryList<RouterLink>) {
    }

    ngOnInit() {
        this.routerLink.changes.subscribe(()=> {
            if (this.routerLink.first) {
                this._updateClass();
                this._findRootRouter().subscribe(() => {
                    this._updateClass();
                });
            }
        })
    }

    private _updateClass() {
        let active = this.routerLink.first.isRouteActive;
        this.renderer.setElementClass(this.element.nativeElement, 'active', active);
    }

    private _findRootRouter():Router {
        var router:Router = this.router;
        while (isPresent(router.parent)) {
            router = router.parent;
        }
        return router;
    }

}