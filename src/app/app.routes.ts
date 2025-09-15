import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Capa } from './components/capa/capa';
import { Header } from './components/header/header';

export const routes: Routes = [
    {
        path: "",
        component: Home,
    },
    {
        path: "teste",
        component: Header
    }
];
