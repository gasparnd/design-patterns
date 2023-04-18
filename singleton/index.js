class Logging {
  constructor() {
    if (Logging.instance) {
      return Logging.instance;
    }

    Logging.instance = this;
    this.logs = [];

    return this;
  }

  writeLog(logMessage) {
    this.logs.push(logMessage);
    return logMessage;
  }

  logsList() {
    return this.logs;
  }
}

function main() {
  const l1 = new Logging();
  const l2 = new Logging();

  l1.writeLog("Some error message log");
  l1.writeLog("Some success message log");
  l2.writeLog("Some log");
  console.log(l2.logsList());
}

main();
