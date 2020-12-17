"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseClient {
    static getBrandProduct(brand) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                return resolve(DatabaseClient._data.filter(product => product.brand.toLowerCase() === brand.toLowerCase()));
            }, 1000);
        });
    }
    static getProductDetails(productId) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let product = DatabaseClient._data.filter(product => product.id === productId);
                return resolve(product[0]);
            }, 1500);
        });
    }
    static addProduct(brand, name, price, parentProducts, childProducts) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let id = Math.floor(Math.random() * 100).toString();
                DatabaseClient._data.push({ id, brand, name, price, childProducts, parentProducts });
                return resolve();
            }, 2000);
        });
    }
}
exports.DatabaseClient = DatabaseClient;
DatabaseClient._data = [
    {
        "id": "1",
        "name": "Voltsillam",
        "brand": "Naproxen",
        "price": 271.65,
        "parentProducts": ["2", "8"],
        "childProducts": ["10"]
    },
    {
        "id": "2",
        "name": "Home Ing",
        "brand": "Naproxen",
        "price": 21.36,
        "parentProducts": [],
        "childProducts": ["1"]
    },
    {
        "id": "3",
        "name": "Mat Lam Tam",
        "brand": "Lansoprazole",
        "price": 252.10,
        "parentProducts": [],
        "childProducts": ["4", "17", "19"]
    },
    {
        "id": "4",
        "name": "Cardify",
        "brand": "Lansoprazole",
        "price": 529.90,
        "parentProducts": ["3"],
        "childProducts": []
    },
    {
        "id": "5",
        "name": "Regrant",
        "brand": "Cortifoam",
        "price": 517.71,
        "parentProducts": [],
        "childProducts": ["6"]
    },
    {
        "id": "6",
        "name": "Fintone",
        "brand": "Cortifoam",
        "price": 975.46,
        "parentProducts": ["5"],
        "childProducts": ["13"]
    },
    {
        "id": "7",
        "name": "Konklab",
        "brand": "Neurontin",
        "price": 165.99,
        "parentProducts": ["14"],
        "childProducts": []
    },
    {
        "id": "8",
        "name": "Domainer",
        "brand": "Naproxen",
        "price": 364.29,
        "parentProducts": [],
        "childProducts": ["8"]
    },
    {
        "id": "9",
        "name": "Fixflex",
        "brand": "Hydrocortisone",
        "price": 167.56,
        "parentProducts": [],
        "childProducts": []
    },
    {
        "id": "10",
        "name": "Y-find",
        "brand": "Naproxen",
        "price": 258.75,
        "parentProducts": ["1"],
        "childProducts": ["15"]
    },
    {
        "id": "11",
        "name": "Trippledex",
        "brand": "ONDANSETRON",
        "price": 326.30,
        "parentProducts": [],
        "childProducts": []
    },
    {
        "id": "12",
        "name": "Sonsing",
        "brand": "PAXIL",
        "price": 813.00,
        "parentProducts": ["18", "20"],
        "childProducts": []
    },
    {
        "id": "13",
        "name": "Treeflex",
        "brand": "Cortifoam",
        "price": 529.52,
        "parentProducts": ["13"],
        "childProducts": []
    },
    {
        "id": "14",
        "name": "Lotstring",
        "brand": "Neurontin",
        "price": 354.93,
        "parentProducts": [],
        "childProducts": ["7"]
    },
    {
        "id": "15",
        "name": "Asoka",
        "brand": "Naproxen",
        "price": 659.09,
        "parentProducts": ["10"],
        "childProducts": []
    },
    {
        "id": "16",
        "name": "Duobam",
        "brand": "Metaxalone",
        "price": 725.57,
        "parentProducts": [],
        "childProducts": []
    },
    {
        "id": "17",
        "name": "Matsoft",
        "brand": "Lansoprazole",
        "price": 506.36,
        "parentProducts": ["3"],
        "childProducts": []
    },
    {
        "id": "18",
        "name": "Job",
        "brand": "PAXIL",
        "price": 864.05,
        "parentProducts": ["12"],
        "childProducts": []
    },
    {
        "id": "19",
        "name": "Veribet",
        "brand": "Lansoprazole",
        "price": 946.56,
        "parentProducts": ["3"],
        "childProducts": []
    },
    {
        "id": "20",
        "name": "Tin",
        "brand": "PAXIL",
        "price": 168.43,
        "parentProducts": ["12"],
        "childProducts": []
    }
];
//# sourceMappingURL=DatabaseClient.js.map