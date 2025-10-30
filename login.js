const token = "token_67890"; // 
const tabungan = [1000000, 2000000, 3000000];

function login(user) {
    console.log('Login berhasil');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user !== "blivy") reject("User tidak ditemukan");
            resolve({ token: token });
        }, 2000);
    });
}

function getUser(token) {
    if (token) {
        return { key: "C3M4L" };
    }
}

function getTabungan(key) {
    return new Promise((resolve, reject) => {
        if (key) {
            setTimeout(() => {
                resolve(tabungan);
            }, 2000);
        } else {
            reject("User tidak ditemukan");
        }
    });
}

function getSaldo(tabungan) {
    return new Promise((resolve) => {
        if (tabungan) {
            setTimeout(() => {
                let total = 0;
                tabungan.forEach(item => {
                    total += item;
                });
                resolve(total);
            }, 2000);
        } else {
            resolve(0);
        }
    });
}

async function main() {
    try {
        const response = await login("blivy");
        const key = getUser(response.token);
        const tabunganData = await getTabungan(key);
        const saldo = await getSaldo(tabunganData);

        console.log(`Token: ${response.token}`);
        console.log(`Key: ${key.key}`);
        console.log(`Tabungan: ${tabunganData}`);
        console.log(`Saldo: ${saldo}`);
    } catch (err) {
        console.log(err);
    }
}

main();
