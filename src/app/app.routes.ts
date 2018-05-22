import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Home1Component } from './pages/home1/home1.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent, pathMatch: 'full'},
	{path: 'home1', component: Home1Component, pathMatch: 'full'},
	{path: 'lazy', loadChildren: './pages/lazy/lazy.module#LazyModule'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {
}