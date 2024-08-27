import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskReviewComponent } from './task-review/task-review.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    { path: "accueil", component: AccueilComponent },
    { path: "connexion", component: ConnexionComponent },
    { path: "tasklist", component: TaskListComponent },  
    { path: "taskreview", component: TaskReviewComponent },  
    { path: "", redirectTo: "accueil", pathMatch: 'full' },
    { path: "**", component: Page404Component }
];
