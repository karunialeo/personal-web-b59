class Phone {
  battery = 0;
  screen = 0;
  signal = 0;

  constructor(name = "") {
    this.name = name;
  }

  connectWifi() {
    // logic untuk connect ke wifi
    if (this.signal > 50 && this.battery > 5) {
      this.wifiConnectSuccess();
    } else {
      this.wifiConnectFail();
    }
  }

  wifiConnectSuccess() {
    // logic connect sukses
    console.log("connect success to wifi");
  }

  wifiConnectFail() {
    console.log("failed to connect");
  }
}

const iphone = new Phone("IPhone 16 Pro");
iphone.signal = 45;
iphone.battery = 40;
console.log(iphone.name);
iphone.connectWifi();
