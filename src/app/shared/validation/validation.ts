import { Injectable } from "@angular/core";

// Classe de Validação não acoplada (D.I.)
@Injectable({ providedIn: 'root' })
export class Validation {

	// Organizei separado as validações para facilitar a leitura e manutenção.

	// Sequência crescente.
	increasingSequence = (nameToDisplay: string, value: string) => {
		let isIncreasingSequence = false; // Ex: 184760
		let arrayValor = value.toString().split('').map(Number); // [1, 8, 4, 7, 6, 0]
		// Exceto a primeira, compara com a anterior.
		if (arrayValor.every((num, i) => i === 0 || num >= arrayValor[i - 1])) isIncreasingSequence = true;
		if (!isIncreasingSequence) return { kind: 'increasingSequence', message: `${nameToDisplay} deve conter sequências crescentes.` };
		return null;
	}

	// Validação de sequência repetida (ex: 112345 ou 123455).
	repeatedSequence = (nameToDisplay: string, value: string) => {
		let hasRepeatedSequence = false;
		let sequences = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'];
		for (let sequence of sequences) {
			if (value.includes(sequence)) hasRepeatedSequence = true;
		}
		if (!hasRepeatedSequence) return { kind: 'repeatedSequence', message: `${nameToDisplay} deve conter sequências repetidas.` };
		return null;
	}

}