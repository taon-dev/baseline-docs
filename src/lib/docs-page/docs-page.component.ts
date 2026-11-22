//#region imports

import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  ChangeDetectorRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocsHeading, DocsMenuItem, TaonDocsPageComponent } from 'taon/src';
import { TaonLayoutDocsGenNgDocsComponent } from 'taon/src';
import { TaonIframeSyncComponent } from 'taon-ui/src';
import { _ } from 'tnp-core/src';

import { BaselineDocsDocsIndexData } from '../generated-docs-from-md-files/all-docs-index-data';

//#endregion

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss'],
  imports: [
    TaonLayoutDocsGenNgDocsComponent,
    TaonIframeSyncComponent,
    CommonModule,
    RouterOutlet,
  ],
})
export class DocsPageComponent implements OnDestroy {
  //#region fields & gettes

  sub = new Subscription();

  cdr = inject(ChangeDetectorRef);

  indexData = BaselineDocsDocsIndexData;

  protected menuItems: DocsMenuItem[] = [
    {
      pathToMd: 'baseline-docs/README.md',
      customTitle: 'Start',
      // group: 'Basics'
    },

    //#region framework
    {
      pathToMd: 'baseline-docs/.ai/docs/framework.md',
      customTitle: 'Intro',
      recommended: 'Framework',
      category: 'FRAMEWORK',
    },
    {
      pathToMd: 'baseline-docs/.ai/docs/taon-building-blocks/contexts.md',
      customTitle: 'Contexts',
      category: 'FRAMEWORK',
    },

    //#endregionF
    {
      pathToMd: 'baseline-docs/api.md',
      customTitle: 'Entites',
      group: 'API',
    },
  ];

  public pageHeadings: DocsHeading[] = [];

  activatedRoute = inject(ActivatedRoute);

  public get rootRouteUrl(): string {
    return (
      '/' +
      this.activatedRoute.snapshot.pathFromRoot
        .flatMap(route => route.url.map(segment => segment.path))
        .join('/')
    );
  }

  get baseHref() {
    return `/#${this.rootRouteUrl}`;
  }
  //#endregion

  //#region on route activated
  onRouteActivate(component: TaonDocsPageComponent): void {
    if (component?.newHeading) {
      component.baseHref = this.baseHref;
      this.sub.add(
        component?.newHeading?.subscribe(pageHeadings => {
          // this.pageHeadings = pageHeadings;

          queueMicrotask(() => {
            this.pageHeadings = pageHeadings;
            setTimeout(() => {
              this.cdr.markForCheck();
            });
          });
        }),
      );
    } else {
      this.pageHeadings = [];
    }
  }
  //#endregion

  //#region on destroy
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
  //#endregion
}
