import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'overview-main',
    loadChildren: () => import('./overview-main/overview-main.module').then( m => m.OverviewMainPageModule)
  },
  {
    path: 'browse',
    loadChildren: () => import('./browse/browse.module').then( m => m.BrowsePageModule)
  },
  {
    path: 'set-overview',
    loadChildren: () => import('./set-overview/set-overview.module').then( m => m.SetOverviewPageModule)
  },
  {
    path: 'deck-overview',
    loadChildren: () => import('./deck-overview/deck-overview.module').then( m => m.DeckOverviewPageModule)
  },
  {
    path: 'card-overview',
    loadChildren: () => import('./card-overview/card-overview.module').then( m => m.CardOverviewPageModule)
  },
  {
    path: 'card-generator',
    loadChildren: () => import('./card-generator/card-generator.module').then( m => m.CardGeneratorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
