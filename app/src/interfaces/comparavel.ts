// Utilizando "generics" garantimos que uma intância de uma classe
// possa ser comparada apenas com outra instância da mesma classe
export interface Comparavel<T> {
    ehIgual(objeto: T): boolean;
}