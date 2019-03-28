/**
 * 名札レイアウトを表示する
 */
function showNamePlateView(event) {
    const userNamePlateData = generateNamePlateData();
    const namePlateView = generateNamePlateListLayout(userNamePlateData);

    const namePlateViewElement = document.getElementById('RenderLayoutsArea');
    namePlateViewElement.innerHTML = "";
    namePlateViewElement.appendChild(namePlateView);
}
/**
 * 入力されたテキストから名札情報を作成
 * @return JSON 名札情報
 */
function generateNamePlateData() {
    console.log("onClick generateNamePlateData!");
    const userList = [];
    // 参加者一覧を取得
    const userListElement = document.getElementById('UserList');
    console.log("userListElement:", typeof userListElement, userListElement);
    if (userListElement == "") {
        alert("#UserList エレメントがありません");
        return false;
    }

    const userListText = userListElement.value;
    console.log("userListText:", typeof userListText, userListText);
    if (userListText == "") {
        alert("参加者名と所属を入力してください");
        return false;
    }

    if (userListText != null) {
        // 各行データを配列で取得
        const userListRows = userListText.split(/\r\n|\r|\n/);
        // userListを作成
        for (let index = 0; index < userListRows.length; index++) {
            let rowData = userListRows[index];
                rowData = rowData.split(',');
            console.log("rowData:", rowData);
            // 名前の取得
            let userName = "";
            if(rowData[0] == null) {
                alert("名前を入力してください:"+(index+1)+"行目");
                return false;
            } else {
                userName = rowData[0].trim();
            }

            // 所属の取得
            let userRole = "";
            if(rowData[1] == null) {
                alert("所属を入力してください:"+(index+1)+"行目");
                return false;
            } else {
                userRole = rowData[1].trim();
            }

            // 画像パスの登録
            let userImage = "";
            if(rowData[2] == null) {
                alert("Slack画像URLを入力してください:"+(index+1)+"行目");
                return false;
            } else {
                userImage = rowData[2].trim();
            }


            // ユーザーデータの登録
            userList.push({ 
                name: userName,
                role: userRole,
                image: userImage
            });
        }
    }
    console.log("userList:", userList);

    // userListの中身を確認出力する
    if (userList.length > 0) {
        const renderAreaElement = document.getElementsByClassName('renderArea')[0];
        if (renderAreaElement == null) {
            return;
        }
        // 確認用出力
        let userListOutputText = JSON.stringify(userList);
        userListOutputText = userListOutputText.replace(/},{/g,'},<br>{');
        const userListCountText = "参加者: " + String(userList.length) + "人<br>";
        renderAreaElement.innerHTML = userListCountText + userListOutputText;

        return userList;
    }
};
/**
 * 名札リストのレイアウトを出力する
 * @param userList Array 名札データ
 */
function generateNamePlateListLayout(userList = []) {
    console.log("generateNamePlateLayout userList < ", userList);
    if (userList.length <= 0) {
        return;
    }
    const namePlateView = document.createElement('div', {
        id: 'NamePlateView'
    });
    console.log("namePlateView:", namePlateView);
    for (let index = 0; index < userList.length; index++) {
        const userData = userList[index];
        const namePlateElement = generateNamePlateLayout(userList[index], index);
        if (namePlateElement != null) {
            // 片面分を設定
            const namePlate = document.createElement('div');
            namePlate.className = "name-plate-view";
            namePlate.appendChild(namePlateElement.cloneNode(true));
            // 裏面分を設定
            const namePlateReverse = document.createElement('div');
            namePlateReverse.className = "name-plate-view reverse";
            namePlateReverse.appendChild(namePlateElement.cloneNode(true));

            // 余白分を設定
            const namePlateBlank = document.createElement('div');
            namePlateBlank.className = "name-plate-view blank";
            
            // 両面分を登録
            const namePlateWrapper = document.createElement('div');
            namePlateWrapper.className = "name-plate-view-wrapper user"+index;
            namePlateWrapper.appendChild(namePlateBlank);
            namePlateWrapper.appendChild(namePlateReverse);
            namePlateWrapper.appendChild(namePlate);
            namePlateWrapper.appendChild(namePlateBlank.cloneNode(true));

            // 一人分のレイアウトをリストに登録
            namePlateView.appendChild(namePlateWrapper);
        }
    }
    console.log("namePlateView=>", namePlateView);
    return namePlateView;
}

/**
 * １つ分の名札エレメントを作成する
 * @param userData Object ユーザ一人分のJSONデータ
 * @param index int レイアウト番号
 */
function generateNamePlateLayout(userData = {}, index = 0) {
    // 画像エレメントを作成する
    const userImageElement = document.createElement('img');
    userImageElement.setAttribute('src', userData.image);
    userImageElement.className = "user-image";
    // 名前エレメントを作成する
    const userNameElement = document.createElement('div');
    userNameElement.textContent = userData.name;
    userNameElement.className = "user-name";
    // 所属エレメントを作成する
    const userRoleElement = document.createElement('div');
    userRoleElement.textContent = userData.role;
    userRoleElement.className = "user-role";

    // 名札エレメントを作成する
    const namePlateElement = document.createElement('div');
    namePlateElement.className = 'namePlate'+index;
    namePlateElement.appendChild(userImageElement);
    namePlateElement.appendChild(userNameElement);
    namePlateElement.appendChild(userRoleElement);

    console.log("generateNamePlateLayout:", index, userData, namePlateElement);
    return namePlateElement;
}