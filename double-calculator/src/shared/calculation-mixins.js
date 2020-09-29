export const calculations = {
  methods: {
    async openDB() {
      return new Promise((resolve, reject) => {
        let openRequest = window.indexedDB.open("CalculationDB", 1);
        openRequest.onerror = (e) => {
          console.error("Error opening Database", e);
          reject("Error");
        };
        openRequest.onsuccess = (e) => {
          resolve(e.target.result);
        };
        openRequest.onupgradeneeded = function() {
          openRequest.result.createObjectStore("Calculation", {
            keyPath: "id",
            autoIncrement: true,
          });
        };
      });
    },
    async createCalculation(result) {
      return new Promise((resolve, reject) => {
        let trans = this.db.transaction(["Calculation"], "readwrite");
        trans.oncomplete = (e) => {
          resolve(e);
        };
        trans.onerror = (e) => {
          reject(e);
        };
        let store = trans.objectStore("Calculation");
        store.add(result);
      });
    },
    async getCalculation() {
      return new Promise((resolve) => {
        let trans = this.db.transaction(["Calculation"], "readonly");

        let store = trans.objectStore("Calculation");
        let results = [];

        store.openCursor().onsuccess = (e) => {
          let cursor = e.target.result;
          if (cursor) {
            results.push(cursor.value);
            cursor.continue();
          }
        };
        trans.oncomplete = () => {
          resolve(results);
        };
      });
    },
    async deleteCalculation(id) {
      return new Promise((resolve) => {
        let trans = this.db.transaction(["Calculation"], "readwrite");
        trans.oncomplete = () => {
          resolve();
        };

        let store = trans.objectStore("Calculation");
        store.delete(id);
      });
    },
  },
};
