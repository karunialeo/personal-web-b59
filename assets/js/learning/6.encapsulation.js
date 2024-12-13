class BankAccount {
  #balance = 0;

  deposit(amount) {
    // if (amount > 0) this.balance = this.balance + amount
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const accountBCA = new BankAccount();

console.log(`saldo awal ${accountBCA.getBalance()}`); // belum di isi saldo

accountBCA.deposit(100); // top up saldo ✅✅✅
console.log(`saldo setelah di top up ${accountBCA.getBalance()}`); // sudah di isi saldo

// accountBCA.#balance = 500000; // override saldo ❌❌❌
console.log(`saldo setelah di hack ${accountBCA.getBalance()}`);
