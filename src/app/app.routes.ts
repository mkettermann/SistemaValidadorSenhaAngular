import { Routes } from '@angular/router';
import { ValidationForm } from './pages/validation-form/validation-form';
import { MasterLayout } from './layout/master-layout/master-layout';

export const routes: Routes = [
	{
		path: '', // A rota inicial passa pelo layout mestre.
		component: MasterLayout,
		children: [
			{ // Este sistema só terá uma página, então a rota raiz já é o formulário de validação.
				path: '',
				component: ValidationForm, // Sistema muito pequeno, então sem lazy loading por enquanto
				pathMatch: 'full',
			},
		],
	}
];
