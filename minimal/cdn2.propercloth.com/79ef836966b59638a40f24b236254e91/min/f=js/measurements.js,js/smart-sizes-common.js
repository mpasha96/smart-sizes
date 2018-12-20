var BODY_STYLE_CLASSIC = 1;
var BODY_STYLE_SLIM = 0;
var BODY_STYLE_SUPER_SLIM = 2;
standart_size_ss_s_ssf = new Array(14, 20.5, 17, 18.5, 15.75, 27.5, 6.75, 8.25, 6, 0, 0, 0, 0);
standart_size_ss_s_sf = new Array(14, 21, 18, 19, 16, 27.5, 7, 8.5, 6.25, 0, 0, 0, 0);
standart_size_ss_s_cf = new Array(14, 22, 20, 20.25, 17, 28, 7.5, 8.5, 6.75, 0, 0, 0, 0);
standart_size_ss_m_ssf = new Array(15, 21.5, 18, 19.5, 16.75, 28.5, 7.5, 8.5, 6.75, 0, 0, 0, 0);
standart_size_ss_m_sf = new Array(15, 22, 19, 20, 17, 28.5, 7.75, 8.75, 7, 0, 0, 0, 0);
standart_size_ss_m_cf = new Array(15, 23, 21, 21.25, 18, 29, 8.25, 8.75, 7.5, 0, 0, 0, 0);
standart_size_ss_l_ssf = new Array(16, 22.5, 19, 20.5, 17.75, 29.5, 8.25, 8.75, 7.5, 0, 0, 0, 0);
standart_size_ss_l_sf = new Array(16, 23, 20, 21, 18, 29.5, 8.5, 9, 7.75, 0, 0, 0, 0);
standart_size_ss_l_cf = new Array(16, 24, 22, 22.25, 19, 30, 9, 9, 8.25, 0, 0, 0, 0);
standart_size_ss_xl_ssf = new Array(17, 23.5, 20, 21.5, 18.75, 30.5, 9, 9.25, 8.25, 0, 0, 0, 0);
standart_size_ss_xl_sf = new Array(17, 24, 21, 22, 19, 30.5, 9.25, 10, 8.5, 0, 0, 0, 0);
standart_size_ss_xl_cf = new Array(17, 25, 23, 23.25, 20, 31, 9.5, 10, 9, 0, 0, 0, 0);
standart_size_s_ssf = new Array(14.5, 33, 20.25, 17, 31.5, 16.5, 7.5, 8.5);
standart_size_s_sf = new Array(14.5, 33, 21.25, 17, 31.5, 18, 8.375, 8.5);
standart_size_s_cf = new Array(14.5, 33, 21.25, 17, 31.5, 19.5, 8.875, 8.5);
standart_size_m_ssf = new Array(15.5, 34, 21.25, 18, 32.5, 18.5, 6.875, 9);
standart_size_m_sf = new Array(15.5, 34, 22.25, 18, 32.5, 20, 8.75, 9);
standart_size_m_cf = new Array(15.5, 34, 23.25, 18, 32.5, 21.5, 9.625, 9);
standart_size_l_ssf = new Array(16.5, 35, 23.25, 19, 33.5, 20.5, 8.625, 9.25);
standart_size_l_sf = new Array(16.5, 35, 24.25, 19, 33.5, 22, 9.5, 9.25);
standart_size_l_cf = new Array(16.5, 35, 25.25, 19, 33.5, 23.5, 10.375, 9.25);
standart_size_xl_ssf = new Array(17.5, 36, 25.25, 20, 34.5, 22.5, 9.375, 9.5);
standart_size_xl_sf = new Array(17.5, 36, 26.25, 20, 34.5, 24, 10.25, 9.5);
standart_size_xl_cf = new Array(17.5, 36, 27.25, 20, 34.5, 25.5, 11.125, 9.5);
standart_size_xxl_ssf = new Array(18.5, 37, 27.25, 21, 35.5, 24.5, 10.125, 10);
standart_size_xxl_sf = new Array(18.5, 37, 28.25, 21, 35.5, 26, 11, 10);
standart_size_xxl_cf = new Array(18.5, 37, 29.25, 21, 35.5, 27.5, 11.875, 10);
var shrinkage_length_adj = 2;
var shrinkage_width_adj = 2;

function excelCeil(value) {
    if (value > 0)
        return Math.ceil(value);
    else
        return Math.floor(value);
}

function excelFloor(value) {
    if (value > 0)
        return Math.floor(value);
    else
        return Math.ceil(value);
}

function excelRound(value) {
    if (value % 1 == -0.5) return Math.floor(value);
    return Math.round(value);
}

function roundToBase(value, base) {
    return Math.floor((value + base / 2) / base) * base;
}

function ChestWidthTable() {
    this.table;
    this.init = function () {
        this.table = new Array();
        this.table[0] = new Array(1, 37.25, 74.5, 1, 0, 71, 149, 22.5);
        this.table[1] = new Array(2, 36.75, 73.5, 0, 1, 71, 147, 22);
        this.table[2] = new Array(3, 36.5, 73, 0, 0, 70, 146, 22.5);
        this.table[3] = new Array(4, 36.25, 72.5, 1, 0, 69, 145, 22);
        this.table[4] = new Array(5, 35.75, 71.5, 0, 1, 69, 143, 21.5);
        this.table[5] = new Array(6, 35.5, 71, 0, 0, 68, 142, 22);
        this.table[6] = new Array(7, 35.25, 70.5, 1, 0, 67, 141, 21.5);
        this.table[7] = new Array(8, 34.75, 69.5, 0, 1, 67, 139, 21);
        this.table[8] = new Array(9, 34.5, 69, 0, 0, 66, 138, 21.5);
        this.table[9] = new Array(10, 34.25, 68.5, 1, 0, 65, 137, 21);
        this.table[10] = new Array(11, 33.75, 67.5, 0, 1, 65, 135, 20.5);
        this.table[11] = new Array(12, 33.5, 67, 0, 0, 64, 134, 21);
        this.table[12] = new Array(13, 33.25, 66.5, 1, 0, 63, 133, 20.5);
        this.table[13] = new Array(14, 32.75, 65.5, 0, 1, 63, 131, 20);
        this.table[14] = new Array(15, 32.5, 65, 0, 0, 62, 130, 20.5);
        this.table[15] = new Array(16, 32.25, 64.5, 1, 0, 61, 129, 20);
        this.table[16] = new Array(17, 31.75, 63.5, 0, 1, 61, 127, 19.5);
        this.table[17] = new Array(18, 31.5, 63, 0, 0, 60, 126, 20);
        this.table[18] = new Array(19, 31.25, 62.5, 1, 0, 59, 125, 19.5);
        this.table[19] = new Array(20, 30.75, 61.5, 0, 1, 59, 123, 19);
        this.table[20] = new Array(21, 30.5, 61, 0, 0, 58, 122, 19.5);
        this.table[21] = new Array(22, 30.25, 60.5, 1, 0, 57, 121, 19);
        this.table[22] = new Array(23, 29.75, 59.5, 0, 1, 57, 119, 18.5);
        this.table[23] = new Array(24, 29.5, 59, 0, 0, 56, 118, 19);
        this.table[24] = new Array(25, 29.25, 58.5, 1, 0, 55, 117, 18.5);
        this.table[25] = new Array(26, 28.75, 57.5, 0, 1, 55, 115, 18);
        this.table[26] = new Array(27, 28.5, 57, 0, 0, 54, 114, 18.5);
        this.table[27] = new Array(28, 28.25, 56.5, 1, 0, 53, 113, 18);
        this.table[28] = new Array(29, 27.75, 55.5, 0, 1, 53, 111, 17.5);
        this.table[29] = new Array(30, 27.5, 55, 0, 0, 52, 110, 18);
        this.table[30] = new Array(31, 27.25, 54.5, 1, 0, 51, 109, 17.5);
        this.table[31] = new Array(32, 26.75, 53.5, 0, 1, 51, 107, 17);
        this.table[32] = new Array(33, 26.5, 53, 0, 0, 50, 106, 17.5);
        this.table[33] = new Array(34, 26.25, 52.5, 1, 0, 49, 105, 17);
        this.table[34] = new Array(35, 25.75, 51.5, 0, 1, 49, 103, 16.5);
        this.table[35] = new Array(36, 25.5, 51, 0, 0, 48, 102, 17);
        this.table[36] = new Array(37, 25.25, 50.5, 1, 0, 47, 101, 16.5);
        this.table[37] = new Array(38, 24.75, 49.5, 0, 1, 47, 99, 16);
        this.table[38] = new Array(39, 24.5, 49, 0, 0, 46, 98, 16.5);
        this.table[39] = new Array(40, 24.25, 48.5, 1, 0, 45, 97, 16);
        this.table[40] = new Array(41, 23.75, 47.5, 0, 1, 45, 95, 15.5);
        this.table[41] = new Array(42, 23.5, 47, 0, 0, 44, 94, 16);
        this.table[42] = new Array(43, 23.25, 46.5, 1, 0, 43, 93, 15.5);
        this.table[43] = new Array(44, 22.75, 45.5, 0, 1, 43, 91, 15);
        this.table[44] = new Array(45, 22.5, 45, 0, 0, 42, 90, 15.5);
        this.table[45] = new Array(46, 22.25, 44.5, 1, 0, 41, 89, 15);
        this.table[46] = new Array(47, 21.75, 43.5, 0, 1, 41, 87, 14.5);
        this.table[47] = new Array(48, 21.5, 43, 0, 0, 40, 86, 15);
        this.table[48] = new Array(49, 21.25, 42.5, 1, 0, 39, 85, 14.5);
        this.table[49] = new Array(50, 20.75, 41.5, 0, 1, 39, 83, 14);
        this.table[50] = new Array(51, 20.5, 41, 0, 0, 38, 82, 14.5);
        this.table[51] = new Array(52, 20.25, 40.5, 1, 0, 37, 81, 14);
        this.table[52] = new Array(53, 19.5, 39, 0, 0, 36, 78, 14);
    }
    this.findNearIdByValue = function (field, value) {
        var min_distance = false;
        var target_element = 0;
        for (i = 0; i < this.table.length; i++) {
            if (min_distance === false || Math.abs(this.table[i][field] - value) < min_distance) {
                target_element = i;
                min_distance = Math.abs(this.table[i][field] - value);
            }
        }
        return target_element;
    }
    this.getElementById = function (id) {
        return this.table[id];
    }
    this.getNextElement = function (id) {
        if (this.table[++id] == undefined)
            return false;
        else
            return this.table[id];
    }
    this.getPrevElement = function (id) {
        if (this.table[--id] == undefined)
            return false;
        else
            return this.table[id];
    }
    this.getFirstElement = function () {
        return this.table[0];
    }
    this.getLastElement = function () {
        return this.table[this.table.length - 1];
    }
    this.init();
}

function ChestLimitsTable() {
    this.table;
    this.init = function () {
        this.table = new Array();
        this.table.push({
            "sleeveWidth": 6.25,
            "min": 16.50,
            "max": 16.50
        });
        this.table.push({
            "sleeveWidth": 6.50,
            "min": 16.50,
            "max": 17.50
        });
        this.table.push({
            "sleeveWidth": 6.75,
            "min": 16.50,
            "max": 18.00
        });
        this.table.push({
            "sleeveWidth": 7.00,
            "min": 16.50,
            "max": 19.00
        });
        this.table.push({
            "sleeveWidth": 7.25,
            "min": 16.50,
            "max": 19.50
        });
        this.table.push({
            "sleeveWidth": 7.50,
            "min": 16.50,
            "max": 20.00
        });
        this.table.push({
            "sleeveWidth": 7.75,
            "min": 16.50,
            "max": 21.00
        });
        this.table.push({
            "sleeveWidth": 8.00,
            "min": 16.50,
            "max": 21.50
        });
        this.table.push({
            "sleeveWidth": 8.25,
            "min": 17.50,
            "max": 22.00
        });
        this.table.push({
            "sleeveWidth": 8.50,
            "min": 18.00,
            "max": 23.00
        });
        this.table.push({
            "sleeveWidth": 8.75,
            "min": 19.00,
            "max": 23.50
        });
        this.table.push({
            "sleeveWidth": 9.00,
            "min": 19.50,
            "max": 24.00
        });
        this.table.push({
            "sleeveWidth": 9.25,
            "min": 20.00,
            "max": 25.00
        });
        this.table.push({
            "sleeveWidth": 9.50,
            "min": 21.00,
            "max": 25.50
        });
        this.table.push({
            "sleeveWidth": 9.75,
            "min": 21.50,
            "max": 26.00
        });
        this.table.push({
            "sleeveWidth": 10.00,
            "min": 22.00,
            "max": 27.00
        });
        this.table.push({
            "sleeveWidth": 10.25,
            "min": 23.00,
            "max": 27.50
        });
        this.table.push({
            "sleeveWidth": 10.50,
            "min": 23.50,
            "max": 28.00
        });
        this.table.push({
            "sleeveWidth": 10.75,
            "min": 24.00,
            "max": 29.00
        });
        this.table.push({
            "sleeveWidth": 11.00,
            "min": 25.00,
            "max": 29.50
        });
        this.table.push({
            "sleeveWidth": 11.25,
            "min": 25.50,
            "max": 30.00
        });
        this.table.push({
            "sleeveWidth": 11.50,
            "min": 26.00,
            "max": 31.00
        });
        this.table.push({
            "sleeveWidth": 11.75,
            "min": 27.00,
            "max": 31.50
        });
        this.table.push({
            "sleeveWidth": 12.00,
            "min": 27.50,
            "max": 32.00
        });
        this.table.push({
            "sleeveWidth": 12.25,
            "min": 28.00,
            "max": 32.50
        });
        this.table.push({
            "sleeveWidth": 12.50,
            "min": 29.00,
            "max": 32.50
        });
        this.table.push({
            "sleeveWidth": 12.75,
            "min": 29.50,
            "max": 32.50
        });
        this.table.push({
            "sleeveWidth": 13.00,
            "min": 30.00,
            "max": 32.50
        });
        this.table.push({
            "sleeveWidth": 13.25,
            "min": 31.00,
            "max": 32.50
        });
        this.table.push({
            "sleeveWidth": 13.50,
            "min": 31.50,
            "max": 32.50
        });
        this.table.push({
            "sleeveWidth": 13.75,
            "min": 32.00,
            "max": 32.50
        });
        this.table.push({
            "sleeveWidth": 14.00,
            "min": 32.50,
            "max": 32.50
        });
    }
    this.getNearestObject = function (sleeveWidth) {
        var nearestObject;
        var nearestValue;
        for (var index in this.table) {
            if (undefined == nearestValue || nearestValue > Math.abs(this.table[index]["sleeveWidth"] - sleeveWidth)) {
                nearestObject = this.table[index];
                nearestValue = Math.abs(this.table[index]["sleeveWidth"] - sleeveWidth);
            }
        }
        return nearestObject;
    }
    this.getMinChestByNearestSleeveWidth = function (sleeveWidth) {
        var obj = this.getNearestObject(sleeveWidth);
        return obj.min;
    }
    this.getMaxChestByNearestSleeveWidth = function (sleeveWidth) {
        var obj = this.getNearestObject(sleeveWidth);
        return obj.max;
    }
    this.init();
}

function SleeveWidthLimitsTable() {
    this.table;
    this.init = function () {
        this.table = new Array();
        this.table.push({
            "chestWidth": 16.5,
            "min": 6.25,
            "max": 8.00
        });
        this.table.push({
            "chestWidth": 17,
            "min": 6.25,
            "max": 8.00
        });
        this.table.push({
            "chestWidth": 17.5,
            "min": 6.50,
            "max": 8.25
        });
        this.table.push({
            "chestWidth": 18,
            "min": 6.75,
            "max": 8.50
        });
        this.table.push({
            "chestWidth": 18.5,
            "min": 7.00,
            "max": 8.75
        });
        this.table.push({
            "chestWidth": 19,
            "min": 7.00,
            "max": 8.75
        });
        this.table.push({
            "chestWidth": 19.5,
            "min": 7.25,
            "max": 9.00
        });
        this.table.push({
            "chestWidth": 20,
            "min": 7.50,
            "max": 9.25
        });
        this.table.push({
            "chestWidth": 20.5,
            "min": 7.75,
            "max": 9.50
        });
        this.table.push({
            "chestWidth": 21,
            "min": 7.75,
            "max": 9.50
        });
        this.table.push({
            "chestWidth": 21.5,
            "min": 8.00,
            "max": 9.75
        });
        this.table.push({
            "chestWidth": 22,
            "min": 8.25,
            "max": 10.00
        });
        this.table.push({
            "chestWidth": 22.5,
            "min": 8.50,
            "max": 10.25
        });
        this.table.push({
            "chestWidth": 23,
            "min": 8.50,
            "max": 10.25
        });
        this.table.push({
            "chestWidth": 23.5,
            "min": 8.75,
            "max": 10.50
        });
        this.table.push({
            "chestWidth": 24,
            "min": 9.00,
            "max": 10.75
        });
        this.table.push({
            "chestWidth": 24.5,
            "min": 9.25,
            "max": 11.00
        });
        this.table.push({
            "chestWidth": 25,
            "min": 9.25,
            "max": 11.00
        });
        this.table.push({
            "chestWidth": 25.5,
            "min": 9.50,
            "max": 11.25
        });
        this.table.push({
            "chestWidth": 26,
            "min": 9.75,
            "max": 11.50
        });
        this.table.push({
            "chestWidth": 26.5,
            "min": 10.00,
            "max": 11.75
        });
        this.table.push({
            "chestWidth": 27,
            "min": 10.00,
            "max": 11.75
        });
        this.table.push({
            "chestWidth": 27.5,
            "min": 10.25,
            "max": 12.00
        });
        this.table.push({
            "chestWidth": 28,
            "min": 10.50,
            "max": 12.25
        });
        this.table.push({
            "chestWidth": 28.5,
            "min": 10.75,
            "max": 12.50
        });
        this.table.push({
            "chestWidth": 29,
            "min": 10.75,
            "max": 12.50
        });
        this.table.push({
            "chestWidth": 29.5,
            "min": 11.00,
            "max": 12.75
        });
        this.table.push({
            "chestWidth": 30,
            "min": 11.25,
            "max": 13.00
        });
        this.table.push({
            "chestWidth": 30.5,
            "min": 11.50,
            "max": 13.25
        });
        this.table.push({
            "chestWidth": 31,
            "min": 11.50,
            "max": 13.25
        });
        this.table.push({
            "chestWidth": 31.5,
            "min": 11.75,
            "max": 13.50
        });
        this.table.push({
            "chestWidth": 32,
            "min": 12.00,
            "max": 13.75
        });
        this.table.push({
            "chestWidth": 32.5,
            "min": 12.25,
            "max": 14.00
        });
    }
    this.getNearestObject = function (chestWidth) {
        var nearestObject;
        var nearestValue;
        for (var index in this.table) {
            if (undefined == nearestValue || nearestValue > Math.abs(this.table[index]["chestWidth"] - chestWidth)) {
                nearestObject = this.table[index];
                nearestValue = Math.abs(this.table[index]["chestWidth"] - chestWidth);
            }
        }
        return nearestObject;
    }
    this.getMinSleeveWidthByNearestChest = function (chestWidth) {
        var obj = this.getNearestObject(chestWidth);
        return obj.min;
    }
    this.getMaxSleeveWidthByNearestChest = function (chestWidth) {
        var obj = this.getNearestObject(chestWidth);
        return obj.max;
    }
    this.init();
}

function ShirtMeasurement() {
    this.collar_Shirt = 0;
    this.sleeve_Shirt = 0;
    this.shoulder_Shirt = 0;
    this.chest_Shirt = 0;
    this.mid_Shirt = 0;
    this.sleeveW_Shirt = 0;
    this.length_Shirt = 0;
    this.cuff_Shirt = 0;
    this.washes_Shirt = 0;
    this.short_sleeve_length_Shirt = 0;
    this.short_sleeve_opening_Shirt = 0;
    this.short_sleeve_width_Shirt = 0;
    this.fit = 0;
    this.model_Ord = 0;
    this.size_Ord = 0;
    this.neck_Ord = 0;
    this.length_Ord = 0;
    this.rSleeve_Ord = 0;
    this.lSleeve_Ord = 0;
    this.waist_Ord = 0;
    this.rCuff_Ord = 0;
    this.lCuff_Ord = 0;
    this.bicep_adj_Ord = 0;
    this.yokeadj_Ord = 0;
    this.backDetail_Ord = 0;
    this.rear_side_pleats = 1;
    this.bicepStdDum;
    this.yokeStandard;
    this.waistStdDum;
    this.waistDesDum;
    this.sleeveWDesDum;
    this.chestDesDum;
    this.collarDesDum;
    this.lengthStd;
    this.lengthDesDum;
    this.adjCollar;
    this.adjChest;
    this.adjMiddle;
    this.adjShoulder;
    this.adjBackLen;
    this.adjSleeveWidth;
    this.adjSleeveLen;
    this.adjCuff;
    this.adjShortSleeveLength;
    this.adjShortSleeveWidth;
    this.adjShortSleeveOpeningWidth;
    this.adjBottomWidth;
    this.min_collar = 0;
    this.min_sleeve = 0;
    this.min_shoulder = 0;
    this.min_chest = 0;
    this.min_mid = 0;
    this.min_sleeveW = 0;
    this.min_length = 0;
    this.min_cuff = 0;
    this.max_collar = 0;
    this.max_sleeve = 0;
    this.max_shoulder = 0;
    this.max_chest = 0;
    this.max_mid = 0;
    this.max_sleeveW = 0;
    this.max_length = 0;
    this.max_cuff = 0;
    this.setCollarShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.collar_Shirt = parseFloat(value);
    };
    this.setSleeveShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.sleeve_Shirt = parseFloat(value);
    };
    this.setShoulderShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.shoulder_Shirt = parseFloat(value);
    };
    this.setChestShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.chest_Shirt = parseFloat(value);
    };
    this.setMidShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.mid_Shirt = parseFloat(value);
    };
    this.setSleeveWShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.sleeveW_Shirt = parseFloat(value);
    };
    this.setLengthShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.length_Shirt = parseFloat(value);
    };
    this.setCuffShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.cuff_Shirt = parseFloat(value);
    };
    this.setWashesShirt = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.washes_Shirt = parseFloat(value);
    };
    this.setRearSidePleats = function (value) {
        this.rear_side_pleats = (value == true);
    };
    this.setAdjCollar = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjCollar = parseFloat(value);
    };
    this.setAdjChest = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjChest = parseFloat(value);
    };
    this.setAdjShoulder = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjShoulder = parseFloat(value);
    };
    this.setAdjMiddle = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjMiddle = parseFloat(value);
    };
    this.setAdjBackLen = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjBackLen = parseFloat(value);
    };
    this.setAdjSleeveW = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjSleeveWidth = parseFloat(value);
    };
    this.setAdjSleeveL = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjSleeveLen = parseFloat(value);
    };
    this.setAdjCuff = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjCuff = parseFloat(value);
    };
    this.setAdjShortSleeveLength = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjShortSleeveLength = parseFloat(value);
    };
    this.setAdjShortSleeveWidth = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjShortSleeveWidth = parseFloat(value);
    };
    this.setAdjShortSleeveOpeningWidth = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjShortSleeveOpeningWidth = parseFloat(value);
    };
    this.setAdjBottomWidth = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjBottomWidth = parseFloat(value);
    };
    this.setAdjParamsArr = function (arr) {
        this.setCollarShirt(arr[0]);
        this.setSleeveShirt(arr[1]);
        this.setShoulderShirt(arr[3]);
        this.setChestShirt(arr[2]);
        this.setMidShirt(arr[5]);
        this.setSleeveWShirt(arr[6]);
        this.setLengthShirt(arr[4]);
        this.setCuffShirt(arr[7]);
        this.setAdjCollar(arr[0]);
        this.setAdjSleeveL(arr[1]);
        this.setAdjChest(arr[2]);
        this.setAdjShoulder(arr[3]);
        this.setAdjBackLen(arr[4]);
        this.setAdjMiddle(arr[5]);
        this.setAdjSleeveW(arr[6]);
        this.setAdjCuff(arr[7]);
    }
    this.setAdjParamsArrSS = function (arr) {
        this.setCollarShirt(arr[0]);
        this.setSleeveShirt(0);
        this.setShoulderShirt(arr[4]);
        this.setChestShirt(arr[1]);
        this.setMidShirt(arr[2]);
        this.setLengthShirt(arr[5]);
        this.setCuffShirt(0);
        this.setSleeveWShirt(0);
        this.setAdjCollar(arr[0]);
        this.setAdjChest(arr[1]);
        this.setAdjMiddle(arr[2]);
        this.setAdjBottomWidth(arr[3]);
        this.setAdjShoulder(arr[4]);
        this.setAdjBackLen(arr[5]);
        this.setAdjShortSleeveLength(arr[7]);
        this.setAdjShortSleeveWidth(arr[6]);
        this.setAdjShortSleeveOpeningWidth(arr[8]);
        this.setAdjCuff(arr[9]);
        this.setAdjSleeveL(arr[11]);
        this.setAdjSleeveW(arr[12]);
    }
    this.getFitOrd = function () {
        return this.fit
    };
    this.getModelOrd = function () {
        return this.model_Ord
    };
    this.getSizeOrd = function () {
        return this.size_Ord
    };
    this.getNeckOrd = function () {
        return this.neck_Ord
    };
    this.getLengthOrd = function () {
        return this.length_Ord
    };
    this.getRSleeveOrd = function () {
        return this.rSleeve_Ord
    };
    this.getLSleeveOrd = function () {
        return this.lSleeve_Ord
    };
    this.getWaistOrd = function () {
        return this.waist_Ord
    };
    this.getRCuffOrd = function () {
        return this.rCuff_Ord
    };
    this.getLCuffOrd = function () {
        return this.lCuff_Ord
    };
    this.getBicepAdjOrd = function () {
        return this.bicep_adj_Ord
    };
    this.getYokeAdjOrd = function () {
        return this.yokeadj_Ord
    };
    this.getBackDetailOrd = function () {
        return this.backDetail_Ord
    };
    this.getMinCollar = function () {
        return this.min_collar;
    };
    this.getMinSleeve = function () {
        return this.min_sleeve;
    };
    this.getMinShoulder = function () {
        return this.min_shoulder;
    };
    this.getMinChest = function () {
        return this.min_chest;
    };
    this.getMinMid = function () {
        return this.min_mid;
    };
    this.getMinSleveW = function () {
        return this.min_sleeveW;
    };
    this.getMinLength = function () {
        return this.min_length;
    };
    this.getMinCuff = function () {
        return this.min_cuff;
    };
    this.getMaxCollar = function () {
        return this.max_collar;
    };
    this.getMaxSleeve = function () {
        return this.max_sleeve;
    };
    this.getMaxShoulder = function () {
        return this.max_shoulder;
    };
    this.getMaxChest = function () {
        return this.max_chest;
    };
    this.getMaxMid = function () {
        return this.max_mid;
    };
    this.getMaxSleveW = function () {
        return this.max_sleeveW;
    };
    this.getMaxLength = function () {
        return this.max_length;
    };
    this.getMaxCuff = function () {
        return this.max_cuff;
    };
    this.getAdjCollar = function () {
        return Math.abs(this.adjCollar)
    };
    this.getAdjChest = function () {
        return Math.abs(this.adjChest)
    };
    this.getAdjShoulder = function () {
        return Math.abs(this.adjShoulder)
    };
    this.getAdjMiddle = function () {
        return Math.abs(this.adjMiddle)
    };
    this.getAdjBackLen = function () {
        return Math.abs(this.adjBackLen)
    };
    this.getAdjSleeveW = function () {
        return Math.abs(this.adjSleeveWidth)
    };
    this.getAdjSleeveL = function () {
        return Math.abs(this.adjSleeveLen)
    };
    this.getAdjCuff = function () {
        return Math.abs(this.adjCuff)
    };
    this.getAdjShortSleeveLength = function () {
        return Math.abs(this.adjShortSleeveLength)
    };
    this.getAdjShortSleeveWidth = function () {
        return Math.abs(this.adjShortSleeveWidth)
    };
    this.getAdjShortSleeveOpeningWidth = function () {
        return Math.abs(this.adjShortSleeveOpeningWidth)
    };
    this.getAdjBottomWidth = function () {
        return Math.abs(this.adjBottomWidth)
    };
    this.table = new ChestWidthTable();
    this.calculateStandardSizesLongSleeve = function (collar, sleeve_length, type_of_fit) {
        var standard_sizes_table = {
            sf: {
                "14": {
                    "yoke": 16,
                    "chest": 19.5,
                    "midsection": 17,
                    "sleeve_width": 7.5,
                    "cuff": 8
                },
                "14.25": {
                    "yoke": 16.25,
                    "chest": 20,
                    "midsection": 17.5,
                    "sleeve_width": 7.75,
                    "cuff": 8.25
                },
                "14.5": {
                    "yoke": 16.5,
                    "chest": 20.5,
                    "midsection": 18,
                    "sleeve_width": 7.75,
                    "cuff": 8.25
                },
                "14.75": {
                    "yoke": 16.75,
                    "chest": 21,
                    "midsection": 18.5,
                    "sleeve_width": 7.75,
                    "cuff": 8.5
                },
                "15": {
                    "yoke": 17,
                    "chest": 21.5,
                    "midsection": 19,
                    "sleeve_width": 8,
                    "cuff": 8.5
                },
                "15.25": {
                    "yoke": 17.25,
                    "chest": 22,
                    "midsection": 19.5,
                    "sleeve_width": 8,
                    "cuff": 8.75
                },
                "15.5": {
                    "yoke": 17.25,
                    "chest": 22.5,
                    "midsection": 20,
                    "sleeve_width": 8.25,
                    "cuff": 8.75
                },
                "15.75": {
                    "yoke": 17.5,
                    "chest": 23,
                    "midsection": 20.75,
                    "sleeve_width": 8.75,
                    "cuff": 8.75
                },
                "16": {
                    "yoke": 17.75,
                    "chest": 23.5,
                    "midsection": 21,
                    "sleeve_width": 9,
                    "cuff": 9
                },
                "16.25": {
                    "yoke": 18,
                    "chest": 24,
                    "midsection": 21.5,
                    "sleeve_width": 9,
                    "cuff": 9
                },
                "16.5": {
                    "yoke": 18,
                    "chest": 24.5,
                    "midsection": 22,
                    "sleeve_width": 9.25,
                    "cuff": 9
                },
                "16.75": {
                    "yoke": 18.25,
                    "chest": 25,
                    "midsection": 22.5,
                    "sleeve_width": 9.25,
                    "cuff": 9.25
                },
                "17": {
                    "yoke": 18.25,
                    "chest": 25.5,
                    "midsection": 23,
                    "sleeve_width": 9.5,
                    "cuff": 9.25
                },
                "17.25": {
                    "yoke": 18.5,
                    "chest": 26,
                    "midsection": 23.5,
                    "sleeve_width": 9.75,
                    "cuff": 9.5
                },
                "17.5": {
                    "yoke": 18.75,
                    "chest": 26.5,
                    "midsection": 24,
                    "sleeve_width": 9.75,
                    "cuff": 9.5
                },
                "17.75": {
                    "yoke": 19,
                    "chest": 27,
                    "midsection": 24.5,
                    "sleeve_width": 10,
                    "cuff": 9.75
                },
                "18": {
                    "yoke": 19.25,
                    "chest": 27.5,
                    "midsection": 25,
                    "sleeve_width": 10,
                    "cuff": 9.75
                },
                "18.25": {
                    "yoke": 19.5,
                    "chest": 28,
                    "midsection": 25.5,
                    "sleeve_width": 10.5,
                    "cuff": 10
                },
                "18.5": {
                    "yoke": 19.75,
                    "chest": 28.5,
                    "midsection": 26,
                    "sleeve_width": 10.5,
                    "cuff": 10
                },
                "18.75": {
                    "yoke": 20,
                    "chest": 29,
                    "midsection": 26.5,
                    "sleeve_width": 10.75,
                    "cuff": 10.25
                },
                "19": {
                    "yoke": 20.25,
                    "chest": 29.5,
                    "midsection": 27,
                    "sleeve_width": 10.75,
                    "cuff": 10.25
                },
                "19.25": {
                    "yoke": 20.5,
                    "chest": 30,
                    "midsection": 27.5,
                    "sleeve_width": 11,
                    "cuff": 10.25
                },
                "19.5": {
                    "yoke": 20.75,
                    "chest": 30.5,
                    "midsection": 28,
                    "sleeve_width": 11.25,
                    "cuff": 10.25
                },
                "19.75": {
                    "yoke": 21,
                    "chest": 31,
                    "midsection": 28.5,
                    "sleeve_width": 11.5,
                    "cuff": 10.25
                },
                "20": {
                    "yoke": 21.25,
                    "chest": 31.5,
                    "midsection": 29,
                    "sleeve_width": 11.5,
                    "cuff": 10.25
                },
                "20.25": {
                    "yoke": 21.5,
                    "chest": 32,
                    "midsection": 29.5,
                    "sleeve_width": 11.75,
                    "cuff": 10.5
                },
                "20.5": {
                    "yoke": 21.75,
                    "chest": 32.5,
                    "midsection": 30,
                    "sleeve_width": 11.75,
                    "cuff": 10.5
                },
                "20.75": {
                    "yoke": 22,
                    "chest": 33,
                    "midsection": 30.5,
                    "sleeve_width": 12,
                    "cuff": 10.5
                },
                "21": {
                    "yoke": 22.25,
                    "chest": 33.5,
                    "midsection": 31,
                    "sleeve_width": 12,
                    "cuff": 10.5
                },
                "21.25": {
                    "yoke": 22.5,
                    "chest": 34,
                    "midsection": 31.5,
                    "sleeve_width": 12.25,
                    "cuff": 10.5
                },
                "21.5": {
                    "yoke": 22.75,
                    "chest": 34.5,
                    "midsection": 32,
                    "sleeve_width": 12.25,
                    "cuff": 10.5
                },
                "21.75": {
                    "yoke": 23,
                    "chest": 35,
                    "midsection": 32.5,
                    "sleeve_width": 12.5,
                    "cuff": 10.5
                },
                "22": {
                    "yoke": 23.25,
                    "chest": 35.5,
                    "midsection": 33,
                    "sleeve_width": 12.5,
                    "cuff": 10.5
                },
                "22.25": {
                    "yoke": 23.5,
                    "chest": 35.75,
                    "midsection": 33.25,
                    "sleeve_width": 12.75,
                    "cuff": 10.5
                },
                "22.5": {
                    "yoke": 23.75,
                    "chest": 36,
                    "midsection": 33.5,
                    "sleeve_width": 13,
                    "cuff": 10.5
                },
                "22.75": {
                    "yoke": 24,
                    "chest": 36.25,
                    "midsection": 33.75,
                    "sleeve_width": 13,
                    "cuff": 10.5
                },
                "23": {
                    "yoke": 24.25,
                    "chest": 36.5,
                    "midsection": 34,
                    "sleeve_width": 13.25,
                    "cuff": 10.5
                },
                "23.25": {
                    "yoke": 24.5,
                    "chest": 36.75,
                    "midsection": 34.25,
                    "sleeve_width": 13.25,
                    "cuff": 10.5
                },
                "23.5": {
                    "yoke": 24.75,
                    "chest": 37,
                    "midsection": 34.5,
                    "sleeve_width": 13.25,
                    "cuff": 10.5
                },
                "23.75": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 34.75,
                    "sleeve_width": 13.5,
                    "cuff": 10.5
                },
                "24": {
                    "yoke": 25.25,
                    "chest": 37,
                    "midsection": 35,
                    "sleeve_width": 13.5,
                    "cuff": 10.5
                }
            },
            ssf: {
                "14": {
                    "yoke": 16,
                    "chest": 19,
                    "midsection": 15.75,
                    "sleeve_width": 7,
                    "cuff": 8
                },
                "14.25": {
                    "yoke": 16.25,
                    "chest": 19.5,
                    "midsection": 16,
                    "sleeve_width": 7.25,
                    "cuff": 8.25
                },
                "14.5": {
                    "yoke": 16.5,
                    "chest": 20,
                    "midsection": 16.5,
                    "sleeve_width": 7.25,
                    "cuff": 8.25
                },
                "14.75": {
                    "yoke": 16.75,
                    "chest": 20.5,
                    "midsection": 17,
                    "sleeve_width": 7.25,
                    "cuff": 8.5
                },
                "15": {
                    "yoke": 17,
                    "chest": 21,
                    "midsection": 17.5,
                    "sleeve_width": 7.5,
                    "cuff": 8.5
                },
                "15.25": {
                    "yoke": 17.25,
                    "chest": 21.5,
                    "midsection": 18,
                    "sleeve_width": 7.5,
                    "cuff": 8.75
                },
                "15.5": {
                    "yoke": 17.25,
                    "chest": 22,
                    "midsection": 18.5,
                    "sleeve_width": 7.75,
                    "cuff": 8.75
                },
                "15.75": {
                    "yoke": 17.5,
                    "chest": 22.5,
                    "midsection": 19,
                    "sleeve_width": 8.25,
                    "cuff": 8.75
                },
                "16": {
                    "yoke": 17.75,
                    "chest": 23,
                    "midsection": 19.5,
                    "sleeve_width": 8.5,
                    "cuff": 9
                },
                "16.25": {
                    "yoke": 18,
                    "chest": 23.5,
                    "midsection": 20,
                    "sleeve_width": 8.5,
                    "cuff": 9
                },
                "16.5": {
                    "yoke": 18,
                    "chest": 24,
                    "midsection": 20.5,
                    "sleeve_width": 8.75,
                    "cuff": 9
                },
                "16.75": {
                    "yoke": 18.25,
                    "chest": 24.5,
                    "midsection": 21,
                    "sleeve_width": 8.75,
                    "cuff": 9.25
                },
                "17": {
                    "yoke": 18.25,
                    "chest": 25,
                    "midsection": 21.5,
                    "sleeve_width": 9,
                    "cuff": 9.25
                },
                "17.25": {
                    "yoke": 18.5,
                    "chest": 25.5,
                    "midsection": 22,
                    "sleeve_width": 9.25,
                    "cuff": 9.5
                },
                "17.5": {
                    "yoke": 18.75,
                    "chest": 26,
                    "midsection": 22.5,
                    "sleeve_width": 9.25,
                    "cuff": 9.5
                },
                "17.75": {
                    "yoke": 19,
                    "chest": 26.5,
                    "midsection": 23,
                    "sleeve_width": 9.5,
                    "cuff": 9.75
                },
                "18": {
                    "yoke": 19.25,
                    "chest": 27,
                    "midsection": 23.5,
                    "sleeve_width": 9.5,
                    "cuff": 9.75
                },
                "18.25": {
                    "yoke": 19.5,
                    "chest": 27.5,
                    "midsection": 24,
                    "sleeve_width": 10,
                    "cuff": 10
                },
                "18.5": {
                    "yoke": 19.75,
                    "chest": 28,
                    "midsection": 24.5,
                    "sleeve_width": 10,
                    "cuff": 10
                },
                "18.75": {
                    "yoke": 20,
                    "chest": 28.5,
                    "midsection": 25,
                    "sleeve_width": 10.25,
                    "cuff": 10.25
                },
                "19": {
                    "yoke": 20.25,
                    "chest": 29,
                    "midsection": 25.5,
                    "sleeve_width": 10.25,
                    "cuff": 10.25
                },
                "19.25": {
                    "yoke": 20.5,
                    "chest": 29.5,
                    "midsection": 26,
                    "sleeve_width": 10.5,
                    "cuff": 10.25
                },
                "19.5": {
                    "yoke": 20.75,
                    "chest": 30,
                    "midsection": 26.5,
                    "sleeve_width": 10.75,
                    "cuff": 10.25
                },
                "19.75": {
                    "yoke": 21,
                    "chest": 30.5,
                    "midsection": 27,
                    "sleeve_width": 11,
                    "cuff": 10.25
                },
                "20": {
                    "yoke": 21.25,
                    "chest": 31,
                    "midsection": 27.5,
                    "sleeve_width": 11,
                    "cuff": 10.25
                },
                "20.25": {
                    "yoke": 21.5,
                    "chest": 31.5,
                    "midsection": 28,
                    "sleeve_width": 11.25,
                    "cuff": 10.5
                },
                "20.5": {
                    "yoke": 21.75,
                    "chest": 32,
                    "midsection": 28.5,
                    "sleeve_width": 11.25,
                    "cuff": 10.5
                },
                "20.75": {
                    "yoke": 22,
                    "chest": 32.5,
                    "midsection": 29,
                    "sleeve_width": 11.5,
                    "cuff": 10.5
                },
                "21": {
                    "yoke": 22.25,
                    "chest": 33,
                    "midsection": 29.5,
                    "sleeve_width": 11.5,
                    "cuff": 10.5
                },
                "21.25": {
                    "yoke": 22.5,
                    "chest": 33.5,
                    "midsection": 30,
                    "sleeve_width": 11.75,
                    "cuff": 10.5
                },
                "21.5": {
                    "yoke": 22.75,
                    "chest": 34,
                    "midsection": 30.5,
                    "sleeve_width": 11.75,
                    "cuff": 10.5
                },
                "21.75": {
                    "yoke": 23,
                    "chest": 34.5,
                    "midsection": 31,
                    "sleeve_width": 12,
                    "cuff": 10.5
                },
                "22": {
                    "yoke": 23.25,
                    "chest": 35,
                    "midsection": 31.5,
                    "sleeve_width": 12,
                    "cuff": 10.5
                },
                "22.25": {
                    "yoke": 23.25,
                    "chest": 35.25,
                    "midsection": 31.75,
                    "sleeve_width": 12.25,
                    "cuff": 10.5
                },
                "22.5": {
                    "yoke": 23.25,
                    "chest": 35.5,
                    "midsection": 32,
                    "sleeve_width": 12.5,
                    "cuff": 10.5
                },
                "22.75": {
                    "yoke": 23.25,
                    "chest": 35.75,
                    "midsection": 32.25,
                    "sleeve_width": 12.75,
                    "cuff": 10.5
                },
                "23": {
                    "yoke": 23.25,
                    "chest": 36,
                    "midsection": 32.5,
                    "sleeve_width": 13,
                    "cuff": 10.5
                },
                "23.25": {
                    "yoke": 23.25,
                    "chest": 36.25,
                    "midsection": 32.75,
                    "sleeve_width": 13.25,
                    "cuff": 10.5
                },
                "23.5": {
                    "yoke": 23.25,
                    "chest": 36.5,
                    "midsection": 33,
                    "sleeve_width": 13.25,
                    "cuff": 10.5
                },
                "23.75": {
                    "yoke": 23.25,
                    "chest": 36.75,
                    "midsection": 33.25,
                    "sleeve_width": 13.25,
                    "cuff": 10.5
                },
                "24": {
                    "yoke": 23.25,
                    "chest": 37,
                    "midsection": 33.5,
                    "sleeve_width": 13.25,
                    "cuff": 10.5
                }
            },
            cf: {
                "14": {
                    "yoke": 17,
                    "chest": 20.5,
                    "midsection": 18.5,
                    "sleeve_width": 8.75,
                    "cuff": 8
                },
                "14.25": {
                    "yoke": 17.25,
                    "chest": 21,
                    "midsection": 19,
                    "sleeve_width": 9,
                    "cuff": 8.25
                },
                "14.5": {
                    "yoke": 17.5,
                    "chest": 21.5,
                    "midsection": 19.5,
                    "sleeve_width": 9.25,
                    "cuff": 8.25
                },
                "14.75": {
                    "yoke": 17.75,
                    "chest": 22,
                    "midsection": 20,
                    "sleeve_width": 9.25,
                    "cuff": 8.5
                },
                "15": {
                    "yoke": 18,
                    "chest": 22.5,
                    "midsection": 20.5,
                    "sleeve_width": 9.5,
                    "cuff": 8.5
                },
                "15.25": {
                    "yoke": 18.25,
                    "chest": 23,
                    "midsection": 21,
                    "sleeve_width": 9.75,
                    "cuff": 8.75
                },
                "15.5": {
                    "yoke": 18.5,
                    "chest": 23.5,
                    "midsection": 21.5,
                    "sleeve_width": 9.75,
                    "cuff": 8.75
                },
                "15.75": {
                    "yoke": 18.75,
                    "chest": 24,
                    "midsection": 22,
                    "sleeve_width": 10,
                    "cuff": 8.75
                },
                "16": {
                    "yoke": 19,
                    "chest": 24.5,
                    "midsection": 22.5,
                    "sleeve_width": 10,
                    "cuff": 9
                },
                "16.25": {
                    "yoke": 19.25,
                    "chest": 25,
                    "midsection": 23,
                    "sleeve_width": 10.25,
                    "cuff": 9.25
                },
                "16.5": {
                    "yoke": 19.5,
                    "chest": 25.5,
                    "midsection": 23.5,
                    "sleeve_width": 10.5,
                    "cuff": 9.5
                },
                "16.75": {
                    "yoke": 19.75,
                    "chest": 26,
                    "midsection": 24,
                    "sleeve_width": 10.5,
                    "cuff": 9.5
                },
                "17": {
                    "yoke": 20,
                    "chest": 26.5,
                    "midsection": 24.5,
                    "sleeve_width": 10.75,
                    "cuff": 9.5
                },
                "17.25": {
                    "yoke": 20.25,
                    "chest": 27,
                    "midsection": 25,
                    "sleeve_width": 11,
                    "cuff": 9.75
                },
                "17.5": {
                    "yoke": 20.5,
                    "chest": 27.5,
                    "midsection": 25.5,
                    "sleeve_width": 11,
                    "cuff": 9.75
                },
                "17.75": {
                    "yoke": 20.75,
                    "chest": 28,
                    "midsection": 26,
                    "sleeve_width": 11.25,
                    "cuff": 10
                },
                "18": {
                    "yoke": 21,
                    "chest": 28.5,
                    "midsection": 26.5,
                    "sleeve_width": 11.25,
                    "cuff": 10
                },
                "18.25": {
                    "yoke": 21.25,
                    "chest": 29,
                    "midsection": 27,
                    "sleeve_width": 11.5,
                    "cuff": 10.25
                },
                "18.5": {
                    "yoke": 21.5,
                    "chest": 29.5,
                    "midsection": 27.5,
                    "sleeve_width": 11.75,
                    "cuff": 10.25
                },
                "18.75": {
                    "yoke": 21.75,
                    "chest": 30,
                    "midsection": 28,
                    "sleeve_width": 11.75,
                    "cuff": 10.25
                },
                "19": {
                    "yoke": 22,
                    "chest": 30.5,
                    "midsection": 28.5,
                    "sleeve_width": 12,
                    "cuff": 10.25
                },
                "19.25": {
                    "yoke": 22.25,
                    "chest": 31,
                    "midsection": 29,
                    "sleeve_width": 12.25,
                    "cuff": 10.25
                },
                "19.5": {
                    "yoke": 22.5,
                    "chest": 31.5,
                    "midsection": 29.5,
                    "sleeve_width": 12.25,
                    "cuff": 10.25
                },
                "19.75": {
                    "yoke": 22.75,
                    "chest": 32,
                    "midsection": 30,
                    "sleeve_width": 12.5,
                    "cuff": 10.5
                },
                "20": {
                    "yoke": 23,
                    "chest": 32.5,
                    "midsection": 30.5,
                    "sleeve_width": 12.5,
                    "cuff": 10.5
                },
                "20.25": {
                    "yoke": 23.25,
                    "chest": 33,
                    "midsection": 31,
                    "sleeve_width": 12.75,
                    "cuff": 10.5
                },
                "20.5": {
                    "yoke": 23.5,
                    "chest": 33.5,
                    "midsection": 31.5,
                    "sleeve_width": 12.75,
                    "cuff": 10.5
                },
                "20.75": {
                    "yoke": 23.75,
                    "chest": 34,
                    "midsection": 32,
                    "sleeve_width": 13,
                    "cuff": 10.5
                },
                "21": {
                    "yoke": 24,
                    "chest": 34.5,
                    "midsection": 32.5,
                    "sleeve_width": 13,
                    "cuff": 10.75
                },
                "21.25": {
                    "yoke": 24.25,
                    "chest": 35,
                    "midsection": 33,
                    "sleeve_width": 13.12,
                    "cuff": 10.75
                },
                "21.5": {
                    "yoke": 24.5,
                    "chest": 35.5,
                    "midsection": 33.5,
                    "sleeve_width": 13.22,
                    "cuff": 10.75
                },
                "21.75": {
                    "yoke": 24.75,
                    "chest": 36,
                    "midsection": 34,
                    "sleeve_width": 13.32,
                    "cuff": 10.75
                },
                "22": {
                    "yoke": 25,
                    "chest": 36.5,
                    "midsection": 34.5,
                    "sleeve_width": 13.42,
                    "cuff": 10.75
                },
                "22.25": {
                    "yoke": 25,
                    "chest": 36.75,
                    "midsection": 34.75,
                    "sleeve_width": 13.5,
                    "cuff": 10.75
                },
                "22.5": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 35,
                    "sleeve_width": 13.5,
                    "cuff": 10.75
                },
                "22.75": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 35.25,
                    "sleeve_width": 13.5,
                    "cuff": 10.75
                },
                "23": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 35.5,
                    "sleeve_width": 13.75,
                    "cuff": 10.75
                },
                "23.25": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 35.75,
                    "sleeve_width": 13.75,
                    "cuff": 10.75
                },
                "23.5": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 36,
                    "sleeve_width": 13.75,
                    "cuff": 10.75
                },
                "23.75": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 36.25,
                    "sleeve_width": 14,
                    "cuff": 10.75
                },
                "24": {
                    "yoke": 25,
                    "chest": 37,
                    "midsection": 36.5,
                    "sleeve_width": 14,
                    "cuff": 10.75
                }
            }
        }
        var shirt_length_table = {
            "30": 28,
            "30.25": 28,
            "30.5": 28.5,
            "30.75": 28.5,
            "31": 29,
            "31.25": 29,
            "31.5": 29.5,
            "31.75": 29.5,
            "32": 30,
            "32.25": 30,
            "32.5": 30,
            "32.75": 30.5,
            "33": 30.5,
            "33.25": 30.5,
            "33.5": 31,
            "33.75": 31,
            "34": 31,
            "34.25": 31.5,
            "34.5": 31.5,
            "34.75": 31.5,
            "35": 31.5,
            "35.25": 32,
            "35.5": 32,
            "35.75": 32,
            "36": 32.5,
            "36.25": 32.5,
            "36.5": 32.5,
            "36.75": 33,
            "37": 33,
            "37.25": 33,
            "37.5": 33,
            "37.75": 33.5,
            "38": 33.5,
            "38.25": 33.5,
            "38.5": 34,
            "38.75": 34,
            "39": 34,
            "39.25": 34.5,
            "39.5": 34.5,
            "39.75": 34.5,
            "40": 34.5,
            "40.25": 35,
            "40.5": 35,
            "40.75": 35,
            "41": 35.5,
            "41.25": 35.5,
            "41.5": 35.5,
            "41.75": 36,
            "42": 36
        }
        return {
            'collar_field': collar,
            'chest_field': standard_sizes_table[type_of_fit][collar.toString()]['chest'],
            'yoke_field': standard_sizes_table[type_of_fit][collar.toString()]['yoke'],
            'midsection_field': standard_sizes_table[type_of_fit][collar.toString()]['midsection'],
            'length_field': shirt_length_table[sleeve_length.toString()],
            'sleeve_w_field': standard_sizes_table[type_of_fit][collar.toString()]['sleeve_width'],
            'sleeve_field': sleeve_length,
            'cuff_field': standard_sizes_table[type_of_fit][collar.toString()]['cuff']
        }
    }
    this.correctByLimits = function () {
        if (this.adjCollar > this.max_collar) this.adjCollar = this.max_collar;
        if (this.adjCollar < this.min_collar) this.adjCollar = this.min_collar;
        if (this.adjMiddle > this.max_mid) this.adjMiddle = this.max_mid;
        if (this.adjMiddle < this.min_mid) this.adjMiddle = this.min_mid;
        if (this.adjShoulder > this.max_shoulder) this.adjShoulder = this.max_shoulder;
        if (this.adjShoulder < this.min_shoulder) this.adjShoulder = this.min_shoulder;
        if (this.adjBackLen > this.max_length) this.adjBackLen = this.max_length;
        if (this.adjBackLen < this.min_length) this.adjBackLen = this.min_length;
        if (this.adjSleeveLen > this.max_sleeve) this.adjSleeveLen = this.max_sleeve;
        if (this.adjSleeveLen < this.min_sleeve) this.adjSleeveLen = this.min_sleeve;
        if (this.adjCuff > this.max_cuff) this.adjCuff = this.max_cuff;
        if (this.adjCuff < this.min_cuff) this.adjCuff = this.min_cuff;
    }
    this.calculateLimits = function () {
        var chestLimitsTable = new ChestLimitsTable();
        var sleeveWidthLimitsTable = new SleeveWidthLimitsTable();
        this.min_collar = 12;
        this.min_chest = 15;
        this.min_mid = 15;
        this.min_shoulder = 14;
        this.min_length = 25;
        this.min_sleeveW = 5;
        this.min_sleeve = 22;
        this.min_cuff = 7;
        this.min_bottom_width = this.adjMiddle;
        this.max_collar = 26;
        this.max_chest = 34;
        this.max_mid = 34;
        this.max_shoulder = 28;
        this.max_length = 45;
        this.max_sleeveW = 15;
        this.max_sleeve = 42;
        this.max_cuff = 13;
        this.max_bottom_width = this.adjChest;
    }
    this.calculate = function (calculateAdjValues) {
        if (calculateAdjValues == undefined) calculateAdjValues = true;
        if (calculateAdjValues && isShortSleeve()) {
            this.adjCollar = excelCeil(4 * this.adjCollar) / 4;
            this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
            this.adjSleeveWidth = excelCeil(this.sleeveW_Shirt * 4) / 4;
            this.calculateLimits();
            this.correctByLimits();
            if (this.adjSleeveWidth > this.max_sleeveW) this.adjSleeveWidth = this.max_sleeveW;
            if (this.adjSleeveWidth < this.min_sleeveW) this.adjSleeveWidth = this.min_sleeveW;
            this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
            this.calculateLimits();
            if (this.adjChest > this.max_chest) this.adjChest = this.max_chest;
            if (this.adjChest < this.min_chest) this.adjChest = this.min_chest;
            this.adjMiddle = roundToBase(2 * this.mid_Shirt, 0.25) / 2;
            this.adjShoulder = excelCeil(4 * this.shoulder_Shirt) / 4;
            this.adjBackLen = excelCeil(2 * this.length_Shirt) / 2;
            this.adjSleeveLen = excelRound(4 * (this.sleeve_Shirt)) / 4;
            this.adjCuff = excelCeil(4 * this.cuff_Shirt) / 4;
            this.adjShortSleeveLength = excelCeil(4 * this.adjShortSleeveLength) / 4;
            this.adjShortSleeveWidth = excelCeil(4 * this.adjShortSleeveWidth) / 4;
            this.adjShortSleeveOpeningWidth = excelCeil(4 * this.adjShortSleeveOpeningWidth) / 4;
            this.calculateLimits();
            this.correctByLimits();
            return;
        }
        if (calculateAdjValues) {
            this.adjCollar = excelCeil(4 * this.collar_Shirt) / 4;
            this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
            this.adjSleeveWidth = excelCeil(this.sleeveW_Shirt * 4) / 4;
            this.calculateLimits();
            this.correctByLimits();
            if (this.adjSleeveWidth > this.max_sleeveW) this.adjSleeveWidth = this.max_sleeveW;
            if (this.adjSleeveWidth < this.min_sleeveW) this.adjSleeveWidth = this.min_sleeveW;
            this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
            this.calculateLimits();
            if (this.adjChest > this.max_chest) this.adjChest = this.max_chest;
            if (this.adjChest < this.min_chest) this.adjChest = this.min_chest;
            this.adjMiddle = roundToBase(2 * this.mid_Shirt, 0.25) / 2;
            this.adjShoulder = excelCeil(4 * this.shoulder_Shirt) / 4;
            this.adjBackLen = excelCeil(2 * this.length_Shirt) / 2;
            this.adjSleeveLen = excelRound(4 * (this.sleeve_Shirt)) / 4;
            this.adjCuff = excelCeil(4 * this.cuff_Shirt) / 4;
            this.adjShortSleeveLength = excelCeil(4 * this.adjShortSleeveLength) / 4;
            this.adjShortSleeveWidth = excelCeil(4 * this.adjShortSleeveWidth) / 4;
            this.adjShortSleeveOpeningWidth = excelCeil(4 * this.adjShortSleeveOpeningWidth) / 4;
            this.calculateLimits();
            this.correctByLimits();
        }
        return;
        if (calculateAdjValues) {
            if (this.chest_Shirt > 16.5)
                this.adjChest = roundToBase(2 * this.chest_Shirt, 0.25) / 2;
            else
                this.adjChest = 16.5;
            if (this.adjChest > this.min_chest) this.adjChest = this.min_chest;
            if (this.adjChest < this.max_chest) this.adjChest = this.max_chest;
        }
        switch (this.adjChest) {
            case 20.75:
            case 21.75:
            case 22.75:
            case 23.75:
            case 24.75:
            case 25.75:
            case 26.75:
            case 27.75:
            case 28.75:
            case 29.75:
            case 30.75:
            case 31.75:
            case 32.75:
            case 33.75:
            case 34.75:
            case 35.75:
            case 37.25:
                this.fit = 1;
                break;
            default:
                this.fit = 0;
        }
        this.model_Ord = this.fit;
        if (this.adjChest > 19.5)
            this.size_Ord = this.table.getElementById(this.table.findNearIdByValue(6, 4 * this.adjChest))[7];
        else
            this.size_Ord = 14
        this.bicepStdDum = ((this.size_Ord - 14) * 1.5 + 17) / 2;
        this.yokeStandard = this.size_Ord + (this.fit == 0 ? 3 : 3.5);
        this.waistStdDum = (this.fit == 0 ? 37 + 4 * (this.size_Ord - 14) : 40 + 4 * (this.size_Ord - 14));
        if (this.model_Ord == 0 && this.rear_side_pleats == 1)
            this.waistStdDum = 37 + 4 * (this.size_Ord - 14);
        else if (this.model_Ord == 1 && this.rear_side_pleats == 1)
            this.waistStdDum = 40 + 4 * (this.size_Ord - 14);
        else if (this.model_Ord == 0 && this.rear_side_pleats == 0)
            this.waistStdDum = 36 + 4 * (this.size_Ord - 14);
        else
            this.waistStdDum = 39 + 4 * (this.size_Ord - 14);
        var tmp2;
        var tmp1;
        if (calculateAdjValues)
            this.sleeveWDesDum = this.sleeveW_Shirt;
        else
            this.sleeveWDesDum = this.adjSleeveWidth;
        if (calculateAdjValues) {
            this.adjSleeveWidth = excelCeil(this.sleeveW_Shirt * 4) / 4;
            if (this.adjSleeveWidth > this.bicepStdDum + 1) this.adjSleeveWidth = this.bicepStdDum + 1;
            if (this.adjSleeveWidth < this.bicepStdDum - 1) this.adjSleeveWidth = this.bicepStdDum - 1;
            this.adjCollar = excelCeil(4 * this.collar_Shirt) / 4;
            this.adjMiddle = roundToBase(2 * this.mid_Shirt, 0.25) / 2;
            this.adjShoulder = excelCeil(4 * this.shoulder_Shirt) / 4;
            this.adjBackLen = excelCeil(2 * this.length_Shirt) / 2; {
                this.calculateLimits();
                this.correctByLimits();
            }
            this.adjSleeveLen = excelRound(4 * (this.sleeve_Shirt + this.shoulder_Shirt / 2)) / 4;
            this.adjCuff = excelCeil(4 * this.cuff_Shirt) / 4;
        }
        if (calculateAdjValues) {
            this.calculateLimits();
            this.correctByLimits();
        }
        this.neck_Ord = this.length_Ord = this.rSleeve_Ord = this.lSleeve_Ord = this.bicepStdDum = this.yokeStandard = this.waist_Ord = this.rCuff_Ord = this.lCuff_Ord = this.bicep_adj_Ord = this.yokeadj_Ord = this.backDetail_Ord = 0;
    };
    this.debug_limits = function () {
        var str = '';
        str += 'collar: ' + this.min_collar + ' | ' + this.max_collar + '\n';
        str += 'sleeve: ' + this.min_sleeve + ' | ' + this.max_sleeve + '\n';
        str += 'shoulder: ' + this.min_shoulder + ' | ' + this.max_shoulder + '\n';
        str += 'chest: ' + this.min_chest + ' | ' + this.max_chest + '\n';
        str += 'midle: ' + this.min_mid + ' | ' + this.max_mid + '\n';
        str += 'sleeve_width: ' + this.min_sleeveW + ' | ' + this.max_sleeveW + '\n';
        str += 'shirt len: ' + this.min_length + ' | ' + this.max_length + '\n';
        str += 'cuff: ' + this.min_cuff + ' | ' + this.max_cuff + '\n';
        alert(str);
    }
    this.debug_adj = function () {
        var str = 'Collar: ' + this.adjCollar + '\n';
        str += 'Chest: ' + this.adjChest + '\n';
        str += 'Shoulder: ' + this.adjShoulder + '\n';
        str += 'Middle: ' + this.adjMiddle + '\n';
        str += 'Length: ' + this.adjBackLen + '\n';
        str += 'Sleeve width: ' + this.adjSleeveWidth + '\n';
        str += 'Sleeve Len: ' + this.adjSleeveLen + '\n';
        str += 'Cuff: ' + this.adjCuff + '\n';
        alert(str);
    }
    this.debug_tmp = function () {
        var str = 'bicep_std_dum: ' + this.bicepStdDum + '\n';
        str += 'yoke_standart: ' + this.yokeStandard + '\n';
        str += 'waist_std_dum: ' + this.waistStdDum + '\n';
        str += 'waist_des_bum: ' + this.waistDesDum + '\n';
        str += 'sleeve_w_des_dum: ' + this.sleeveWDesDum + '\n';
        str += 'chest_des_dum: ' + this.chestDesDum + '\n';
        str += 'collar_des_dum: ' + this.collarDesDum + '\n';
        str += 'length_std: ' + this.lengthStd + '\n';
        str += 'length_des_dum: ' + this.lengthDesDum + '\n';
        alert(str);
    }
    this.debug_ord = function () {
        var str = '';
        str += 'getFitOrd: ' + this.getFitOrd() + '\n';
        str += 'getModelOrd: ' + this.getModelOrd() + '\n';
        str += 'getSizeOrd: ' + this.getSizeOrd() + '\n';
        str += 'getNeckOrd: ' + this.getNeckOrd() + '\n';
        str += 'getLengthOrd: ' + this.getLengthOrd() + '\n';
        str += 'getRSleeveOrd: ' + this.getRSleeveOrd() + '\n';
        str += 'getLSleeveOrd: ' + this.getLSleeveOrd() + '\n';
        str += 'getWaistOrd: ' + this.getWaistOrd() + '\n';
        str += 'getRCuffOrd: ' + this.getRCuffOrd() + '\n';
        str += 'getLCuffOrd: ' + this.getLCuffOrd() + '\n';
        str += 'getBicepAdjOrd: ' + this.getBicepAdjOrd() + '\n';
        str += 'getYokeAdjOrd: ' + this.getYokeAdjOrd() + '\n';
        str += 'getBackDetailOrd: ' + this.getBackDetailOrd() + '\n';
        str += '\n';
        str += 'explanations: \n';
        str += 'getBackDetailOrd: 1 or true = pleats ; 0 or false - no pleats\n';
        str += 'getFitOrd: 1 or true - regular ; 0 or false - slim\n';
        alert(str);
    }
}

function BodyMeasurement() {
    this.neck = 0;
    this.arm_len = 0;
    this.shoulder_W = 0;
    this.chest = 0;
    this.waist_around = 0;
    this.length = 0;
    this.wrist_around = 0;
    this.bicep_around = 0;
    this.style_body = 0;
    this.rear_side_pleats = true;
    this.fit = 0;
    this.model_Ord = 0;
    this.size_Ord = 0;
    this.neck_Ord = 0;
    this.length_Ord = 0;
    this.rSleeve_Ord = 0;
    this.lSleeve_Ord = 0;
    this.waist_Ord = 0;
    this.rCuff_Ord = 0;
    this.lCuff_Ord = 0;
    this.bicep_adj_Ord = 0;
    this.yokeadj_Ord = 0;
    this.backDetail_Ord = false;
    this.adjCollar;
    this.adjChest;
    this.adjShoulder;
    this.adjMiddle;
    this.adjBackLen;
    this.adjSleeveWidth;
    this.adjSleeveLen;
    this.adjCuff;
    this.bicepStdDum;
    this.yokeStandard;
    this.waistStdDum;
    this.waistDesDum;
    this.bicepDesDum;
    this.chestDesDum;
    this.chest_tmp;
    this.min_collar = 0;
    this.min_sleeve = 0;
    this.min_shoulder = 0;
    this.min_chest = 0;
    this.min_mid = 0;
    this.min_sleeveW = 0;
    this.min_length = 0;
    this.min_cuff = 0;
    this.max_collar = 0;
    this.max_sleeve = 0;
    this.max_shoulder = 0;
    this.max_chest = 0;
    this.max_mid = 0;
    this.max_sleeveW = 0;
    this.max_length = 0;
    this.max_cuff = 0;
    this.setNeck = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.neck = parseFloat(value);
    };
    this.setArmLen = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.arm_len = parseFloat(value);
    };
    this.setShoulderW = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.shoulder_W = parseFloat(value);
    };
    this.setChest = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.chest = parseFloat(value);
    };
    this.setWaist = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.waist_around = parseFloat(value);
    };
    this.setLength = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.length = parseFloat(value);
    };
    this.setWrist = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.wrist_around = parseFloat(value);
    };
    this.setBicep = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.bicep_around = parseFloat(value);
    };
    this.setStyleBody = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.style_body = parseFloat(value);
    };
    this.setAdjCollar = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjCollar = parseFloat(value);
    };
    this.setAdjChest = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjChest = parseFloat(value);
    };
    this.setAdjShoulder = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjShoulder = parseFloat(value);
    };
    this.setAdjMiddle = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjMiddle = parseFloat(value);
    };
    this.setAdjBackLen = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjBackLen = parseFloat(value);
    };
    this.setAdjSleeveW = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjSleeveWidth = parseFloat(value);
    };
    this.setAdjSleeveL = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjSleeveLen = parseFloat(value);
    };
    this.setAdjCuff = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjCuff = parseFloat(value);
    };
    this.setRearSidePleats = function (value) {
        this.rear_side_pleats = value == true;
    };
    this.setAdjShortSleeveLength = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjCuff = parseFloat(value);
    };
    this.setAdjShortSleeveWidth = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjCuff = parseFloat(value);
    };
    this.setAdjShortSleeveOpening = function (value) {
        value = value.toString();
        value = value.replace(',', '.');
        this.adjCuff = parseFloat(value);
    };
    this.getFitOrd = function () {
        return this.fit
    };
    this.getModelOrd = function () {
        return this.model_Ord
    };
    this.getSizeOrd = function () {
        return this.size_Ord
    };
    this.getNeckOrd = function () {
        return this.neck_Ord
    };
    this.getLengthOrd = function () {
        return this.length_Ord
    };
    this.getRSleeveOrd = function () {
        return this.rSleeve_Ord
    };
    this.getLSleeveOrd = function () {
        return this.lSleeve_Ord
    };
    this.getWaistOrd = function () {
        return this.waist_Ord
    };
    this.getRCuffOrd = function () {
        return this.rCuff_Ord
    };
    this.getLCuffOrd = function () {
        return this.lCuff_Ord
    };
    this.getBicepAdjOrd = function () {
        return this.bicep_adj_Ord
    };
    this.getYokeAdjOrd = function () {
        return this.yokeadj_Ord
    };
    this.getBackDetailOrd = function () {
        return this.backDetail_Ord
    };
    this.getAdjCollar = function () {
        return Math.abs(this.adjCollar)
    };
    this.getAdjChest = function () {
        return Math.abs(this.adjChest)
    };
    this.getAdjShoulder = function () {
        return Math.abs(this.adjShoulder)
    };
    this.getAdjMiddle = function () {
        return Math.abs(this.adjMiddle)
    };
    this.getAdjBackLen = function () {
        return Math.abs(this.adjBackLen)
    };
    this.getAdjSleeveW = function () {
        return Math.abs(this.adjSleeveWidth)
    };
    this.getAdjSleeveL = function () {
        return Math.abs(this.adjSleeveLen)
    };
    this.getAdjCuff = function () {
        return Math.abs(this.adjCuff)
    };
    this.table = new ChestWidthTable();
    this.correctByLimits = function () {
        if (this.adjCollar > this.max_collar) this.adjCollar = this.max_collar;
        if (this.adjCollar < this.min_collar) this.adjCollar = this.min_collar;
        if (this.adjMiddle > this.max_mid) this.adjMiddle = this.max_mid;
        if (this.adjMiddle < this.min_mid) this.adjMiddle = this.min_mid;
        if (this.adjShoulder > this.max_shoulder) this.adjShoulder = this.max_shoulder;
        if (this.adjShoulder < this.min_shoulder) this.adjShoulder = this.min_shoulder;
        if (this.adjBackLen > this.max_length) this.adjBackLen = this.max_length;
        if (this.adjBackLen < this.min_length) this.adjBackLen = this.min_length;
        if (this.adjSleeveLen > this.max_sleeve) this.sleeve_Shirt = this.max_sleeve;
        if (this.adjSleeveLen < this.min_sleeve) this.sleeve_Shirt = this.min_sleeve;
        if (this.adjCuff > this.max_cuff) this.adjCuff = this.max_cuff;
        if (this.adjCuff < this.min_cuff) this.adjCuff = this.min_cuff;
    }
    this.calculateLimits = function () {
        var chestLimitsTable = new ChestLimitsTable();
        var sleeveWidthLimitsTable = new SleeveWidthLimitsTable();
        this.min_collar = 12;
        this.min_chest = chestLimitsTable.getMinChestByNearestSleeveWidth(this.adjSleeveWidth);
        this.min_mid = 10;
        this.min_shoulder = 10;
        this.min_length = 25;
        this.min_sleeveW = sleeveWidthLimitsTable.getMinSleeveWidthByNearestChest(this.adjChest);
        this.min_sleeve = 28;
        this.min_cuff = 8;
        this.min_bottom_width = this.adjMiddle;
        this.max_collar = 26;
        this.max_chest = chestLimitsTable.getMaxChestByNearestSleeveWidth(this.adjSleeveWidth);
        this.max_mid = 80;
        this.max_shoulder = 30;
        this.max_length = 45;
        this.max_sleeveW = sleeveWidthLimitsTable.getMaxSleeveWidthByNearestChest(this.adjChest);
        this.max_sleeve = 40;
        this.max_cuff = 11;
        this.max_bottom_width = this.adjChest;
    }
    this.calculate = function (calculateAdjValues) {
        if (calculateAdjValues == undefined) calculateAdjValues = true;
        if (calculateAdjValues) {
            this.adjCollar = excelRound(this.neck * 4) / 4;
            this.adjChest = excelCeil(2 * (Math.max(this.chest, this.waist_around) * (BODY_STYLE_CLASSIC == this.style_body ? 1.136 : (BODY_STYLE_SLIM == this.style_body ? 1.11 : 1.085)))) / 4;
            this.adjSleeveWidth = excelCeil(2 * (this.bicep_around + (BODY_STYLE_CLASSIC == this.style_body ? 4.5 : (BODY_STYLE_SLIM == this.style_body ? 4 : 3.5)))) / 4;
            this.adjShoulder = excelRound(this.shoulder_W * 4) / 4;
            this.adjMiddle = excelCeil(2 * (BODY_STYLE_CLASSIC == this.style_body ? Math.max(0.136 * Math.max(this.chest, this.waist_around) + this.waist_around, this.chest * 1.136 - 3) : BODY_STYLE_SLIM == this.style_body ? Math.max(0.11 * Math.max(this.chest, this.waist_around) + this.waist_around, this.chest * 1.11 - 6) : Math.max(0.09 * Math.max(this.chest, this.waist_around) + this.waist_around, this.chest * 1.09 - 9))) / 4;
            this.adjBackLen = excelRound(this.length * 2) / 2;
            this.adjSleeveLen = excelCeil(4 * this.arm_len) / 4;
            this.adjCuff = excelCeil((this.wrist_around + 2 <= 7 ? 7 : (this.wrist_around + 2 > 11 ? 11 : this.wrist_around + 2)) * 4) / 4;
            this.adjShortSleeveLength = excelRound(this.neck * 4) / 4;
            this.adjShortSleeveWidth = excelRound(this.neck * 4) / 4;
            this.adjShortSleeveOpeningWidth = excelRound(this.neck * 4) / 4;
        }
        this.calculateLimits();
        this.correctByLimits();
        return;
        if (calculateAdjValues) {
            this.adjSleeveLen = excelCeil(4 * this.arm_len) / 4;
            this.adjCuff = (this.wrist_around + 1.5 <= 8 ? 8 : (this.wrist_around + 1.5 > 11 ? 11 : this.wrist_around + 1.5));
        }
        this.waistDesDum = this.waist_around + (this.style_body == 0 ? 5 : 7);
        this.bicepDesDum = (this.style_body == 0 ? this.bicep_around + 2.5 : this.bicep_around + 5) / 2;
        this.chestDesDum = (this.waist_around > this.chest + 5 ? (this.waist_around + (this.style_body == 0 ? 2 : 4)) / 2 : (this.chest + (this.style_body == 0 ? 6 : 8)) / 2);
        if (this.chestDesDum > 19.5)
            this.chest_tmp = (this.table.getElementById(this.table.findNearIdByValue(6, 4 * this.chestDesDum))[6]) / 4;
        else
            this.chest_tmp = 19.5;
        if (calculateAdjValues) {
            this.adjChest = this.chest_tmp;
        }
        switch (this.adjChest) {
            case 20.25:
            case 21.25:
            case 22.25:
            case 23.25:
            case 24.25:
            case 25.25:
            case 26.25:
            case 27.25:
            case 28.25:
            case 29.25:
            case 30.25:
            case 31.25:
            case 32.25:
            case 33.25:
            case 34.25:
            case 35.25:
            case 36.25:
                this.rear_side_pleats = 1;
                break;
            default:
                this.rear_side_pleats = 0;
        }
        switch (this.adjChest) {
            case 20.75:
            case 21.75:
            case 22.75:
            case 23.75:
            case 24.75:
            case 25.75:
            case 26.75:
            case 27.75:
            case 28.75:
            case 29.75:
            case 30.75:
            case 31.75:
            case 32.75:
            case 33.75:
            case 34.75:
            case 35.75:
            case 36.75:
                this.model_Ord = 1;
                break;
            default:
                this.model_Ord = 0;
        }
        if (this.adjChest > 19.5)
            this.size_Ord = this.table.getElementById(this.table.findNearIdByValue(6, 4 * this.adjChest))[7];
        else
            this.size_Ord = 14
        this.rSleeve_Ord = this.adjSleeveLen;
        this.lSleeve_Ord = this.adjSleeveLen;
        this.rCuff_Ord = this.adjCuff + 1;
        this.lCuff_Ord = this.adjCuff + 1;
        this.bicepStdDum = ((this.size_Ord - 14) * 1.5 + 17) / 2;
        this.yokeStandard = (this.model_Ord == 0 ? this.size_Ord + 3 : this.size_Ord + 3.5);
        if (this.model_Ord == 0 && this.rear_side_pleats == 1)
            this.waistStdDum = 37 + 4 * (this.size_Ord - 14);
        else if (this.model_Ord == 1 && this.rear_side_pleats == 1)
            this.waistStdDum = 40 + 4 * (this.size_Ord - 14);
        else if (this.model_Ord == 0 && this.rear_side_pleats == 0)
            this.waistStdDum = 36 + 4 * (this.size_Ord - 14);
        else
            this.waistStdDum = 39 + 4 * (this.size_Ord - 14);
        if (calculateAdjValues) {
            this.adjShoulder = excelCeil(this.yokeStandard * 2) / 2;
            this.adjMiddle = ((this.waistDesDum < this.waistStdDum - 4 ? this.waistStdDum - 4 : (this.waistDesDum > this.waistStdDum + 4 ? this.waistStdDum + 4 : this.waistDesDum))) / 2;
            this.adjSleeveWidth = this.bicepDesDum;
            if (this.adjSleeveWidth > this.bicepStdDum + 1) this.adjSleeveWidth = this.bicepStdDum + 1;
            if (this.adjSleeveWidth < this.bicepStdDum - 1) this.adjSleeveWidth = this.bicepStdDum - 1;
        }
        this.waist_Ord = this.adjMiddle * 2 - this.waistStdDum;
        this.bicep_adj_Ord = (this.adjSleeveWidth - this.bicepStdDum > 0 ? excelCeil((this.adjSleeveWidth - this.bicepStdDum) * 2) : excelFloor((this.adjSleeveWidth - this.bicepStdDum) * 2));
        this.yokeadj_Ord = this.adjShoulder - this.yokeStandard;
        if (calculateAdjValues) {
            this.adjCollar = (this.neck);
            this.adjBackLen = this.length;
        }
        this.min_collar = this.size_Ord - 2;
        this.max_collar = this.size_Ord + 2;
        this.min_length = 29;
        this.max_length = 44;
        if (this.adjCollar > this.max_collar) this.adjCollar = this.max_collar;
        if (this.adjCollar < this.min_collar) this.adjCollar = this.min_collar;
        if (this.adjBackLen > this.max_length) this.adjBackLen = this.max_length;
        if (this.adjBackLen < this.min_length) this.adjBackLen = this.min_length;
        this.neck_Ord = this.adjCollar;
        this.length_Ord = excelRound(this.adjBackLen - (31.625 + 0.75 * (this.size_Ord - 14)));
        this.calculateLimits();
        this.correctByLimits();
        return;
    };
    this.debug_limits = function () {
        var str = '';
        str += 'collar: ' + this.min_collar + ' | ' + this.max_collar + '\n';
        str += 'sleeve: ' + this.min_sleeve + ' | ' + this.max_sleeve + '\n';
        str += 'shoulder: ' + this.min_shoulder + ' | ' + this.max_shoulder + '\n';
        str += 'chest: ' + this.min_chest + ' | ' + this.max_chest + '\n';
        str += 'midle: ' + this.min_mid + ' | ' + this.max_mid + '\n';
        str += 'sleeve_width: ' + this.min_sleeveW + ' | ' + this.max_sleeveW + '\n';
        str += 'shirt len: ' + this.min_length + ' | ' + this.max_length + '\n';
        str += 'cuff: ' + this.min_cuff + ' | ' + this.max_cuff + '\n';
        alert(str);
    }
    this.debug_adj = function () {
        var str = 'Collar: ' + this.adjCollar + '\n';
        str += 'Chest: ' + this.adjChest + '\n';
        str += 'Shoulder: ' + this.adjShoulder + '\n';
        str += 'Middle: ' + this.adjMiddle + '\n';
        str += 'Length: ' + this.adjBackLen + '\n';
        str += 'Sleeve width: ' + this.adjSleeveWidth + '\n';
        str += 'Sleeve Len: ' + this.adjSleeveLen + '\n';
        str += 'Cuff: ' + this.adjCuff + '\n';
        alert(str);
    }
    this.debug_tmp = function () {
        var str = 'bicepStdDum: ' + this.bicepStdDum + '\n';
        str += 'yokeStandard: ' + this.yokeStandard + '\n';
        str += 'waistStdDum: ' + this.waistStdDum + '\n';
        str += 'waistDesDum: ' + this.waistDesDum + '\n';
        str += 'bicepDesDum: ' + this.bicepDesDum + '\n';
        str += 'chestDesDum: ' + this.chestDesDum + '\n';
        alert(str);
    }
    this.debug_ord = function () {
        var str = '';
        str += 'getFitOrd: ' + this.getFitOrd() + '\n';
        str += 'getModelOrd: ' + this.getModelOrd() + '\n';
        str += 'getSizeOrd: ' + this.getSizeOrd() + '\n';
        str += 'getNeckOrd: ' + this.getNeckOrd() + '\n';
        str += 'getLengthOrd: ' + this.getLengthOrd() + '\n';
        str += 'getRSleeveOrd: ' + this.getRSleeveOrd() + '\n';
        str += 'getLSleeveOrd: ' + this.getLSleeveOrd() + '\n';
        str += 'getWaistOrd: ' + this.getWaistOrd() + '\n';
        str += 'getRCuffOrd: ' + this.getRCuffOrd() + '\n';
        str += 'getLCuffOrd: ' + this.getLCuffOrd() + '\n';
        str += 'getBicepAdjOrd: ' + this.getBicepAdjOrd() + '\n';
        str += 'getYokeAdjOrd: ' + this.getYokeAdjOrd() + '\n';
        str += 'getBackDetailOrd: ' + this.getBackDetailOrd() + '\n';
        str += '\n';
        str += 'explanations: \n';
        str += 'getBackDetailOrd: 1 or true = pleats ; 0 or false - no pleats\n';
        str += 'getFitOrd: 1 or true - regular ; 0 or false - slim\n';
        alert(str);
    }
}

function AdjSizes(data) {
    this.data = data;
    this.adddim_top_button_placement = typeof data.adddim_top_button_placement === "undefined" ? 'standard' : data.adddim_top_button_placement;
    for (var i in data) {
        if (i != 'adddim_forearm') {
            if (isNaN(parseFloat(data[i])) && "adddim" != i.substr(0, 6)) {
                throw new Error("`" + i + "` param in AdjSizes is not a number");
            } else {
                this.data[i] = parseFloat(data[i]);
            }
        }
    }
    this.rdata = {};
    this.rdata.collar = Math.ceil(this.data.collar * 4) / 4;
    this.rdata.sleeve = Math.ceil(this.data.sleeve * 4) / 4;
    this.rdata.yoke = Math.ceil(this.data.yoke * 4) / 4;
    this.rdata.chest = Math.ceil(this.data.chest * 4) / 4;
    this.rdata.midsection = Math.ceil(this.data.midsection * 4) / 4;
    this.rdata.shirt_length = Math.ceil(this.data.shirt_length * 2) / 2;
    this.rdata.sleeve_w = Math.ceil(this.data.sleeve_w * 4) / 4;
    this.rdata.cuff = Math.ceil(this.data.cuff * 4) / 4;
    this.rdata.adddim_bottom_width = Math.ceil(this.data.adddim_bottom_width * 4) / 4;
    this.rdata.short_sleeve_length = Math.ceil(this.data.short_sleeve_length * 4) / 4;
    this.rdata.short_sleeve_opening_width = Math.ceil(this.data.short_sleeve_opening_width * 4) / 4;
    this.rdata.short_sleeve_width = Math.ceil(this.data.short_sleeve_width * 4) / 4;
    for (var i in this.rdata) {
        this.rdata[i] = this.rdata[i].toFixed(2);
    }
    this.xml_vars = {};
    this.xml_vars.body_size = this.get_body_size_chest_width();
    this.xml_vars.default_collar = this.xml_vars.body_size;
    this.xml_vars.adj_collar = this.restrict_limit(this.rdata.collar - this.xml_vars.default_collar, this.get_adj_limit('collar', 'min'), this.get_adj_limit('collar', 'max')) + this.xml_vars.default_collar;
    this.xml_vars.default_chest = (this.xml_vars.body_size - 14.5) * 2 + 19 - 0.5;
    this.xml_vars.adj_chest = this.restrict_limit((this.rdata.chest - this.xml_vars.default_chest) * 2, this.get_adj_limit('chest', 'min'), this.get_adj_limit('chest', 'max'));
    this.xml_vars.default_midsection = (this.xml_vars.body_size - 14.5) * 2 + 17.5 - 0.5;
    this.xml_vars.adj_midsection = this.restrict_limit((this.rdata.midsection - this.xml_vars.default_midsection) * 2, this.get_adj_limit('midsection', 'min'), this.get_adj_limit('midsection', 'max'));
    this.xml_vars.default_bottom = (this.xml_vars.body_size - 14.5) * 2 + 18.5 - 0.5;
    this.xml_vars.adj_bottom = this.restrict_limit((this.rdata.adddim_bottom_width - this.xml_vars.default_bottom) * 2, this.get_adj_limit('adddim_bottom_width', 'min'), this.get_adj_limit('adddim_bottom_width', 'max'));
    this.xml_vars.default_yoke = this.xml_vars.body_size + 2 - 0.25;
    this.xml_vars.adj_yoke = this.restrict_limit(this.rdata.yoke - this.xml_vars.default_yoke, this.get_adj_limit('yoke', 'min'), this.get_adj_limit('yoke', 'max'));
    this.xml_vars.default_length = 32;
    this.xml_vars.adj_length = this.restrict_limit(this.rdata.shirt_length - this.xml_vars.default_length, this.get_adj_limit('shirt_length', 'min'), this.get_adj_limit('shirt_length', 'max'));
    this.xml_vars.default_sleeve_w = ((this.xml_vars.body_size - 14.5) * 2 * 0.75 + 16) / 2 - 0.5;
    this.xml_vars.adj_sleeve_w = this.restrict_limit((this.rdata.sleeve_w - this.xml_vars.default_sleeve_w) * 2, this.get_adj_limit('sleeve_w', 'min'), this.get_adj_limit('sleeve_w', 'max'));
    this.xml_vars.default_cuff = 0;
    this.xml_vars.adj_cuff = this.rdata.cuff - this.xml_vars.default_cuff + 1;
    this.xml_vars.default_sleeve = 0;
    this.xml_vars.adj_sleeve = this.data.sleeve - this.xml_vars.default_sleeve;
    this.xml_vars.default_short_sleeve_length = this.xml_vars.body_size * 0.25 + 6.125;
    this.xml_vars.adj_short_sleeve_length = this.restrict_limit(this.rdata.short_sleeve_length - this.xml_vars.default_short_sleeve_length, this.get_adj_limit('short_sleeve_length', 'min'), this.get_adj_limit('short_sleeve_length', 'max'));
    this.xml_vars.default_short_sleeve_opening_width = this.xml_vars.body_size * 1.5 - 9.25;
    this.xml_vars.adj_short_sleeve_opening_width = this.xml_vars.body_size * 1.5 - 9.25;
    this.xml_vars.default_short_sleeve_width = (this.xml_vars.body_size * 1.5 - 8) / 2;
    this.xml_vars.adj_short_sleeve_width = (this.xml_vars.body_size * 1.5 - 8) / 2;
    this.actual_dimensions = {};
    this.actual_dimensions.collar = this.xml_vars.adj_collar;
    this.actual_dimensions.sleeve = this.xml_vars.default_sleeve + this.xml_vars.adj_sleeve;
    this.actual_dimensions.yoke = this.xml_vars.default_yoke + this.xml_vars.adj_yoke;
    this.actual_dimensions.chest = this.xml_vars.default_chest + this.xml_vars.adj_chest / 2;
    this.actual_dimensions.midsection = this.xml_vars.default_midsection + this.xml_vars.adj_midsection / 2;
    this.actual_dimensions.shirt_length = this.xml_vars.default_length + this.xml_vars.adj_length;
    this.actual_dimensions.sleeve_w = this.xml_vars.default_sleeve_w + this.xml_vars.adj_sleeve_w / 2;
    this.actual_dimensions.cuff = this.xml_vars.default_cuff + this.xml_vars.adj_cuff - 1;
    this.actual_dimensions.adddim_bottom_width = this.xml_vars.default_bottom + this.xml_vars.adj_bottom / 2;
    this.actual_dimensions.short_sleeve_length = this.xml_vars.adj_short_sleeve_length;
    this.actual_dimensions.short_sleeve_opening_width = (this.xml_vars.default_short_sleeve_opening_width + this.xml_vars.adj_short_sleeve_opening_width) / 2;
    this.actual_dimensions.short_sleeve_width = this.xml_vars.default_short_sleeve_width + this.xml_vars.adj_short_sleeve_width / 2;
    for (var i in this.actual_dimensions) {
        this.actual_dimensions[i] = this.actual_dimensions[i].toFixed(2);
    }
    this.min_collar = this.get_limit('collar', 'min');
    this.max_collar = this.get_limit('collar', 'max');
    this.min_sleeve = this.get_limit('sleeve', 'min');
    this.max_sleeve = this.get_limit('sleeve', 'max');
    this.min_shoulder = this.min_yoke = this.get_limit('yoke', 'min');
    this.max_shoulder = this.max_yoke = this.get_limit('yoke', 'max');
    this.min_chest = this.get_limit('chest', 'min');
    this.max_chest = 37;
    this.min_mid = this.min_midsection = this.get_limit('midsection', 'min');
    this.max_mid = this.max_midsection = this.get_limit('midsection', 'max');
    this.min_length = this.get_limit('length', 'min');
    this.max_length = this.get_limit('length', 'max');
    this.min_sleeve_w = this.get_limit('sleeve_w', 'min');
    this.max_sleeve_w = this.get_limit('sleeve_w', 'max');
    this.min_cuff = this.get_limit('cuff', 'min');
    this.max_cuff = this.get_limit('cuff', 'max');
    this.min_bottom_width = this.get_limit('adddim_bottom_width', 'min');
    this.max_bottom_width = this.get_limit('adddim_bottom_width', 'max');
    this.min_short_sleeve_length = this.get_limit('short_sleeve_length', 'min');
    this.max_short_sleeve_length = this.get_limit('short_sleeve_length', 'max');
    this.min_short_sleeve_opening_width = this.get_limit('short_sleeve_opening_width', 'min');
    this.max_short_sleeve_opening_width = this.get_limit('short_sleeve_opening_width', 'max');
    this.min_short_sleeve_width = this.get_limit('short_sleeve_width', 'min');
    this.max_short_sleeve_width = this.get_limit('short_sleeve_width', 'max');
    switch (this.adddim_top_button_placement) {
        case 'lowered_1_2':
            if (parseFloat(this.actual_dimensions.shirt_length) <= 27.5) {
                this.adddim_buttons_on_shirt_front = 6;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 27.75 && parseFloat(this.actual_dimensions.shirt_length) <= 30.5) {
                this.adddim_buttons_on_shirt_front = 7;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 30.75 && parseFloat(this.actual_dimensions.shirt_length) <= 34) {
                this.adddim_buttons_on_shirt_front = 8;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 34.25 && parseFloat(this.actual_dimensions.shirt_length) <= 37.5) {
                this.adddim_buttons_on_shirt_front = 9;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 37.75) {
                this.adddim_buttons_on_shirt_front = 10;
            }
            break;
        case 'standard':
        default:
            if (parseFloat(this.actual_dimensions.shirt_length) <= 27) {
                this.adddim_buttons_on_shirt_front = 6;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 27.25 && parseFloat(this.actual_dimensions.shirt_length) <= 30) {
                this.adddim_buttons_on_shirt_front = 7;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 30.25 && parseFloat(this.actual_dimensions.shirt_length) <= 33.5) {
                this.adddim_buttons_on_shirt_front = 8;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 33.75 && parseFloat(this.actual_dimensions.shirt_length) <= 37) {
                this.adddim_buttons_on_shirt_front = 9;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 37.25) {
                this.adddim_buttons_on_shirt_front = 10;
            }
            break;
        case 'raised_1_2':
            if (parseFloat(this.actual_dimensions.shirt_length) <= 26.5) {
                this.adddim_buttons_on_shirt_front = 6;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 26.75 && parseFloat(this.actual_dimensions.shirt_length) <= 29.5) {
                this.adddim_buttons_on_shirt_front = 7;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 29.75 && parseFloat(this.actual_dimensions.shirt_length) <= 33) {
                this.adddim_buttons_on_shirt_front = 8;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 33.25 && parseFloat(this.actual_dimensions.shirt_length) <= 36.5) {
                this.adddim_buttons_on_shirt_front = 9;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 36.75) {
                this.adddim_buttons_on_shirt_front = 10;
            }
            break;
        case 'raised_1':
            if (parseFloat(this.actual_dimensions.shirt_length) <= 26) {
                this.adddim_buttons_on_shirt_front = 6;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 26.25 && parseFloat(this.actual_dimensions.shirt_length) <= 29) {
                this.adddim_buttons_on_shirt_front = 7;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 29.25 && parseFloat(this.actual_dimensions.shirt_length) <= 32.5) {
                this.adddim_buttons_on_shirt_front = 8;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 32.75 && parseFloat(this.actual_dimensions.shirt_length) <= 36) {
                this.adddim_buttons_on_shirt_front = 9;
            } else if (parseFloat(this.actual_dimensions.shirt_length) >= 36.25) {
                this.adddim_buttons_on_shirt_front = 10;
            }
            break;
    }
    $('#adddim_buttons_on_shirt_front_field').val(this.adddim_buttons_on_shirt_front);
    $('#adddim_buttons_on_shirt_front_field_das3').val(this.adddim_buttons_on_shirt_front);
}
AdjSizes.prototype.restrict_limit = function (value, minimum, maximum) {
    if (value < minimum) {
        return minimum;
    } else if (value > maximum) {
        return maximum;
    } else {
        return value;
    }
}
AdjSizes.prototype.get_limit = function (size, type) {
    switch (size.toLowerCase()) {
        case "collar":
            if ("min" == type) {
                return this.xml_vars.body_size - 2;
            } else if ("max" == type) {
                return this.xml_vars.body_size + 2;
            }
            break;
        case "chest":
            if ("min" == type) {
                if (isShortSleeve()) {
                    return parseFloat(this.actual_dimensions.chest) +
                        Math.max((this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'max')) * 2, this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'max'), this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'max'));
                } else {
                    return parseFloat(this.actual_dimensions.chest) +
                        Math.max((this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'max')) * 2, this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'max'), (this.xml_vars.adj_sleeve_w - this.get_adj_limit('sleeve_w', 'max')) * 2 / 1.5, this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'max'));
                }
            } else if ("max" == type) {
                if (isShortSleeve()) {
                    return parseFloat(this.actual_dimensions.chest) +
                        Math.min((this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'min')) * 2, this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'min'), this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'min'));
                } else {
                    return parseFloat(this.actual_dimensions.chest) +
                        Math.min((this.xml_vars.adj_collar - this.xml_vars.body_size - this.get_adj_limit('collar', 'min')) * 2, this.xml_vars.adj_yoke - this.get_adj_limit('yoke', 'min'), (this.xml_vars.adj_sleeve_w - this.get_adj_limit('sleeve_w', 'min')) * 2 / 1.5, this.xml_vars.adj_midsection - this.get_adj_limit('midsection', 'min'));
                }
            }
            break;
        case "midsection":
            if ("min" == type) {
                return parseFloat(this.actual_dimensions.midsection) + (this.get_adj_limit('midsection', 'min') - this.xml_vars.adj_midsection) / 2;
            } else if ("max" == type) {
                return parseFloat(this.actual_dimensions.midsection) + (this.get_adj_limit('midsection', 'max') - this.xml_vars.adj_midsection) / 2;
            }
            break;
        case "adddim_bottom_width":
            var value;
            if ("min" == type) {
                value = Math.max(parseFloat(this.actual_dimensions.adddim_bottom_width) + (this.get_adj_limit('adddim_bottom_width', 'min') - this.xml_vars.adj_bottom) / 2, this.actual_dimensions.midsection);
                value = Math.floor(value * 4) / 4;
            } else if ("max" == type) {
                value = Math.min(parseFloat(this.actual_dimensions.adddim_bottom_width) + (this.get_adj_limit('adddim_bottom_width', 'max') - this.xml_vars.adj_bottom) / 2, parseFloat(this.actual_dimensions.chest) + 2);
                value = Math.ceil(value * 4) / 4;
            }
            return value;
            break;
        case "yoke":
            if ("min" == type) {
                return parseFloat(this.actual_dimensions.yoke) + this.get_adj_limit('yoke', 'min') - this.xml_vars.adj_yoke;
            } else if ("max" == type) {
                return parseFloat(this.actual_dimensions.yoke) + this.get_adj_limit('yoke', 'max') - this.xml_vars.adj_yoke;
            }
            break;
        case "length":
            if ("min" == type) {
                return parseFloat(this.actual_dimensions.shirt_length) + this.get_adj_limit('shirt_length', 'min') - this.xml_vars.adj_length;
            } else if ("max" == type) {
                return parseFloat(this.actual_dimensions.shirt_length) + this.get_adj_limit('shirt_length', 'max') - this.xml_vars.adj_length;
            }
            break;
        case "sleeve_w":
            if ("min" == type) {
                var t = parseFloat(this.actual_dimensions.sleeve_w) + (this.get_adj_limit('sleeve_w', 'min') - this.xml_vars.adj_sleeve_w) / 2;
                t = t.toFixed(2);
                return parseFloat(t);
            } else if ("max" == type) {
                var t = parseFloat(this.actual_dimensions.sleeve_w) + (this.get_adj_limit('sleeve_w', 'max') - this.xml_vars.adj_sleeve_w) / 2;
                t = t.toFixed(2);
                return parseFloat(t);
            }
            break;
        case "cuff":
            if ("min" == type) {
                return parseFloat(this.actual_dimensions.cuff) + (this.get_adj_limit('cuff', 'min') - this.xml_vars.adj_cuff);
            } else if ("max" == type) {
                return parseFloat(this.actual_dimensions.cuff) + (this.get_adj_limit('cuff', 'max') - this.xml_vars.adj_cuff);
            }
            break;
        case "sleeve":
            if ("min" == type) {
                return parseFloat(this.actual_dimensions.sleeve) + (this.get_adj_limit('sleeve', 'min') - this.xml_vars.adj_sleeve);
            } else if ("max" == type) {
                return parseFloat(this.actual_dimensions.sleeve) + (this.get_adj_limit('sleeve', 'max') - this.xml_vars.adj_sleeve);
            }
            break;
        case "short_sleeve_length":
            if ("min" == type) {
                return parseFloat(this.xml_vars.default_short_sleeve_length) + this.get_adj_limit('short_sleeve_length', 'min');
            } else if ("max" == type) {
                return parseFloat(this.xml_vars.default_short_sleeve_length) + this.get_adj_limit('short_sleeve_length', 'max');
            }
            break;
        case "short_sleeve_opening_width":
            if ("min" == type) {
                l = parseFloat(this.actual_dimensions.short_sleeve_opening_width) + (this.get_adj_limit('short_sleeve_opening_width', 'min') - this.xml_vars.adj_short_sleeve_opening_width) / 2;
                r = parseFloat(this.rdata.short_sleeve_width - 2);
                return l > r ? r : l;
            } else if ("max" == type) {
                l = parseFloat(this.actual_dimensions.short_sleeve_opening_width) + (this.get_adj_limit('short_sleeve_opening_width', 'max') - this.xml_vars.adj_short_sleeve_opening_width) / 2;
                r = parseFloat(this.rdata.short_sleeve_width - 0.25);
                return l < r ? r : l;
            }
            break;
        case "short_sleeve_width":
            if ("min" == type) {
                l = parseFloat(this.actual_dimensions.short_sleeve_width) + (this.get_adj_limit('short_sleeve_width', 'min') - this.xml_vars.adj_short_sleeve_width) / 2;
                r = parseFloat(this.rdata.short_sleeve_opening_width + 0.25);
                return l > r ? r : l;
            } else if ("max" == type) {
                l = parseFloat(this.actual_dimensions.short_sleeve_width) + (this.get_adj_limit('short_sleeve_width', 'max') - this.xml_vars.adj_short_sleeve_width) / 2;
                r = parseFloat(this.rdata.short_sleeve_opening_width + 2);
                return l < r ? r : l;
            }
            break;
    }
    throw new Error("`" + size + "` param in get_limit() doesn't exists");
}
AdjSizes.prototype.get_adj_limit = function (size, type) {
    var limits = {
        "collar": {
            "min": -2,
            "max": 2
        },
        "sleeve": {
            "min": 22,
            "max": 42
        },
        "yoke": {
            "min": -2,
            "max": 2
        },
        "chest": {
            "min": -2,
            "max": 2
        },
        "midsection": {
            "min": -8,
            "max": 6
        },
        "shirt_length": {
            "min": -6,
            "max": 6
        },
        "sleeve_w": {
            "min": -2,
            "max": 2
        },
        "cuff": {
            "min": 8,
            "max": 14
        },
        "adddim_bottom_width": {
            "min": -8,
            "max": 6
        },
        "short_sleeve_length": {
            "min": -1.5,
            "max": 1.5
        },
        "short_sleeve_opening_width": {
            "min": -2,
            "max": 2
        },
        "short_sleeve_width": {
            "min": -2,
            "max": 2
        }
    }
    if ("min" != type && "max" != type) {
        throw new Error("type `" + type + "` doesn't exist");
    }
    if (undefined != limits[size]) {
        return limits[size][type];
    } else {
        throw new Error("size `" + size + "` doesn't exist");
    }
}
AdjSizes.prototype.get_body_size_chest_width = function () {
    var body_size_chest_widths = {
        odd: {
            "13.5": {
                "2": 11.5,
                "3": 12.0
            },
            "14.5": {
                "2": 12.0,
                "3": 12.5
            },
            "15.5": {
                "2": 12.5,
                "3": 13.0
            },
            "16.5": {
                "2": 13.0,
                "3": 13.5
            },
            "17.5": {
                "2": 13.5,
                "3": 14.0
            },
            "18.5": {
                "2": 14.0,
                "3": 14.5
            },
            "19.5": {
                "2": 14.5,
                "3": 15.0
            },
            "20.5": {
                "2": 15.0,
                "3": 15.5
            },
            "21.5": {
                "2": 15.5,
                "3": 16.0
            },
            "22.5": {
                "2": 16.0,
                "3": 16.5
            },
            "23.5": {
                "2": 16.5,
                "3": 17.0
            },
            "24.5": {
                "2": 17.0,
                "3": 17.5
            },
            "25.5": {
                "2": 17.5,
                "3": 18.0
            },
            "26.5": {
                "2": 18.0,
                "3": 18.5
            },
            "27.5": {
                "2": 18.5,
                "3": 19.0
            },
            "28.5": {
                "2": 19.0,
                "3": 19.5
            },
            "29.5": {
                "2": 19.5,
                "3": 20.0
            },
            "30.5": {
                "2": 20.0,
                "3": 20.5
            },
            "31.5": {
                "2": 20.5,
                "3": 21.0
            },
            "32.5": {
                "2": 21.0,
                "3": 21.5
            },
            "33.5": {
                "2": 21.5,
                "3": 22.0
            },
            "34.5": {
                "2": 22.0,
                "3": 22.5
            },
            "35.5": {
                "2": 22.5,
                "3": 23.0
            },
            "36.5": {
                "2": 23.0,
                "3": 23.5
            },
            "37": {
                "2": 23.5,
                "3": 24.0
            }
        },
        even: {
            "13": {
                "2": 11.0,
                "3": 11.5,
                "4": 12.0
            },
            "14": {
                "2": 11.5,
                "3": 12.0,
                "4": 12.5
            },
            "15": {
                "2": 12.0,
                "3": 12.5,
                "4": 13.0
            },
            "16": {
                "2": 12.5,
                "3": 13.0,
                "4": 13.5
            },
            "17": {
                "2": 13.0,
                "3": 13.5,
                "4": 14.0
            },
            "18": {
                "2": 13.5,
                "3": 14.0,
                "4": 14.5
            },
            "19": {
                "2": 14.0,
                "3": 14.5,
                "4": 15.0
            },
            "20": {
                "2": 14.5,
                "3": 15.0,
                "4": 15.5
            },
            "21": {
                "2": 15.0,
                "3": 15.5,
                "4": 16.0
            },
            "22": {
                "2": 15.5,
                "3": 16.0,
                "4": 16.5
            },
            "23": {
                "2": 16.0,
                "3": 16.5,
                "4": 17.0
            },
            "24": {
                "2": 16.5,
                "3": 17.0,
                "4": 17.5
            },
            "25": {
                "2": 17.0,
                "3": 17.5,
                "4": 18.0
            },
            "26": {
                "2": 17.5,
                "3": 18.0,
                "4": 18.5
            },
            "27": {
                "2": 18.0,
                "3": 18.5,
                "4": 19.0
            },
            "28": {
                "2": 18.5,
                "3": 19.0,
                "4": 19.5
            },
            "29": {
                "2": 19.0,
                "3": 19.5,
                "4": 20.0
            },
            "30": {
                "2": 19.5,
                "3": 20.0,
                "4": 20.5
            },
            "31": {
                "2": 20.0,
                "3": 20.5,
                "4": 21.0
            },
            "32": {
                "2": 20.5,
                "3": 21.0,
                "4": 21.5
            },
            "33": {
                "2": 21.0,
                "3": 21.5,
                "4": 22.0
            },
            "34": {
                "2": 21.5,
                "3": 22.0,
                "4": 22.5
            },
            "35": {
                "2": 22.0,
                "3": 22.5,
                "4": 23.0
            },
            "36": {
                "2": 22.5,
                "3": 23.0,
                "4": 23.5
            },
            "37": {
                "2": 23.0,
                "3": 23.5,
                "4": 24.0
            },
            "38": {
                "2": 23.5,
                "3": 24.0,
                "4": 24.5
            }
        }
    };
    var chest_size_1_4 = {
        "13.25": {
            "2": 11.5,
            "3": 12.0
        },
        "14.25": {
            "2": 12.0,
            "3": 12.5
        },
        "15.25": {
            "2": 12.5,
            "3": 13.0
        },
        "16.25": {
            "2": 13.0,
            "3": 13.5
        },
        "17.25": {
            "2": 13.5,
            "3": 14.0
        },
        "18.25": {
            "2": 14.0,
            "3": 14.5
        },
        "19.25": {
            "2": 14.5,
            "3": 15.0
        },
        "20.25": {
            "2": 15.0,
            "3": 15.5
        },
        "21.25": {
            "2": 15.5,
            "3": 16.0
        },
        "22.25": {
            "2": 16.0,
            "3": 16.5
        },
        "23.25": {
            "2": 16.5,
            "3": 17.0
        },
        "24.25": {
            "2": 17.0,
            "3": 17.5
        },
        "25.25": {
            "2": 17.5,
            "3": 18.0
        },
        "26.25": {
            "2": 18.0,
            "3": 18.5
        },
        "27.25": {
            "2": 18.5,
            "3": 19.0
        },
        "28.25": {
            "2": 19.0,
            "3": 19.5
        },
        "29.25": {
            "2": 19.5,
            "3": 20.0
        },
        "30.25": {
            "2": 20.0,
            "3": 20.5
        },
        "31.25": {
            "2": 20.5,
            "3": 21.0
        },
        "32.25": {
            "2": 21.0,
            "3": 21.5
        },
        "33.25": {
            "2": 21.5,
            "3": 22.0
        },
        "34.25": {
            "2": 22.0,
            "3": 22.5
        },
        "35.25": {
            "2": 22.5,
            "3": 23.0
        },
        "36.25": {
            "2": 23.0,
            "3": 23.5
        },
        "37.25": {
            "2": 23.5,
            "3": 24.0
        }
    };
    var chest_size_3_4 = {
        "13.75": {
            "2": 11.5,
            "3": 12.0
        },
        "14.75": {
            "2": 12.0,
            "3": 12.5
        },
        "15.75": {
            "2": 12.5,
            "3": 13.0
        },
        "16.75": {
            "2": 13.0,
            "3": 13.5
        },
        "17.75": {
            "2": 13.5,
            "3": 14.0
        },
        "18.75": {
            "2": 14.0,
            "3": 14.5
        },
        "19.75": {
            "2": 14.5,
            "3": 15.0
        },
        "20.75": {
            "2": 15.0,
            "3": 15.5
        },
        "21.75": {
            "2": 15.5,
            "3": 16.0
        },
        "22.75": {
            "2": 16.0,
            "3": 16.5
        },
        "23.75": {
            "2": 16.5,
            "3": 17.0
        },
        "24.75": {
            "2": 17.0,
            "3": 17.5
        },
        "25.75": {
            "2": 17.5,
            "3": 18.0
        },
        "26.75": {
            "2": 18.0,
            "3": 18.5
        },
        "27.75": {
            "2": 18.5,
            "3": 19.0
        },
        "28.75": {
            "2": 19.0,
            "3": 19.5
        },
        "29.75": {
            "2": 19.5,
            "3": 20.0
        },
        "30.75": {
            "2": 20.0,
            "3": 20.5
        },
        "31.75": {
            "2": 20.5,
            "3": 21.0
        },
        "32.75": {
            "2": 21.0,
            "3": 21.5
        },
        "33.75": {
            "2": 21.5,
            "3": 22.0
        },
        "34.75": {
            "2": 22.0,
            "3": 22.5
        },
        "35.75": {
            "2": 22.5,
            "3": 23.0
        },
        "36.75": {
            "2": 23.0,
            "3": 23.5
        },
        "37.75": {
            "2": 23.5,
            "3": 24.0
        }
    };
    var optimal_body = (this.data.chest - 19 + 0.5) / 2 + 14.5;
    var target_column_even = this.data.collar >= optimal_body + 1.5 ? 4 : (this.data.collar <= optimal_body - 1 ? 2 : 3);
    var target_column_odd = this.data.collar >= optimal_body + 1 ? 3 : 2;
    var val2 = parseFloat(this.rdata.chest) + 0.5;
    if (typeof chest_size_1_4[val2.toString()] == "undefined")
        var body_chest_1_4 = false;
    else
        var body_chest_1_4 = chest_size_1_4[val2.toString()][target_column_odd];
    if (typeof chest_size_3_4[val2.toString()] == "undefined")
        var body_chest_3_4 = false;
    else
        var body_chest_3_4 = chest_size_3_4[val2.toString()][target_column_odd];
    target_colum_1_4 = (this.data.collar >= optimal_body) ? 3 : 2;
    target_colum_3_4 = (this.data.collar >= optimal_body) ? 3 : 2;
    var t = Math.ceil((parseFloat(this.rdata.chest) + 0.5) * 2) / 2 * 2
    if (t % 2) {
        var val = Math.ceil((parseFloat(this.rdata.chest) + 0.5) * 2) / 2;
        val = Math.min(val, 37);
        val = Math.max(val, 13.5);
        var body_chest_odd = body_size_chest_widths.odd[val.toString()][target_column_odd];
    } else {
        var val = Math.ceil((parseFloat(this.rdata.chest) + 0.5) * 2) / 2;
        val = Math.min(val, 38);
        val = Math.max(val, 13);
        var body_chest_even = body_size_chest_widths.even[val.toString()][target_column_even];
    }
    if ((parseFloat(this.rdata.chest) * 4) % 2 == 0) {
        if (((parseFloat(this.rdata.chest) + 0.5) * 2) % 2 == 0) {
            return body_chest_even;
        } else {
            return body_chest_odd;
        }
    } else {
        if (((parseFloat(this.rdata.chest) + 0.5) * 2 - 0.5) % 2 == 0) {
            return body_chest_1_4;
        } else {
            return body_chest_3_4;
        }
    }
    var double_chest = (parseFloat(this.rdata.chest) + 0.5) * 2;
    if (parseInt(double_chest / 2) == parseFloat(double_chest / 2)) {
        var val = parseInt(this.rdata.chest + 0.5);
        val = Math.min(val, 38);
        val = Math.max(val, 13);
        return body_size_chest_widths.even[val.toString()][target_column_even];
    } else {
        var val = parseFloat(this.rdata.chest + 0.5);
        val = Math.min(val, 37);
        val = Math.max(val, 13.5);
        return body_size_chest_widths.odd[val.toString()][target_column_odd];
    }
}
AdjSizes.prototype.get_default_bottom_width = function () {
    var default_bottom_widths = {
        "0": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.75,
            "9": 2,
            "10": 2.25,
            "11": 2.5,
            "12": 2.75,
            "13": 2.75,
            "14": 3,
            "15": 3.25,
            "16": 3.25,
            "17": 3.25,
            "18": 3.5,
            "19": 3.5,
            "20": 3.75,
            "21": 4,
            "22": 4.25,
            "23": 4.25,
            "24": 4.5,
            "25": 4.5,
            "26": 4.5,
            "27": 4.5,
            "28": 4.5,
            "29": 4.5
        },
        "0.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.75,
            "9": 2,
            "10": 2.25,
            "11": 2.5,
            "12": 2.75,
            "13": 2.75,
            "14": 3,
            "15": 3,
            "16": 3.25,
            "17": 3.25,
            "18": 3.25,
            "19": 3.5,
            "20": 3.5,
            "21": 3.75,
            "22": 4,
            "23": 4.25,
            "24": 4.5,
            "25": 4.5,
            "26": 4.5,
            "27": 4.5,
            "28": 4.5,
            "29": 4.5
        },
        "0.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.75,
            "9": 2,
            "10": 2.25,
            "11": 2.5,
            "12": 2.75,
            "13": 2.75,
            "14": 2.75,
            "15": 3,
            "16": 3,
            "17": 3,
            "18": 3.25,
            "19": 3.25,
            "20": 3.5,
            "21": 3.5,
            "22": 3.75,
            "23": 3.75,
            "24": 4.25,
            "25": 4.25,
            "26": 4.25,
            "27": 4.25,
            "28": 4.25,
            "29": 4.25
        },
        "0.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.75,
            "9": 2,
            "10": 2.25,
            "11": 2.25,
            "12": 2.5,
            "13": 2.5,
            "14": 2.75,
            "15": 3,
            "16": 3,
            "17": 3,
            "18": 3.25,
            "19": 3.25,
            "20": 3.5,
            "21": 3.5,
            "22": 3.75,
            "23": 3.75,
            "24": 4,
            "25": 4,
            "26": 4,
            "27": 4,
            "28": 4,
            "29": 4
        },
        "1": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.75,
            "9": 2,
            "10": 2,
            "11": 2.25,
            "12": 2.25,
            "13": 2.25,
            "14": 2.5,
            "15": 2.75,
            "16": 3,
            "17": 3,
            "18": 3,
            "19": 3.25,
            "20": 3.25,
            "21": 3.25,
            "22": 3.5,
            "23": 3.5,
            "24": 3.75,
            "25": 3.75,
            "26": 3.75,
            "27": 3.75,
            "28": 3.75,
            "29": 3.75
        },
        "1.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.75,
            "9": 2,
            "10": 2,
            "11": 2,
            "12": 2.25,
            "13": 2.25,
            "14": 2.5,
            "15": 2.5,
            "16": 2.75,
            "17": 3,
            "18": 3,
            "19": 3,
            "20": 3.25,
            "21": 3.25,
            "22": 3.5,
            "23": 3.5,
            "24": 3.75,
            "25": 3.75,
            "26": 3.75,
            "27": 3.75,
            "28": 3.75,
            "29": 3.75
        },
        "1.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.75,
            "9": 1.75,
            "10": 2,
            "11": 2,
            "12": 2.25,
            "13": 2.25,
            "14": 2.25,
            "15": 2.5,
            "16": 2.75,
            "17": 2.75,
            "18": 3,
            "19": 3,
            "20": 3,
            "21": 3,
            "22": 3.25,
            "23": 3.25,
            "24": 3.5,
            "25": 3.5,
            "26": 3.5,
            "27": 3.5,
            "28": 3.5,
            "29": 3.5
        },
        "1.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.5,
            "9": 1.75,
            "10": 2,
            "11": 2,
            "12": 2,
            "13": 2.25,
            "14": 2.25,
            "15": 2.25,
            "16": 2.5,
            "17": 2.75,
            "18": 2.75,
            "19": 3,
            "20": 3,
            "21": 3,
            "22": 3.25,
            "23": 3.25,
            "24": 3.5,
            "25": 3.5,
            "26": 3.5,
            "27": 3.5,
            "28": 3.5,
            "29": 3.5
        },
        "2": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.5,
            "8": 1.5,
            "9": 1.75,
            "10": 2,
            "11": 2,
            "12": 2,
            "13": 2.25,
            "14": 2.25,
            "15": 2.25,
            "16": 2.25,
            "17": 2.5,
            "18": 2.5,
            "19": 2.75,
            "20": 2.75,
            "21": 2.75,
            "22": 3,
            "23": 3,
            "24": 3.25,
            "25": 3.25,
            "26": 3.25,
            "27": 3.25,
            "28": 3.25,
            "29": 3.25
        },
        "2.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.25,
            "8": 1.5,
            "9": 1.75,
            "10": 1.75,
            "11": 2,
            "12": 2,
            "13": 2,
            "14": 2.25,
            "15": 2.25,
            "16": 2.25,
            "17": 2.5,
            "18": 2.5,
            "19": 2.5,
            "20": 2.75,
            "21": 2.75,
            "22": 3,
            "23": 3,
            "24": 3.25,
            "25": 3.25,
            "26": 3.25,
            "27": 3.25,
            "28": 3.25,
            "29": 3.25
        },
        "2.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.25,
            "8": 1.5,
            "9": 1.75,
            "10": 1.75,
            "11": 2,
            "12": 2,
            "13": 2,
            "14": 2,
            "15": 2.25,
            "16": 2.25,
            "17": 2.25,
            "18": 2.25,
            "19": 2.25,
            "20": 2.5,
            "21": 2.5,
            "22": 2.5,
            "23": 2.5,
            "24": 3,
            "25": 3,
            "26": 3,
            "27": 3,
            "28": 3,
            "29": 3
        },
        "2.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 1,
            "6": 1.25,
            "7": 1.25,
            "8": 1.5,
            "9": 1.5,
            "10": 1.75,
            "11": 1.75,
            "12": 2,
            "13": 2,
            "14": 2,
            "15": 2,
            "16": 2.25,
            "17": 2.25,
            "18": 2.25,
            "19": 2.25,
            "20": 2.5,
            "21": 2.5,
            "22": 2.5,
            "23": 2.5,
            "24": 3,
            "25": 3,
            "26": 3,
            "27": 3,
            "28": 3,
            "29": 3
        },
        "3": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1.25,
            "8": 1.5,
            "9": 1.5,
            "10": 1.75,
            "11": 1.75,
            "12": 1.75,
            "13": 1.75,
            "14": 2,
            "15": 2,
            "16": 2,
            "17": 2,
            "18": 2.25,
            "19": 2.25,
            "20": 2.25,
            "21": 2.25,
            "22": 2.5,
            "23": 2.5,
            "24": 2.75,
            "25": 2.75,
            "26": 2.75,
            "27": 2.75,
            "28": 2.75,
            "29": 2.75
        },
        "3.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1.25,
            "8": 1.5,
            "9": 1.5,
            "10": 1.75,
            "11": 1.75,
            "12": 1.75,
            "13": 1.75,
            "14": 2,
            "15": 2,
            "16": 2,
            "17": 2,
            "18": 2,
            "19": 2,
            "20": 2.25,
            "21": 2.25,
            "22": 2.5,
            "23": 2.5,
            "24": 2.75,
            "25": 2.75,
            "26": 2.75,
            "27": 2.75,
            "28": 2.75,
            "29": 2.75
        },
        "3.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1.25,
            "8": 1.25,
            "9": 1.5,
            "10": 1.5,
            "11": 1.5,
            "12": 1.5,
            "13": 1.75,
            "14": 1.75,
            "15": 2,
            "16": 2,
            "17": 2,
            "18": 2,
            "19": 2,
            "20": 2,
            "21": 2.25,
            "22": 2.25,
            "23": 2.25,
            "24": 2.5,
            "25": 2.5,
            "26": 2.5,
            "27": 2.5,
            "28": 2.5,
            "29": 2.5
        },
        "3.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1.25,
            "8": 1.25,
            "9": 1.5,
            "10": 1.5,
            "11": 1.5,
            "12": 1.5,
            "13": 1.75,
            "14": 1.75,
            "15": 1.75,
            "16": 1.75,
            "17": 1.75,
            "18": 2,
            "19": 2,
            "20": 2,
            "21": 2,
            "22": 2,
            "23": 2.25,
            "24": 2.5,
            "25": 2.5,
            "26": 2.5,
            "27": 2.5,
            "28": 2.5,
            "29": 2.5
        },
        "4": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1,
            "8": 1.25,
            "9": 1.25,
            "10": 1.5,
            "11": 1.5,
            "12": 1.5,
            "13": 1.5,
            "14": 1.5,
            "15": 1.75,
            "16": 1.75,
            "17": 1.75,
            "18": 1.75,
            "19": 1.75,
            "20": 2,
            "21": 2,
            "22": 2,
            "23": 2,
            "24": 2.25,
            "25": 2.25,
            "26": 2.25,
            "27": 2.25,
            "28": 2.25,
            "29": 2.25
        },
        "4.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1,
            "8": 1.25,
            "9": 1.25,
            "10": 1.5,
            "11": 1.5,
            "12": 1.5,
            "13": 1.5,
            "14": 1.5,
            "15": 1.5,
            "16": 1.75,
            "17": 1.75,
            "18": 1.75,
            "19": 1.75,
            "20": 1.75,
            "21": 2,
            "22": 2,
            "23": 2,
            "24": 2,
            "25": 2.25,
            "26": 2.25,
            "27": 2.25,
            "28": 2.25,
            "29": 2.25
        },
        "4.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1,
            "8": 1,
            "9": 1.25,
            "10": 1.25,
            "11": 1.25,
            "12": 1.5,
            "13": 1.5,
            "14": 1.5,
            "15": 1.5,
            "16": 1.5,
            "17": 1.5,
            "18": 1.5,
            "19": 1.75,
            "20": 1.75,
            "21": 1.75,
            "22": 2,
            "23": 2,
            "24": 2,
            "25": 2,
            "26": 2,
            "27": 2,
            "28": 2.25,
            "29": 2.25
        },
        "4.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 1,
            "7": 1,
            "8": 1,
            "9": 1.25,
            "10": 1.25,
            "11": 1.25,
            "12": 1.25,
            "13": 1.5,
            "14": 1.5,
            "15": 1.5,
            "16": 1.5,
            "17": 1.5,
            "18": 1.5,
            "19": 1.5,
            "20": 1.75,
            "21": 1.75,
            "22": 1.75,
            "23": 2,
            "24": 2,
            "25": 2,
            "26": 2,
            "27": 2,
            "28": 2,
            "29": 2
        },
        "5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 1,
            "8": 1,
            "9": 1,
            "10": 1.25,
            "11": 1.25,
            "12": 1.25,
            "13": 1.25,
            "14": 1.5,
            "15": 1.5,
            "16": 1.5,
            "17": 1.5,
            "18": 1.5,
            "19": 1.5,
            "20": 1.5,
            "21": 1.75,
            "22": 1.75,
            "23": 1.75,
            "24": 1.75,
            "25": 1.75,
            "26": 1.75,
            "27": 2,
            "28": 2,
            "29": 2
        },
        "5.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 1,
            "8": 1,
            "9": 1,
            "10": 1.25,
            "11": 1.25,
            "12": 1.25,
            "13": 1.25,
            "14": 1.25,
            "15": 1.5,
            "16": 1.5,
            "17": 1.5,
            "18": 1.5,
            "19": 1.5,
            "20": 1.5,
            "21": 1.5,
            "22": 1.75,
            "23": 1.75,
            "24": 1.75,
            "25": 1.75,
            "26": 1.75,
            "27": 1.75,
            "28": 1.75,
            "29": 2
        },
        "5.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 1,
            "9": 1,
            "10": 1,
            "11": 1,
            "12": 1,
            "13": 1.25,
            "14": 1.25,
            "15": 1.25,
            "16": 1.25,
            "17": 1.25,
            "18": 1.5,
            "19": 1.5,
            "20": 1.5,
            "21": 1.5,
            "22": 1.5,
            "23": 1.5,
            "24": 1.75,
            "25": 1.75,
            "26": 1.75,
            "27": 1.75,
            "28": 1.75,
            "29": 1.75
        },
        "5.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 1,
            "9": 1,
            "10": 1,
            "11": 1,
            "12": 1,
            "13": 1,
            "14": 1.25,
            "15": 1.25,
            "16": 1.25,
            "17": 1.25,
            "18": 1.25,
            "19": 1.25,
            "20": 1.5,
            "21": 1.5,
            "22": 1.5,
            "23": 1.5,
            "24": 1.5,
            "25": 1.5,
            "26": 1.5,
            "27": 1.5,
            "28": 1.5,
            "29": 1.5
        },
        "6": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 1,
            "10": 1,
            "11": 1,
            "12": 1,
            "13": 1,
            "14": 1,
            "15": 1,
            "16": 1,
            "17": 1,
            "18": 1,
            "19": 1.25,
            "20": 1.25,
            "21": 1.5,
            "22": 1.5,
            "23": 1.5,
            "24": 1.5,
            "25": 1.5,
            "26": 1.5,
            "27": 1.5,
            "28": 1.5,
            "29": 1.5
        },
        "6.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 1,
            "11": 1,
            "12": 1,
            "13": 1,
            "14": 1,
            "15": 1,
            "16": 1,
            "17": 1,
            "18": 1,
            "19": 1.25,
            "20": 1.25,
            "21": 1.25,
            "22": 1.25,
            "23": 1.5,
            "24": 1.5,
            "25": 1.5,
            "26": 1.5,
            "27": 1.5,
            "28": 1.5,
            "29": 1.5
        },
        "6.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 0.75,
            "11": 0.75,
            "12": 1,
            "13": 1,
            "14": 1,
            "15": 1,
            "16": 1,
            "17": 1,
            "18": 1,
            "19": 1,
            "20": 1,
            "21": 1.25,
            "22": 1.25,
            "23": 1.25,
            "24": 1.5,
            "25": 1.5,
            "26": 1.5,
            "27": 1.5,
            "28": 1.5,
            "29": 1.5
        },
        "6.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 0.75,
            "11": 0.75,
            "12": 0.75,
            "13": 0.75,
            "14": 1,
            "15": 1,
            "16": 1,
            "17": 1,
            "18": 1,
            "19": 1,
            "20": 1,
            "21": 1.25,
            "22": 1.25,
            "23": 1.25,
            "24": 1.25,
            "25": 1.5,
            "26": 1.5,
            "27": 1.5,
            "28": 1.5,
            "29": 1.5
        },
        "7": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 0.75,
            "11": 0.75,
            "12": 0.75,
            "13": 0.75,
            "14": 0.75,
            "15": 0.75,
            "16": 1,
            "17": 1,
            "18": 1,
            "19": 1,
            "20": 1,
            "21": 1,
            "22": 1.25,
            "23": 1.25,
            "24": 1.25,
            "25": 1.25,
            "26": 1.25,
            "27": 1.25,
            "28": 1.5,
            "29": 1.5
        },
        "7.25": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 0.75,
            "11": 0.75,
            "12": 0.75,
            "13": 0.75,
            "14": 0.75,
            "15": 0.75,
            "16": 0.75,
            "17": 0.75,
            "18": 0.75,
            "19": 1,
            "20": 1,
            "21": 1,
            "22": 1.25,
            "23": 1.25,
            "24": 1.25,
            "25": 1.25,
            "26": 1.25,
            "27": 1.25,
            "28": 1.25,
            "29": 1.25
        },
        "7.5": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 0.75,
            "11": 0.75,
            "12": 0.75,
            "13": 0.75,
            "14": 0.75,
            "15": 0.75,
            "16": 0.75,
            "17": 0.75,
            "18": 0.75,
            "19": 0.75,
            "20": 1,
            "21": 1,
            "22": 1,
            "23": 1,
            "24": 1,
            "25": 1.25,
            "26": 1.25,
            "27": 1.25,
            "28": 1.25,
            "29": 1.25
        },
        "7.75": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 0.75,
            "11": 0.75,
            "12": 0.75,
            "13": 0.75,
            "14": 0.75,
            "15": 0.75,
            "16": 0.75,
            "17": 0.75,
            "18": 0.75,
            "19": 0.75,
            "20": 0.75,
            "21": 1,
            "22": 1,
            "23": 1,
            "24": 1,
            "25": 1,
            "26": 1,
            "27": 1,
            "28": 1.25,
            "29": 1.25
        },
        "8": {
            "1": 0,
            "2": 0.25,
            "3": 0.5,
            "4": 0.75,
            "5": 0.75,
            "6": 0.75,
            "7": 0.75,
            "8": 0.75,
            "9": 0.75,
            "10": 0.75,
            "11": 0.75,
            "12": 0.75,
            "13": 0.75,
            "14": 0.75,
            "15": 0.75,
            "16": 0.75,
            "17": 0.75,
            "18": 0.75,
            "19": 0.75,
            "20": 0.75,
            "21": 0.75,
            "22": 0.75,
            "23": 1,
            "24": 1,
            "25": 1,
            "26": 1,
            "27": 1,
            "28": 1,
            "29": 1
        }
    };
    var C43 = this.rdata.chest * 1;
    var C44 = this.rdata.midsection * 1;
    if (isShortSleeve()) {
        var C50 = excelCeil(4 * (2 * C43 * 1 + C44 * 1) / 3) / 4;
        return C50;
    } else {
        var C45 = C43 - C44;
        var C46 = this.rdata.sleeve * 1;
        var C47 = this.rdata.shirt_length * 1;
        var C48 = C46 - C47;
        if (C48 > 8) {
            C48 = 8;
        }
        var C49 = 0;
        if (C45 >= 0) {
            if (C48 > 0) {
                var tmp_bw = C45 * 4 + 2 - 1;
                C49 = parseFloat(default_bottom_widths[C48][tmp_bw]);
            } else {
                var tmp_bw = C45 * 4 + 2 - 1;
                C49 = parseFloat(default_bottom_widths[0][tmp_bw]);
            }
        }
        var C50 = C49 + parseFloat(C44);
        return C50;
    }
}

function isShortSleeve() {
    return parseInt($('#shortSleeve').val()) > 0 ? true : false;
}
var SmartSize = function (data) {
    this.data = data;
    if (!isNaN(parseFloat(this.data.tall_feets)) && !isNaN(parseFloat(this.data.tall_inches))) {
        this.data.tall = parseInt(this.data.tall_feets) * 12 + parseInt(this.data.tall_inches);
    } else {
        this.data.tall = '';
        this.data.tall_feets = '';
        this.data.tall_inches = '';
    }
    if (this.data.suit === undefined) {
        this.data.suit = parseFloat(this.data.jacket_size);
    }
    if (!isNaN(parseInt(this.data.ethnicity))) {
        this.data.ethnicity = parseInt(this.data.ethnicity);
        if (this.data.ethnicity < 1) {
            this.data.ethnicity = 1
        } else {
            if (this.data.ethnicity > 4) {
                this.data.ethnicity = 4;
            }
        }
    }
    switch (this.data.size.toLowerCase()) {
        case 'xxs':
            this.data.size_num = 0;
            break;
        case 'xs':
            this.data.size_num = 1;
            break;
        case 's':
            this.data.size_num = 2;
            break;
        case 'm':
            this.data.size_num = 3;
            break;
        case 'l':
            this.data.size_num = 4;
            break;
        case 'xl':
            this.data.size_num = 5;
            break;
        case 'xxl':
            this.data.size_num = 6;
            break;
        case '3xl':
        case '4xl':
        case '5xl':
        case '6xl':
            this.data.size_num = 6;
            break;
    }
    if (this.isInputYes('collar')) {
        this.collar = this.data.collar;
    } else {
        this.collar = this.getParam(this.data.size, 'collar');
        this.collar += this.getCommonB115('collar');
        this.collar += this.getCommonB124('collar');
        this.collar += this.getCommonB198('collar');
        if (this.isInputYes('midsection_style')) {
            this.collar += this.getB502J505(this.data.midsection_style, this.data.size_num);
        }
        if (this.isInputYes('pants_waist')) {
            tmp = this.data.pants_waist;
            if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
                tmp = this.getRangeLimits('pants_waist', 'min');
            }
            if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
                tmp = this.getRangeLimits('pants_waist', 'max');
            }
            tmp = Math.floor(tmp);
            this.collar += this.getB510J542(tmp, this.data.size_num);
        }
        if (this.isInputYes('weight') && this.isInputYes('tall')) {
            tmp = this.data.weight;
            if (this.data.weight < this.getRangeLimits('weight', 'min')) {
                tmp = this.getRangeLimits('weight', 'min');
            }
            if (this.data.weight > this.getRangeLimits('weight', 'max')) {
                tmp = this.getRangeLimits('weight', 'max');
            }
            tmp = Math.floor(tmp / 10) * 10;
            tmp2 = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp2 = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp2 = this.getRangeLimits('height', 'max');
            }
            tmp2 = Math.floor(tmp2);
            this.collar += this.getB615AA649(tmp, tmp2);
        }
        if (this.isInputYes('weight') && !this.isInputYes('tall')) {
            tmp = this.data.weight;
            if (this.data.weight < this.getRangeLimits('weight', 'min')) {
                tmp = this.getRangeLimits('weight', 'min');
            }
            if (this.data.weight > this.getRangeLimits('weight', 'max')) {
                tmp = this.getRangeLimits('weight', 'max');
            }
            tmp = Math.floor(tmp / 10) * 10;
            this.collar += this.getB576J610(tmp, this.data.size_num);
        }
        if (this.isInputYes('tall') && !this.isInputYes('weight')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.collar += this.getB547J571(tmp, this.data.size_num);
        }
    } {
        this.collar = parseFloat(this.collar);
        this.collar_1 = this.collar_2 = this.collar_3 = this.collar;
        this.collar_1 += this.getCommonB191v2('collar', 1);
        this.collar_1 = this.getRound4(this.collar_1);
        this.collar_2 += this.getCommonB191v2('collar', '0');
        this.collar_2 = this.getRound4(this.collar_2);
        this.collar_3 += this.getCommonB191v2('collar', 0);
        this.collar_3 = this.getRound4(this.collar_3);
        this.collar += this.getCommonB191('collar');
        this.collar = this.getRound4(this.collar);
    }
    if (this.isInputYes('sleeve')) {
        this.sleeve = this.data.sleeve;
    } else {
        this.sleeve = this.getParam(this.data.size, 'sleeve');
        this.sleeve += this.getCommonB75('sleeve');
        this.sleeve += this.getCommonB124('sleeve');
        this.sleeve += this.getCommonB144('sleeve');
        this.sleeve += this.getCommonB182('sleeve');
        this.sleeve += this.getCommonB198('sleeve');
        if (this.isInputYes('tall') && !this.isInputYes('ethnicity')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.sleeve += this.getB473J497(tmp, this.data.size_num);
        }
        if (this.isInputYes('ethnicity') && !this.isInputYes('tall')) {
            this.sleeve += this.getB465J468(this.data.ethnicity, this.data.size_num);
        }
        if (this.isInputYes('tall') && this.isInputYes('ethnicity')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            if (this.data.size_num == 0) {
                this.sleeve += this.getB769F793(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 1) {
                this.sleeve += this.getB798F822(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 2) {
                this.sleeve += this.getB827F851(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 3) {
                this.sleeve += this.getB856F880(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 4) {
                this.sleeve += this.getB885F909(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 5) {
                this.sleeve += this.getB914F938(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 6) {
                this.sleeve += this.getB943F967(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 7) {
                this.sleeve += this.getB972F996(tmp, this.data.ethnicity);
            }
        }
    } {
        this.sleeve = parseFloat(this.sleeve);
        this.sleeve_1 = this.sleeve_2 = this.sleeve_3 = this.sleeve;
        this.sleeve_1 += this.getCommonB191v2('sleeve', 1);
        this.sleeve_1 = this.getRound4(this.sleeve_1);
        this.sleeve_2 += this.getCommonB191v2('sleeve', 0);
        this.sleeve_2 = this.getRound4(this.sleeve_2);
        this.sleeve_3 = 0;
        this.sleeve += this.getCommonB191('sleeve');
        this.sleeve = this.getRound4(this.sleeve);
    }
    this.yoke = this.getParam(this.data.size, 'yoke');
    this.yoke += this.getCommonB45('yoke');
    this.yoke += this.getCommonB75('yoke');
    this.yoke += this.getCommonB115('yoke');
    this.yoke += this.getCommonB124('yoke');
    this.yoke += this.getCommonB144('yoke');
    this.yoke += this.getCommonB182('yoke');
    this.yoke += this.getCommonB198('yoke'); {
        this.yoke = parseFloat(this.yoke);
        this.yoke_1 = this.yoke_2 = this.yoke_3 = this.yoke;
        this.yoke_1 += this.getCommonB191v2('yoke', 1);
        this.yoke_1 = this.getRound4(this.yoke_1);
        this.yoke_2 += this.getCommonB191v2('yoke', 0);
        this.yoke_2 = this.getRound4(this.yoke_2);
        this.yoke_3 += this.getCommonB191v2('yoke', 0);
        this.yoke_3 = this.getRound4(this.yoke_3);
        this.yoke += this.getCommonB191('yoke');
        this.yoke = this.getRound4(this.yoke);
    }
    this.chest = this.getParam(this.data.size, 'chest');
    this.chest += this.getCommonB45('chest');
    if (this.isInputYes('weight')) {
        tmp = this.data.weight;
        if (this.data.weight < this.getRangeLimits('weight', 'min')) {
            tmp = this.getRangeLimits('weight', 'min');
        }
        if (this.data.weight > this.getRangeLimits('weight', 'max')) {
            tmp = this.getRangeLimits('weight', 'max');
        }
        tmp = Math.floor(tmp / 10) * 10;
        this.chest += this.getB318J354(tmp, this.data.size_num);
    } else {
        this.chest += this.getB318J354('skipped', this.data.size_num);
    }
    this.chest += this.getCommonB115('chest');
    this.chest += this.getCommonB124('chest');
    this.chest += this.getCommonB144('chest');
    this.chest += this.getCommonB182('chest');
    this.chest += this.getCommonB198('chest'); {
        this.chest = parseFloat(this.chest);
        this.chest_1 = this.chest_2 = this.chest_3 = this.chest;
        this.chest_1 += this.getCommonB191v2('chest', 1);
        this.chest_1 = this.getRound4(this.chest_1);
        this.chest_2 += this.getCommonB191v2('chest', 0);
        this.chest_2 = this.getRound4(this.chest_2);
        this.chest_3 += this.getCommonB191v2('chest', 0);
        this.chest_3 = this.getRound4(this.chest_3);
        this.chest += this.getCommonB191('chest');
        this.chest = this.getRound4(this.chest);
    }
    this.midsection = this.getParam(this.data.size, 'midsection');
    if (this.isInputYes('tall') && !this.isInputYes('pants_waist') && !this.isInputYes('weight')) {
        tmp = this.data.tall;
        if (this.data.tall < this.getRangeLimits('height', 'min')) {
            tmp = this.getRangeLimits('height', 'min');
        }
        if (this.data.tall > this.getRangeLimits('height', 'max')) {
            tmp = this.getRangeLimits('height', 'max');
        }
        tmp = Math.floor(tmp);
        this.midsection += this.getB45J70(tmp, 'midsection');
    }
    if (this.isInputYes('weight')) {
        tmp = this.data.weight;
        if (this.data.weight < this.getRangeLimits('weight', 'min')) {
            tmp = this.getRangeLimits('weight', 'min');
        }
        if (this.data.weight > this.getRangeLimits('weight', 'max')) {
            tmp = this.getRangeLimits('weight', 'max');
        }
        tmp = Math.floor(tmp / 10) * 10;
        this.midsection += this.getB278J313(tmp, this.data.size_num);
    } else {
        this.midsection += this.getB278J313('skipped', this.data.size_num);
    }
    this.midsection += this.getCommonB115('midsection');
    this.midsection += this.getCommonB124('midsection');
    if (!this.isInputYes('tall') && !this.isInputYes('weight') && this.isInputYes('pants_waist')) {
        this.midsection += this.getCommonB144('midsection');
    }
    this.midsection += this.getB359J363(this.isInputYes('midsection_style') ? this.data.midsection_style : 'skipped', this.data.size_num);
    this.midsection += this.getB368J371(this.isInputYes('shirt_type') ? this.data.shirt_type : 'skipped', this.data.size_num);
    if (this.isInputYes('pants_waist') && this.isInputYes('midsection_style')) {
        tmp = this.data.pants_waist;
        if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
            tmp = this.getRangeLimits('pants_waist', 'min');
        }
        if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
            tmp = this.getRangeLimits('pants_waist', 'max');
        }
        tmp = Math.floor(tmp);
        this.midsection += this.getB209F241(tmp, this.data.midsection_style);
    }
    if (this.isInputYes('tall') && this.isInputYes('pants_waist')) {
        tmp = this.data.pants_waist;
        if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
            tmp = this.getRangeLimits('pants_waist', 'min');
        }
        if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
            tmp = this.getRangeLimits('pants_waist', 'max');
        }
        tmp = Math.floor(tmp);
        tmp2 = this.data.tall;
        if (this.data.tall < this.getRangeLimits('height', 'min')) {
            tmp2 = this.getRangeLimits('height', 'min');
        }
        if (this.data.tall > this.getRangeLimits('height', 'max')) {
            tmp2 = this.getRangeLimits('height', 'max');
        }
        tmp2 = Math.floor(tmp2);
        this.midsection += this.getB654AA686(tmp, tmp2);
    }
    if (this.isInputYes('weight') && this.isInputYes('tall')) {
        tmp = this.data.weight;
        if (this.data.weight < this.getRangeLimits('weight', 'min')) {
            tmp = this.getRangeLimits('weight', 'min');
        }
        if (this.data.weight > this.getRangeLimits('weight', 'max')) {
            tmp = this.getRangeLimits('weight', 'max');
        }
        tmp = Math.floor(tmp / 10) * 10;
        tmp2 = this.data.tall;
        if (this.data.tall < this.getRangeLimits('height', 'min')) {
            tmp2 = this.getRangeLimits('height', 'min');
        }
        if (this.data.tall > this.getRangeLimits('height', 'max')) {
            tmp2 = this.getRangeLimits('height', 'max');
        }
        tmp2 = Math.floor(tmp2);
        this.midsection += this.getB691AA725(tmp, tmp2);
    }
    if (this.isInputYes('weight') && this.isInputYes('pants_waist')) {
        tmp = this.data.weight;
        if (this.data.weight < this.getRangeLimits('weight', 'min')) {
            tmp = this.getRangeLimits('weight', 'min');
        }
        if (this.data.weight > this.getRangeLimits('weight', 'max')) {
            tmp = this.getRangeLimits('weight', 'max');
        }
        tmp = Math.floor(tmp / 10) * 10;
        tmp2 = this.data.pants_waist;
        if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
            tmp2 = this.getRangeLimits('pants_waist', 'min');
        }
        if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
            tmp2 = this.getRangeLimits('pants_waist', 'max');
        }
        tmp2 = Math.floor(tmp2);
        this.midsection += this.getB730AI764(tmp, tmp2);
    } {
        this.midsection = parseFloat(this.midsection);
        this.midsection_1 = this.midsection_2 = this.midsection_3 = this.midsection;
        this.midsection_1 += this.getCommonB191v2('midsection', 1);
        if (this.isInputYes('tall')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.midsection_1 += this.getB376J401(tmp, 1);
        }
        this.midsection_1 = this.getRound4(this.midsection_1);
        this.midsection_2 += this.getCommonB191v2('midsection', 0);
        if (this.isInputYes('tall')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.midsection_2 += this.getB376J401(tmp, 0);
        }
        this.midsection_2 = this.getRound4(this.midsection_2);
        this.midsection_3 += this.getCommonB191v2('midsection', 0);
        if (this.isInputYes('tall')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.midsection_3 += this.getB376J401(tmp, 0);
        }
        this.midsection_3 = this.getRound4(this.midsection_3);
        this.midsection += this.getB191J194(this.isInputYes('tucked') ? this.data.tucked : 'skipped', 'midsection');
        if (this.isInputYes('tall') && this.isInputYes('tucked')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.midsection += this.getB376J401(tmp, this.data.tucked);
        }
        this.midsection = this.getRound4(this.midsection);
    }
    this.length = this.getParam(this.data.size, 'length');
    if (this.isInputYes('tall')) {
        tmp = this.data.tall;
        if (this.data.tall < this.getRangeLimits('height', 'min')) {
            tmp = this.getRangeLimits('height', 'min');
        }
        if (this.data.tall > this.getRangeLimits('height', 'max')) {
            tmp = this.getRangeLimits('height', 'max');
        }
        tmp = Math.floor(tmp);
        this.length += this.getB406J431(tmp, this.data.size_num);
    } else {
        this.length += this.getB406J431('skipped', this.data.size_num);
    }
    this.length += this.getCommonB75('length');
    this.length += this.getCommonB115('length');
    this.length += this.getCommonB124('length');
    this.length += this.getCommonB144('length');
    this.length += this.getCommonB182('length');
    this.length += this.getCommonB198('length'); {
        this.length = parseFloat(this.length);
        this.length_1 = this.length_2 = this.length_3 = this.length;
        if (!this.isInputYes('tall')) {
            this.length_1 += this.getCommonB191v2('length', 1);
        }
        if (this.isInputYes('tall')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.length_1 += this.getB436E460(tmp, 1);
        }
        this.length_1 = this.getRound4(this.length_1) + 0.25;
        if (!this.isInputYes('tall')) {
            this.length_2 += this.getCommonB191v2('length', 0);
        }
        if (this.isInputYes('tall')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.length_2 += this.getB436E460(tmp, 0);
        }
        this.length_2 = this.getRound4(this.length_2) - 0.25;
        if (!this.isInputYes('tall')) {
            this.length_3 += this.getCommonB191v2('length', 0);
        }
        if (this.isInputYes('tall')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.length_3 += this.getB436E460(tmp, 0);
        }
        this.length_3 = this.getRound4(this.length_3) - 0.5;
        if (!this.isInputYes('tall')) {
            this.length += this.getCommonB191('length');
        }
        this.length = this.getRound4(this.length);
    }
    this.sleeve_width = this.getParam(this.data.size, 'sleeve_width');
    this.sleeve_width += this.getCommonB45('sleeve_width');
    this.sleeve_width += this.getCommonB75('sleeve_width');
    this.sleeve_width += this.getCommonB115('sleeve_width');
    this.sleeve_width += this.getCommonB124('sleeve_width');
    this.sleeve_width += this.getCommonB144('sleeve_width');
    this.sleeve_width += this.getCommonB182('sleeve_width');
    this.sleeve_width += this.getCommonB198('sleeve_width'); {
        this.sleeve_width = parseFloat(this.sleeve_width);
        this.sleeve_width_1 = this.sleeve_width_2 = this.sleeve_width_3 = this.sleeve_width;
        this.sleeve_width_1 += this.getCommonB191v2('sleeve_width', 1);
        this.sleeve_width_1 = this.getRound4(this.sleeve_width_1);
        this.sleeve_width_2 += this.getCommonB191v2('sleeve_width', 0);
        this.sleeve_width_2 = this.getRound4(this.sleeve_width_2);
        this.sleeve_width_3 = 0;
        this.sleeve_width += this.getCommonB191('sleeve_width');
        this.sleeve_width = this.getRound4(this.sleeve_width);
    }
    if (this.isInputYes('sleeve')) {
        this.short_sleeve_length = this.data.sleeve;
    } else {
        this.short_sleeve_length = this.getParam(this.data.size, 'sleeve');
        this.short_sleeve_length += this.getCommonB75('sleeve');
        this.short_sleeve_length += this.getCommonB124('sleeve');
        this.short_sleeve_length += this.getCommonB144('sleeve');
        this.short_sleeve_length += this.getCommonB182('sleeve');
        this.short_sleeve_length += this.getCommonB191v2('sleeve', 0);
        this.short_sleeve_length += this.getCommonB198('sleeve');
        if (this.isInputYes('tall') && !this.isInputYes('ethnicity')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            this.short_sleeve_length += this.getB473J497(tmp, this.data.size_num);
        }
        if (this.isInputYes('ethnicity') && !this.isInputYes('tall')) {
            this.short_sleeve_length += this.getB465J468(this.data.ethnicity, this.data.size_num);
        }
        if (this.isInputYes('tall') && this.isInputYes('ethnicity')) {
            tmp = this.data.tall;
            if (this.data.tall < this.getRangeLimits('height', 'min')) {
                tmp = this.getRangeLimits('height', 'min');
            }
            if (this.data.tall > this.getRangeLimits('height', 'max')) {
                tmp = this.getRangeLimits('height', 'max');
            }
            tmp = Math.floor(tmp);
            if (this.data.size_num == 0) {
                this.short_sleeve_length += this.getB769F793(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 1) {
                this.short_sleeve_length += this.getB798F822(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 2) {
                this.short_sleeve_length += this.getB827F851(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 3) {
                this.short_sleeve_length += this.getB856F880(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 4) {
                this.short_sleeve_length += this.getB885F909(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 5) {
                this.short_sleeve_length += this.getB914F938(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 6) {
                this.short_sleeve_length += this.getB943F967(tmp, this.data.ethnicity);
            }
            if (this.data.size_num == 7) {
                this.short_sleeve_length += this.getB972F996(tmp, this.data.ethnicity);
            }
        }
    }
    this.short_sleeve_length = this.getRound4(this.short_sleeve_length);
    this.short_sleeve_length = (this.short_sleeve_length - 0.5 * this.yoke_2) * 0.3;
    this.short_sleeve_length = this.getRound4(this.short_sleeve_length);
    this.short_sleeve_length = parseFloat(this.short_sleeve_length); {
        this.short_sleeve_length_1 = 0;
        this.short_sleeve_length_2 = 0;
        this.short_sleeve_length_3 = this.short_sleeve_length;
    }
    this.short_sleeve_width = this.getParam(this.data.size, 'sleeve_width');
    this.short_sleeve_width += this.getCommonB45('sleeve_width');
    this.short_sleeve_width += this.getCommonB75('sleeve_width');
    this.short_sleeve_width += this.getCommonB115('sleeve_width');
    this.short_sleeve_width += this.getCommonB124('sleeve_width');
    this.short_sleeve_width += this.getCommonB144('sleeve_width');
    this.short_sleeve_width += this.getCommonB182('sleeve_width');
    this.short_sleeve_width += this.getCommonB191v2('sleeve_width', 0);
    this.short_sleeve_width += this.getCommonB198('sleeve_width');
    this.short_sleeve_width = this.getRound4(this.short_sleeve_width) - 0.25;
    this.short_sleeve_width_1 = 0;
    this.short_sleeve_width_2 = 0;
    this.short_sleeve_width_3 = this.short_sleeve_width;
    this.short_sleeve_opening_width = this.getParam(this.data.size, 'sleeve_width');
    this.short_sleeve_opening_width += this.getCommonB45('sleeve_width');
    this.short_sleeve_opening_width += this.getCommonB75('sleeve_width');
    this.short_sleeve_opening_width += this.getCommonB115('sleeve_width');
    this.short_sleeve_opening_width += this.getCommonB124('sleeve_width');
    this.short_sleeve_opening_width += this.getCommonB144('sleeve_width');
    this.short_sleeve_opening_width += this.getCommonB182('sleeve_width');
    this.short_sleeve_opening_width += this.getCommonB191v2('sleeve_width', 0);
    this.short_sleeve_opening_width += this.getCommonB198('sleeve_width');
    this.short_sleeve_opening_width = this.getRound4(this.short_sleeve_opening_width) - 1;
    this.short_sleeve_opening_width_1 = 0;
    this.short_sleeve_opening_width_2 = 0;
    this.short_sleeve_opening_width_3 = this.short_sleeve_opening_width;
    this.cuff = this.getParam(this.data.size, 'cuff');
    this.cuff += this.getCommonB45('cuff');
    this.cuff += this.getCommonB75('cuff');
    this.cuff += this.getCommonB115('cuff');
    this.cuff += this.getCommonB124('cuff');
    this.cuff += this.getCommonB144('cuff');
    this.cuff += this.getCommonB182('cuff');
    this.cuff += this.getCommonB198('cuff'); {
        this.cuff = parseFloat(this.cuff);
        this.cuff_1 = this.cuff_2 = this.cuff_3 = this.cuff;
        this.cuff_1 += this.getCommonB191v2('cuff', 1);
        this.cuff_1 = this.getRound4(this.cuff_1);
        this.cuff_2 += this.getCommonB191v2('cuff', 0);
        this.cuff_2 = this.getRound4(this.cuff_2);
        this.cuff_3 = 0;
        this.cuff += this.getCommonB191('cuff');
        this.cuff = this.getRound4(this.cuff);
    }
    if (this.isInputYes('shirt_type')) {
        this.armpit = this.data.shirt_type == 0 ? 'full' : 'tailored';
    } else {
        this.armpit = this.getParam(this.data.size, 'armpit_fit');
    }
    this.armpit_1 = this.armpit;
    this.armpit_2 = this.armpit;
    this.armpit_3 = this.armpit;
    this.forearm = this.getParam(this.data.size, 'forearm');
    if (this.isInputYes('shirt_type')) {
        if (this.data.shirt_type == 0) {
            this.forearm = 'traditional';
        }
    }
    this.forearm_1 = this.forearm;
    this.forearm_2 = this.forearm;
    this.forearm_3 = this.forearm;
}
SmartSize.prototype.getRound4 = function (param) {
    return parseFloat(excelRound(4 * param) / 4);
}
SmartSize.prototype.getParam = function (size, param) {
    var info = {
        'xxs': {
            'collar': 0,
            'sleeve': 0,
            'yoke': 0,
            'chest': 0,
            'midsection': 0,
            'length': 0,
            'sleeve_width': 0,
            'cuff': 0,
            'armpit_fit': 'tailored',
            'forearm': 'slim'
        },
        'xs': {
            'collar': 15.59764684,
            'sleeve': 31.66639073,
            'yoke': 17.46900571,
            'chest': 19.61258278,
            'midsection': 17.02453183,
            'length': 28.65148228,
            'sleeve_width': 8.26263194,
            'cuff': 8.675436416,
            'armpit_fit': 'tailored',
            'forearm': 'slim'
        },
        's': {
            'collar': 15.85716331,
            'sleeve': 32.51060379,
            'yoke': 17.89478751,
            'chest': 20.77095808,
            'midsection': 18.03058684,
            'length': 29.5024856,
            'sleeve_width': 8.485149543,
            'cuff': 8.841064731,
            'armpit_fit': 'tailored',
            'forearm': 'traditional'
        },
        'm': {
            'collar': 16.20889484,
            'sleeve': 33.45128115,
            'yoke': 18.4049593,
            'chest': 22.21111829,
            'midsection': 19.49384715,
            'length': 30.42786292,
            'sleeve_width': 8.828232902,
            'cuff': 9.008726327,
            'armpit_fit': 'tailored',
            'forearm': 'traditional'
        },
        'l': {
            'collar': 16.62923671,
            'sleeve': 34.35907355,
            'yoke': 19.05472335,
            'chest': 23.8743173,
            'midsection': 21.40407419,
            'length': 31.45168482,
            'sleeve_width': 9.207538206,
            'cuff': 9.202251382,
            'armpit_fit': 'tailored',
            'forearm': 'traditional'
        },
        'xl': {
            'collar': 17.26363679,
            'sleeve': 34.99151932,
            'yoke': 19.74504114,
            'chest': 26.18899804,
            'midsection': 24.1645968,
            'length': 32.55441095,
            'sleeve_width': 9.746610366,
            'cuff': 9.523957679,
            'armpit_fit': 'full',
            'forearm': 'traditional'
        },
        'xxl': {
            'collar': 18.16113037,
            'sleeve': 35.64796634,
            'yoke': 20.63861563,
            'chest': 29.27194951,
            'midsection': 27.99936973,
            'length': 33.94990054,
            'sleeve_width': 10.393491,
            'cuff': 9.85528771,
            'armpit_fit': 'full',
            'forearm': 'traditional'
        },
        '3xl': {
            'collar': 18.16113037,
            'sleeve': 35.64796634,
            'yoke': 20.63861563,
            'chest': 29.27194951,
            'midsection': 27.99936973,
            'length': 33.94990054,
            'sleeve_width': 10.393491,
            'cuff': 9.85528771,
            'armpit_fit': 'full',
            'forearm': 'traditional'
        },
        '4xl': {
            'collar': 18.16113037,
            'sleeve': 35.64796634,
            'yoke': 20.63861563,
            'chest': 29.27194951,
            'midsection': 27.99936973,
            'length': 33.94990054,
            'sleeve_width': 10.393491,
            'cuff': 9.85528771,
            'armpit_fit': 'full',
            'forearm': 'traditional'
        },
        '5xl': {
            'collar': 18.16113037,
            'sleeve': 35.64796634,
            'yoke': 20.63861563,
            'chest': 29.27194951,
            'midsection': 27.99936973,
            'length': 33.94990054,
            'sleeve_width': 10.393491,
            'cuff': 9.85528771,
            'armpit_fit': 'full',
            'forearm': 'traditional'
        },
        '6xl': {
            'collar': 18.16113037,
            'sleeve': 35.64796634,
            'yoke': 20.63861563,
            'chest': 29.27194951,
            'midsection': 27.99936973,
            'length': 33.94990054,
            'sleeve_width': 10.393491,
            'cuff': 9.85528771,
            'armpit_fit': 'full',
            'forearm': 'traditional'
        }
    }
    return info[size][param];
}
SmartSize.prototype.getRangeLimits = function (param, lim) {
    var info = {
        height: {
            min: 60,
            max: 84
        },
        weight: {
            min: 100,
            max: 440
        },
        suit: {
            min: 32,
            max: 60
        },
        pants_waist: {
            min: 26,
            max: 58
        }
    }
    return info[param][lim];
}
SmartSize.prototype.getCommonB45 = function (param) {
    if (this.isInputYes('tall')) {
        tmp = this.data.tall;
        if (this.data.tall < this.getRangeLimits('height', 'min')) {
            tmp = this.getRangeLimits('height', 'min');
        }
        if (this.data.tall > this.getRangeLimits('height', 'max')) {
            tmp = this.getRangeLimits('height', 'max');
        }
        tmp = Math.floor(tmp);
        return this.getB45J70(tmp, param);
    } else {
        return this.getB45J70('skipped', param);
    }
}
SmartSize.prototype.getCommonB75 = function (param) {
    if (this.isInputYes('weight')) {
        tmp = this.data.weight;
        if (this.data.weight < this.getRangeLimits('weight', 'min')) {
            tmp = this.getRangeLimits('weight', 'min');
        }
        if (this.data.weight > this.getRangeLimits('weight', 'max')) {
            tmp = this.getRangeLimits('weight', 'max');
        }
        tmp = Math.floor(tmp / 10) * 10;
        return this.getB75J110(tmp, param);
    } else {
        return this.getB75J110('skipped', param);
    }
}
SmartSize.prototype.getCommonB115 = function (param) {
    return this.getB115J119(this.isInputYes('ethnicity') ? this.data.ethnicity : 'skipped', param);
}
SmartSize.prototype.getCommonB124 = function (param) {
    if (this.isInputYes('suit')) {
        tmp = this.data.suit;
        if (this.data.suit < this.getRangeLimits('suit', 'min')) {
            tmp = this.getRangeLimits('suit', 'min');
        }
        if (this.data.suit > this.getRangeLimits('suit', 'max')) {
            tmp = this.getRangeLimits('suit', 'max');
        }
        tmp = Math.floor(tmp % 2 ? tmp - 1 : tmp);
        return this.getB124J139(tmp, param);
    } else {
        return this.getB124J139('skipped', param);
    }
}
SmartSize.prototype.getCommonB144 = function (param) {
    if (this.isInputYes('pants_waist')) {
        tmp = this.data.pants_waist;
        if (this.data.pants_waist < this.getRangeLimits('pants_waist', 'min')) {
            tmp = this.getRangeLimits('pants_waist', 'min');
        }
        if (this.data.pants_waist > this.getRangeLimits('pants_waist', 'max')) {
            tmp = this.getRangeLimits('pants_waist', 'max');
        }
        tmp = Math.floor(tmp);
        return this.getB144J177(tmp, param);
    } else {
        return this.getB144J177('skipped', param);
    }
}
SmartSize.prototype.getCommonB182 = function (param) {
    return this.getB182J186(this.isInputYes('midsection_style') ? this.data.midsection_style : 'skipped', param);
}
SmartSize.prototype.getCommonB191 = function (param) {
    return this.getB191J194(this.isInputYes('tucked') ? this.data.tucked : 'skipped', param);
}
SmartSize.prototype.getCommonB191v2 = function (param, param2) {
    return this.getB191J194(param2, param);
}
SmartSize.prototype.getCommonB198 = function (param) {
    return this.getB198J202(this.isInputYes('shirt_type') ? this.data.shirt_type : 'skipped', param);
}
SmartSize.prototype.getB45J70 = function (val, param) {
    var info = {
        "skipped": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.006620521",
            "chest": "0.130775866",
            "midsection": "12.70958956",
            "length": "0",
            "sleeve_width": "0.028446682",
            "cuff": "-0.006829928"
        },
        "60": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.867473283",
            "chest": "0.88996597",
            "midsection": "-0.242132729",
            "length": "0",
            "sleeve_width": "0.361766381",
            "cuff": "0.101401128"
        },
        "61": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.288332857",
            "chest": "0.489295301",
            "midsection": "-0.242132729",
            "length": "0",
            "sleeve_width": "0.252607477",
            "cuff": "0.036377538"
        },
        "62": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.226654974",
            "chest": "0.327743294",
            "midsection": "-0.242132729",
            "length": "0",
            "sleeve_width": "0.080579712",
            "cuff": "0.006380006"
        },
        "63": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.108868771",
            "chest": "0.455881791",
            "midsection": "-0.242132729",
            "length": "0",
            "sleeve_width": "0.21647492",
            "cuff": "0.011282279"
        },
        "64": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.030674368",
            "chest": "0.425719334",
            "midsection": "-0.242132729",
            "length": "0",
            "sleeve_width": "0.119977629",
            "cuff": "0.021506775"
        },
        "65": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.089250708",
            "chest": "0.312163817",
            "midsection": "-0.242132729",
            "length": "0",
            "sleeve_width": "0.130717789",
            "cuff": "0.025119684"
        },
        "66": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.070697962",
            "chest": "0.278187471",
            "midsection": "-0.242132729",
            "length": "0",
            "sleeve_width": "0.09244266",
            "cuff": "0.048412552"
        },
        "67": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.085468054",
            "chest": "0.226397083",
            "midsection": "0.10287683",
            "length": "0",
            "sleeve_width": "0.092147545",
            "cuff": "0.030799688"
        },
        "68": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.045757049",
            "chest": "0.192542566",
            "midsection": "-0.115097518",
            "length": "0",
            "sleeve_width": "0.062779877",
            "cuff": "0.027100262"
        },
        "69": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.03872976",
            "chest": "0.136424486",
            "midsection": "-0.240809408",
            "length": "0",
            "sleeve_width": "0.054036159",
            "cuff": "0.018624541"
        },
        "70": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.028365523",
            "chest": "0.077188832",
            "midsection": "-0.203032033",
            "length": "0",
            "sleeve_width": "0.023225634",
            "cuff": "0.015403841"
        },
        "71": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.005767015",
            "chest": "-0.00980628",
            "midsection": "0.737643021",
            "length": "0",
            "sleeve_width": "0.004169497",
            "cuff": "0.00604445"
        },
        "72": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.006457573",
            "chest": "-0.050570576",
            "midsection": "0.944029516",
            "length": "0",
            "sleeve_width": "-0.014686443",
            "cuff": "0.001944777"
        },
        "73": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.056852274",
            "chest": "-0.125956871",
            "midsection": "0.939925673",
            "length": "0",
            "sleeve_width": "-0.045529695",
            "cuff": "-0.015282656"
        },
        "74": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.062293884",
            "chest": "-0.186239967",
            "midsection": "0.691532812",
            "length": "0",
            "sleeve_width": "-0.073116439",
            "cuff": "-0.028310856"
        },
        "75": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.074204021",
            "chest": "-0.27470624",
            "midsection": "0.479043571",
            "length": "0",
            "sleeve_width": "-0.106904335",
            "cuff": "-0.056063425"
        },
        "76": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.102261874",
            "chest": "-0.406354782",
            "midsection": "0.27967938",
            "length": "0",
            "sleeve_width": "-0.080426852",
            "cuff": "-0.052099513"
        },
        "77": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.080016704",
            "chest": "-0.461736657",
            "midsection": "-0.467689211",
            "length": "0",
            "sleeve_width": "-0.248990304",
            "cuff": "-0.092673872"
        },
        "78": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.237155553",
            "chest": "-0.541113608",
            "midsection": "-0.011149022",
            "length": "0",
            "sleeve_width": "-0.251631936",
            "cuff": "-0.13053778"
        },
        "79": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.076338477",
            "chest": "-0.466819229",
            "midsection": "-0.011149022",
            "length": "0",
            "sleeve_width": "-0.216308082",
            "cuff": "-0.079363784"
        },
        "80": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.013435354",
            "chest": "-0.484829355",
            "midsection": "0.326717911",
            "length": "0",
            "sleeve_width": "-0.16554756",
            "cuff": "-0.024369675"
        },
        "81": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.151749402",
            "chest": "-0.722008861",
            "midsection": "0.664584844",
            "length": "0",
            "sleeve_width": "-0.509620524",
            "cuff": "-0.085342114"
        },
        "82": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "0.049566411",
            "chest": "-0.34706195",
            "midsection": "0.664584844",
            "length": "0",
            "sleeve_width": "-0.411127073",
            "cuff": "-0.097124917"
        },
        "83": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.130292205",
            "chest": "-0.29161772",
            "midsection": "0.664584844",
            "length": "0",
            "sleeve_width": "-0.280459669",
            "cuff": "-0.10579089"
        },
        "84": {
            "collar": "0",
            "sleeve": "0",
            "yoke": "-0.279970422",
            "chest": "-0.350136297",
            "midsection": "0.664584844",
            "length": "0",
            "sleeve_width": "-0.548447592",
            "cuff": "-0.199819683"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB75J110 = function (val, param) {
    var info = {
        "skipped": {
            "collar": "0",
            "sleeve": "0.100327153",
            "yoke": "0.1675",
            "chest": "0",
            "midsection": "0",
            "length": "-0.032563527",
            "sleeve_width": "0.03284498",
            "cuff": "0.003581078"
        },
        "100": {
            "collar": "0",
            "sleeve": "-0.98390805",
            "yoke": "-1.196151773",
            "chest": "0",
            "midsection": "0",
            "length": "0.393858328",
            "sleeve_width": "-0.788175305",
            "cuff": "-0.612224581"
        },
        "110": {
            "collar": "0",
            "sleeve": "-0.554155989",
            "yoke": "-1.102993726",
            "chest": "0",
            "midsection": "0",
            "length": "0.039651839",
            "sleeve_width": "-0.702858206",
            "cuff": "-0.617842614"
        },
        "120": {
            "collar": "0",
            "sleeve": "-0.693261739",
            "yoke": "-0.98759841",
            "chest": "0",
            "midsection": "0",
            "length": "-0.456631888",
            "sleeve_width": "-0.633939839",
            "cuff": "-0.56213978"
        },
        "130": {
            "collar": "0",
            "sleeve": "-0.577366873",
            "yoke": "-0.702244134",
            "chest": "0",
            "midsection": "0",
            "length": "-0.451011617",
            "sleeve_width": "-0.477545852",
            "cuff": "-0.381647841"
        },
        "140": {
            "collar": "0",
            "sleeve": "-0.530319323",
            "yoke": "-0.56572844",
            "chest": "0",
            "midsection": "0",
            "length": "-0.37532836",
            "sleeve_width": "-0.367378555",
            "cuff": "-0.322051019"
        },
        "150": {
            "collar": "0",
            "sleeve": "-0.432326667",
            "yoke": "-0.418648809",
            "chest": "0",
            "midsection": "0",
            "length": "-0.300612063",
            "sleeve_width": "-0.273122474",
            "cuff": "-0.262609959"
        },
        "160": {
            "collar": "0",
            "sleeve": "-0.377316164",
            "yoke": "-0.330675982",
            "chest": "0",
            "midsection": "0",
            "length": "-0.269791651",
            "sleeve_width": "-0.223333722",
            "cuff": "-0.173129792"
        },
        "170": {
            "collar": "0",
            "sleeve": "-0.262011776",
            "yoke": "-0.209416989",
            "chest": "0",
            "midsection": "0",
            "length": "-0.232147164",
            "sleeve_width": "-0.18400502",
            "cuff": "-0.085909782"
        },
        "180": {
            "collar": "0",
            "sleeve": "-0.14891902",
            "yoke": "-0.111618012",
            "chest": "0",
            "midsection": "0",
            "length": "-0.134976316",
            "sleeve_width": "-0.136084346",
            "cuff": "-0.040822249"
        },
        "190": {
            "collar": "0",
            "sleeve": "-0.048527797",
            "yoke": "-0.025230339",
            "chest": "0",
            "midsection": "0",
            "length": "-0.045068485",
            "sleeve_width": "0.024574031",
            "cuff": "0.001659103"
        },
        "200": {
            "collar": "0",
            "sleeve": "0.051613163",
            "yoke": "0.081962847",
            "chest": "0",
            "midsection": "0",
            "length": "0.016198134",
            "sleeve_width": "0.0696149",
            "cuff": "0.038153078"
        },
        "210": {
            "collar": "0",
            "sleeve": "0.132362254",
            "yoke": "0.196062979",
            "chest": "0",
            "midsection": "0",
            "length": "0.068444105",
            "sleeve_width": "0.152303573",
            "cuff": "0.10210745"
        },
        "220": {
            "collar": "0",
            "sleeve": "0.308199113",
            "yoke": "0.260676951",
            "chest": "0",
            "midsection": "0",
            "length": "0.190749944",
            "sleeve_width": "0.184626819",
            "cuff": "0.142839714"
        },
        "230": {
            "collar": "0",
            "sleeve": "0.336501519",
            "yoke": "0.329444875",
            "chest": "0",
            "midsection": "0",
            "length": "0.300343396",
            "sleeve_width": "0.219819686",
            "cuff": "0.162428382"
        },
        "240": {
            "collar": "0",
            "sleeve": "0.420779767",
            "yoke": "0.338736828",
            "chest": "0",
            "midsection": "0",
            "length": "0.332195651",
            "sleeve_width": "0.214383749",
            "cuff": "0.170659086"
        },
        "250": {
            "collar": "0",
            "sleeve": "0.548773825",
            "yoke": "0.448690004",
            "chest": "0",
            "midsection": "0",
            "length": "0.439142858",
            "sleeve_width": "0.299114142",
            "cuff": "0.207572636"
        },
        "260": {
            "collar": "0",
            "sleeve": "0.692565909",
            "yoke": "0.453471661",
            "chest": "0",
            "midsection": "0",
            "length": "0.595369612",
            "sleeve_width": "0.351677713",
            "cuff": "0.23790581"
        },
        "270": {
            "collar": "0",
            "sleeve": "0.703180924",
            "yoke": "0.511337636",
            "chest": "0",
            "midsection": "0",
            "length": "0.601947764",
            "sleeve_width": "0.437088365",
            "cuff": "0.28125634"
        },
        "280": {
            "collar": "0",
            "sleeve": "0.870728976",
            "yoke": "0.650844416",
            "chest": "0",
            "midsection": "0",
            "length": "0.783856066",
            "sleeve_width": "0.503249114",
            "cuff": "0.329684739"
        },
        "290": {
            "collar": "0",
            "sleeve": "0.938193546",
            "yoke": "0.644842132",
            "chest": "0",
            "midsection": "0",
            "length": "0.571124592",
            "sleeve_width": "0.53214733",
            "cuff": "0.324202321"
        },
        "300": {
            "collar": "0",
            "sleeve": "1.009391246",
            "yoke": "0.89029195",
            "chest": "0",
            "midsection": "0",
            "length": "1.024346218",
            "sleeve_width": "0.609455653",
            "cuff": "0.381253795"
        },
        "310": {
            "collar": "0",
            "sleeve": "1.126400471",
            "yoke": "0.855283301",
            "chest": "0",
            "midsection": "0",
            "length": "1.01050241",
            "sleeve_width": "0.541716161",
            "cuff": "0.431566002"
        },
        "320": {
            "collar": "0",
            "sleeve": "1.186451199",
            "yoke": "0.871697605",
            "chest": "0",
            "midsection": "0",
            "length": "1.228926553",
            "sleeve_width": "0.694614648",
            "cuff": "0.460417328"
        },
        "330": {
            "collar": "0",
            "sleeve": "1.197613079",
            "yoke": "1.00181101",
            "chest": "0",
            "midsection": "0",
            "length": "1.162980498",
            "sleeve_width": "0.764008971",
            "cuff": "0.498215725"
        },
        "340": {
            "collar": "0",
            "sleeve": "1.781349582",
            "yoke": "1.221059393",
            "chest": "0",
            "midsection": "0",
            "length": "1.452456712",
            "sleeve_width": "0.976483393",
            "cuff": "0.670016206"
        },
        "350": {
            "collar": "0",
            "sleeve": "1.227114017",
            "yoke": "1.185392109",
            "chest": "0",
            "midsection": "0",
            "length": "1.537720876",
            "sleeve_width": "1.017977851",
            "cuff": "0.509046713"
        },
        "360": {
            "collar": "0",
            "sleeve": "1.602896687",
            "yoke": "1.144420833",
            "chest": "0",
            "midsection": "0",
            "length": "2.070216968",
            "sleeve_width": "1.043196199",
            "cuff": "0.648111179"
        },
        "370": {
            "collar": "0",
            "sleeve": "1.432584136",
            "yoke": "2.135310127",
            "chest": "0",
            "midsection": "0",
            "length": "2.03246844",
            "sleeve_width": "1.463275277",
            "cuff": "0.867979313"
        },
        "380": {
            "collar": "0",
            "sleeve": "1.838892521",
            "yoke": "1.568867414",
            "chest": "0",
            "midsection": "0",
            "length": "1.984457728",
            "sleeve_width": "1.381125943",
            "cuff": "0.70890182"
        },
        "390": {
            "collar": "0",
            "sleeve": "1.061956839",
            "yoke": "1.847593822",
            "chest": "0",
            "midsection": "0",
            "length": "2.383193207",
            "sleeve_width": "1.26737231",
            "cuff": "0.525502127"
        },
        "400": {
            "collar": "0",
            "sleeve": "1.431560574",
            "yoke": "2.698220006",
            "chest": "0",
            "midsection": "0",
            "length": "2.642623566",
            "sleeve_width": "1.586927918",
            "cuff": "1.085114497"
        },
        "410": {
            "collar": "0",
            "sleeve": "1.487343138",
            "yoke": "2.592723771",
            "chest": "0",
            "midsection": "0",
            "length": "2.796994461",
            "sleeve_width": "1.633847406",
            "cuff": "0.983208679"
        },
        "420": {
            "collar": "0",
            "sleeve": "2.45931105",
            "yoke": "2.373324657",
            "chest": "0",
            "midsection": "0",
            "length": "3.265368615",
            "sleeve_width": "1.656134748",
            "cuff": "0.82239363"
        },
        "430": {
            "collar": "0",
            "sleeve": "2.866215323",
            "yoke": "3.058704764",
            "chest": "0",
            "midsection": "0",
            "length": "2.935106612",
            "sleeve_width": "2.457301533",
            "cuff": "1.51765261"
        },
        "440": {
            "collar": "0",
            "sleeve": "2.937270057",
            "yoke": "3.063261129",
            "chest": "0",
            "midsection": "0",
            "length": "3.003956567",
            "sleeve_width": "2.524898447",
            "cuff": "1.62611701"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB115J119 = function (ethnicity, param) {
    if (ethnicity == 1)
        ethnicity = 'asian';
    else if (ethnicity == 2)
        ethnicity = 'black';
    else if (ethnicity == 3)
        ethnicity = 'white';
    else if (ethnicity == 4)
        ethnicity = 'hispanic';
    var info = {
        "skipped": {
            "collar": "-0.03103919",
            "sleeve": "0",
            "yoke": "-0.04550484",
            "chest": "-0.078953995",
            "midsection": "-0.089498543",
            "length": "-0.016423823",
            "sleeve_width": "-0.061164694",
            "cuff": "-0.01718195"
        },
        "asian": {
            "collar": "0.018471591",
            "sleeve": "0",
            "yoke": "-0.04248708",
            "chest": "-0.313513716",
            "midsection": "-0.428079111",
            "length": "-0.067333625",
            "sleeve_width": "-0.089812879",
            "cuff": "-0.056336642"
        },
        "black": {
            "collar": "-0.084379382",
            "sleeve": "0",
            "yoke": "0.029169522",
            "chest": "-0.281600911",
            "midsection": "-0.325752979",
            "length": "0.095358762",
            "sleeve_width": "0.007033117",
            "cuff": "-0.037581419"
        },
        "white": {
            "collar": "-0.000362248",
            "sleeve": "0",
            "yoke": "0.003198502",
            "chest": "0.031596554",
            "midsection": "0.041970611",
            "length": "0.002725142",
            "sleeve_width": "0.009398986",
            "cuff": "0.007330415"
        },
        "hispanic": {
            "collar": "0.063866174",
            "sleeve": "0",
            "yoke": "0.004024216",
            "chest": "0.008614671",
            "midsection": "-0.021396981",
            "length": "-0.004305842",
            "sleeve_width": "-0.052122113",
            "cuff": "-0.057094636"
        }
    }
    return parseFloat(info[ethnicity][param]);
}
SmartSize.prototype.getB124J139 = function (val, param) {
    var info = {
        "skipped": {
            "collar": "0.027714261",
            "sleeve": "0.059501958",
            "yoke": "-0.030126607",
            "chest": "-0.040295923",
            "midsection": "-0.013765125",
            "length": "-0.034057612",
            "sleeve_width": "-0.033661546",
            "cuff": "-0.009819591"
        },
        "32": {
            "collar": "-0.306466857",
            "sleeve": "0.011240751",
            "yoke": "-0.571664103",
            "chest": "-0.550333758",
            "midsection": "-0.526037172",
            "length": "-0.655344188",
            "sleeve_width": "-0.253033891",
            "cuff": "-0.171094913"
        },
        "34": {
            "collar": "-0.305754395",
            "sleeve": "-0.20878844",
            "yoke": "-0.390768134",
            "chest": "-0.553331918",
            "midsection": "-0.369494818",
            "length": "-0.008883228",
            "sleeve_width": "-0.17668268",
            "cuff": "-0.079252819"
        },
        "36": {
            "collar": "-0.281500168",
            "sleeve": "-0.276773048",
            "yoke": "-0.259387715",
            "chest": "-0.324410465",
            "midsection": "-0.305844626",
            "length": "-0.035312057",
            "sleeve_width": "-0.160299174",
            "cuff": "-0.073766829"
        },
        "38": {
            "collar": "-0.228274126",
            "sleeve": "-0.228359871",
            "yoke": "-0.152547805",
            "chest": "-0.246114",
            "midsection": "-0.213685145",
            "length": "-0.03429761",
            "sleeve_width": "-0.112710176",
            "cuff": "-0.054606232"
        },
        "40": {
            "collar": "-0.154750476",
            "sleeve": "-0.147188824",
            "yoke": "-0.069132437",
            "chest": "-0.110652488",
            "midsection": "-0.10052307",
            "length": "-0.020574579",
            "sleeve_width": "-0.049518952",
            "cuff": "-0.022527714"
        },
        "42": {
            "collar": "-0.059170739",
            "sleeve": "-0.037923924",
            "yoke": "-0.000437253",
            "chest": "0.002728336",
            "midsection": "-0.012894262",
            "length": "-0.007223287",
            "sleeve_width": "0.002309987",
            "cuff": "0.000556982"
        },
        "44": {
            "collar": "0.045000999",
            "sleeve": "0.054120167",
            "yoke": "0.042495557",
            "chest": "0.076356589",
            "midsection": "0.054325703",
            "length": "0.005458855",
            "sleeve_width": "0.033078197",
            "cuff": "0.017205436"
        },
        "46": {
            "collar": "0.140144503",
            "sleeve": "0.128002251",
            "yoke": "0.110987018",
            "chest": "0.145923976",
            "midsection": "0.11029629",
            "length": "0.034179386",
            "sleeve_width": "0.089384487",
            "cuff": "0.044469247"
        },
        "48": {
            "collar": "0.21569067",
            "sleeve": "0.179464667",
            "yoke": "0.133589166",
            "chest": "0.189727565",
            "midsection": "0.149844975",
            "length": "0.041744738",
            "sleeve_width": "0.096036119",
            "cuff": "0.047171668"
        },
        "50": {
            "collar": "0.347311575",
            "sleeve": "0.261917432",
            "yoke": "0.192837322",
            "chest": "0.260631528",
            "midsection": "0.272198006",
            "length": "0.035970891",
            "sleeve_width": "0.122803833",
            "cuff": "0.043699622"
        },
        "52": {
            "collar": "0.458398435",
            "sleeve": "0.382923504",
            "yoke": "0.213886909",
            "chest": "0.261788925",
            "midsection": "0.252007996",
            "length": "0.023223825",
            "sleeve_width": "0.161305945",
            "cuff": "0.067047498"
        },
        "54": {
            "collar": "0.55341379",
            "sleeve": "0.362879184",
            "yoke": "0.274057262",
            "chest": "0.380056397",
            "midsection": "0.352773451",
            "length": "0.217565015",
            "sleeve_width": "0.171715848",
            "cuff": "0.060407878"
        },
        "56": {
            "collar": "0.449398114",
            "sleeve": "0.482209873",
            "yoke": "0.234058055",
            "chest": "0.473359878",
            "midsection": "0.549198613",
            "length": "0.505828966",
            "sleeve_width": "0.14979864",
            "cuff": "0.084272321"
        },
        "58": {
            "collar": "0.845802649",
            "sleeve": "0.668506162",
            "yoke": "0.437856244",
            "chest": "0.726050474",
            "midsection": "0.446447717",
            "length": "0.186751833",
            "sleeve_width": "0.202179713",
            "cuff": "0.049748914"
        },
        "60": {
            "collar": "1.505237553",
            "sleeve": "0.646368909",
            "yoke": "0.56591012",
            "chest": "1.353079391",
            "midsection": "2.418869679",
            "length": "0.412555083",
            "sleeve_width": "0.323136587",
            "cuff": "-0.016143706"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB144J177 = function (val, param) {
    var info = {
        "skipped": {
            "collar": "0",
            "sleeve": "-0.032168213",
            "yoke": "-0.017617012",
            "chest": "0.10485059",
            "midsection": "12.95545245",
            "length": "0.069842504",
            "sleeve_width": "-0.018659015",
            "cuff": "0.0230391"
        },
        "26": {
            "collar": "0",
            "sleeve": "0.523010469",
            "yoke": "0.024651754",
            "chest": "-0.989832001",
            "midsection": "-1.049615333",
            "length": "-0.071802901",
            "sleeve_width": "-0.323138559",
            "cuff": "0.011391002"
        },
        "27": {
            "collar": "0",
            "sleeve": "-0.247447008",
            "yoke": "-0.08705921",
            "chest": "-0.461681806",
            "midsection": "-1.049615333",
            "length": "-0.575674451",
            "sleeve_width": "-0.307554916",
            "cuff": "-0.205915095"
        },
        "28": {
            "collar": "0",
            "sleeve": "0.184216206",
            "yoke": "0.019757966",
            "chest": "-0.331262122",
            "midsection": "-1.049615333",
            "length": "-0.259425866",
            "sleeve_width": "-0.188867532",
            "cuff": "-0.05907243"
        },
        "29": {
            "collar": "0",
            "sleeve": "0.132720665",
            "yoke": "0.041405463",
            "chest": "-0.268009677",
            "midsection": "-0.730136564",
            "length": "-0.183950175",
            "sleeve_width": "-0.143598875",
            "cuff": "-0.046701333"
        },
        "30": {
            "collar": "0",
            "sleeve": "0.086822326",
            "yoke": "0.012169501",
            "chest": "-0.245596537",
            "midsection": "0.477723397",
            "length": "-0.191074046",
            "sleeve_width": "-0.111096043",
            "cuff": "-0.055148151"
        },
        "31": {
            "collar": "0",
            "sleeve": "0.096842121",
            "yoke": "-0.023270476",
            "chest": "-0.181838848",
            "midsection": "0.43192213",
            "length": "-0.144931406",
            "sleeve_width": "-0.107990806",
            "cuff": "-0.056746704"
        },
        "32": {
            "collar": "0",
            "sleeve": "0.07831311",
            "yoke": "-0.028802319",
            "chest": "-0.189002387",
            "midsection": "0.712782105",
            "length": "-0.074305172",
            "sleeve_width": "-0.088813093",
            "cuff": "-0.029637506"
        },
        "33": {
            "collar": "0",
            "sleeve": "0.070680175",
            "yoke": "-0.037036385",
            "chest": "-0.133209629",
            "midsection": "-0.562599886",
            "length": "-0.065729442",
            "sleeve_width": "-0.060619282",
            "cuff": "-0.006878347"
        },
        "34": {
            "collar": "0",
            "sleeve": "0.041241732",
            "yoke": "0.002118881",
            "chest": "-0.079429345",
            "midsection": "-0.668784959",
            "length": "-0.030498941",
            "sleeve_width": "-0.010822269",
            "cuff": "0.004367607"
        },
        "35": {
            "collar": "0",
            "sleeve": "0.031513969",
            "yoke": "-0.006238503",
            "chest": "0.008803436",
            "midsection": "-0.568580708",
            "length": "0.069122252",
            "sleeve_width": "0.020489703",
            "cuff": "0.003569373"
        },
        "36": {
            "collar": "0",
            "sleeve": "0.024596588",
            "yoke": "0.012906432",
            "chest": "0.00904768",
            "midsection": "-0.299974866",
            "length": "0.053441182",
            "sleeve_width": "0.03330472",
            "cuff": "0.006181245"
        },
        "37": {
            "collar": "0",
            "sleeve": "-0.037534928",
            "yoke": "0.036109064",
            "chest": "0.063171983",
            "midsection": "1.03727535",
            "length": "0.083388403",
            "sleeve_width": "0.048074539",
            "cuff": "0.015548092"
        },
        "38": {
            "collar": "0",
            "sleeve": "-0.08263098",
            "yoke": "0.004940356",
            "chest": "0.116087891",
            "midsection": "2.242314403",
            "length": "0.126111948",
            "sleeve_width": "0.066953727",
            "cuff": "0.015827112"
        },
        "39": {
            "collar": "0",
            "sleeve": "-0.065914134",
            "yoke": "0.035117304",
            "chest": "0.218902081",
            "midsection": "1.813652712",
            "length": "0.267674891",
            "sleeve_width": "0.104447989",
            "cuff": "0.029877157"
        },
        "40": {
            "collar": "0",
            "sleeve": "-0.126701537",
            "yoke": "0.030825811",
            "chest": "0.167702057",
            "midsection": "1.384991022",
            "length": "0.115729704",
            "sleeve_width": "0.103496092",
            "cuff": "0.052389279"
        },
        "41": {
            "collar": "0",
            "sleeve": "-0.142593339",
            "yoke": "0.140188609",
            "chest": "0.266922976",
            "midsection": "1.811066167",
            "length": "0.221123921",
            "sleeve_width": "0.121180369",
            "cuff": "0.058742831"
        },
        "42": {
            "collar": "0",
            "sleeve": "-0.16653935",
            "yoke": "0.059219919",
            "chest": "0.267812028",
            "midsection": "2.237141313",
            "length": "0.152677668",
            "sleeve_width": "0.149337483",
            "cuff": "0.064130276"
        },
        "43": {
            "collar": "0",
            "sleeve": "-0.199721611",
            "yoke": "0.083100688",
            "chest": "0.402127608",
            "midsection": "2.237141313",
            "length": "0.123316203",
            "sleeve_width": "0.161529798",
            "cuff": "0.17867387"
        },
        "44": {
            "collar": "0",
            "sleeve": "-0.34541004",
            "yoke": "-0.025346055",
            "chest": "0.322023742",
            "midsection": "2.237141313",
            "length": "0.086662209",
            "sleeve_width": "0.15474977",
            "cuff": "0.052390391"
        },
        "45": {
            "collar": "0",
            "sleeve": "-0.044181513",
            "yoke": "0.071722471",
            "chest": "0.502875436",
            "midsection": "2.237141313",
            "length": "-0.029672345",
            "sleeve_width": "0.110112459",
            "cuff": "-0.05075482"
        },
        "46": {
            "collar": "0",
            "sleeve": "-0.4118109",
            "yoke": "0.007866004",
            "chest": "0.445274327",
            "midsection": "2.237141313",
            "length": "0.095428519",
            "sleeve_width": "0.157485176",
            "cuff": "0.03870255"
        },
        "47": {
            "collar": "0",
            "sleeve": "-0.483633639",
            "yoke": "-0.325750662",
            "chest": "0.675874875",
            "midsection": "2.237141313",
            "length": "-0.228677021",
            "sleeve_width": "0.109262886",
            "cuff": "-0.200559825"
        },
        "48": {
            "collar": "0",
            "sleeve": "-0.349716661",
            "yoke": "-0.127228814",
            "chest": "0.886473579",
            "midsection": "2.237141313",
            "length": "0.028097477",
            "sleeve_width": "0.147488604",
            "cuff": "0.022026462"
        },
        "49": {
            "collar": "0",
            "sleeve": "-0.271693981",
            "yoke": "-0.37388889",
            "chest": "0.858700618",
            "midsection": "2.237141313",
            "length": "-0.595330264",
            "sleeve_width": "0.372773992",
            "cuff": "-0.020290344"
        },
        "50": {
            "collar": "0",
            "sleeve": "-0.52325306",
            "yoke": "0.017621639",
            "chest": "1.521238718",
            "midsection": "2.237141313",
            "length": "-0.291475742",
            "sleeve_width": "0.223341903",
            "cuff": "0.119773706"
        },
        "51": {
            "collar": "0",
            "sleeve": "-0.199140308",
            "yoke": "0.189334207",
            "chest": "1.864934228",
            "midsection": "2.237141313",
            "length": "-0.616103689",
            "sleeve_width": "0.040747588",
            "cuff": "0.271899195"
        },
        "52": {
            "collar": "0",
            "sleeve": "-0.613161013",
            "yoke": "-0.119698792",
            "chest": "2.155027573",
            "midsection": "2.237141313",
            "length": "-0.399257855",
            "sleeve_width": "0.228153001",
            "cuff": "-0.011312025"
        },
        "53": {
            "collar": "0",
            "sleeve": "-0.516498634",
            "yoke": "0.027689019",
            "chest": "2.344461864",
            "midsection": "2.237141313",
            "length": "-0.271947827",
            "sleeve_width": "0.280823038",
            "cuff": "0.040013982"
        },
        "54": {
            "collar": "0",
            "sleeve": "-0.419836255",
            "yoke": "0.175076831",
            "chest": "2.533896155",
            "midsection": "2.237141313",
            "length": "-0.144637799",
            "sleeve_width": "0.333493074",
            "cuff": "0.091339989"
        },
        "55": {
            "collar": "0",
            "sleeve": "-0.542365665",
            "yoke": "0.280008854",
            "chest": "2.7817711",
            "midsection": "2.237141313",
            "length": "-0.302111615",
            "sleeve_width": "0.474577526",
            "cuff": "0.049662081"
        },
        "56": {
            "collar": "0",
            "sleeve": "-0.664895074",
            "yoke": "0.384940878",
            "chest": "3.029646045",
            "midsection": "2.237141313",
            "length": "-0.45958543",
            "sleeve_width": "0.615661977",
            "cuff": "0.007984172"
        },
        "57": {
            "collar": "0",
            "sleeve": "-0.833708686",
            "yoke": "0.364512126",
            "chest": "3.059114448",
            "midsection": "2.237141313",
            "length": "-0.528075752",
            "sleeve_width": "0.552782242",
            "cuff": "-0.102740671"
        },
        "58": {
            "collar": "0",
            "sleeve": "-1.002522298",
            "yoke": "0.344083375",
            "chest": "3.088582851",
            "midsection": "2.237141313",
            "length": "-0.596566073",
            "sleeve_width": "0.489902507",
            "cuff": "-0.213465515"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB182J186 = function (val, param) {
    var info = {
        "skipped": {
            "collar": "0",
            "sleeve": "0.061481448",
            "yoke": "-0.013465514",
            "chest": "-0.130336657",
            "midsection": "0",
            "length": "-0.232875837",
            "sleeve_width": "0.029059556",
            "cuff": "0.009448301"
        },
        "0": {
            "collar": "0",
            "sleeve": "0.115896057",
            "yoke": "0.128812296",
            "chest": "-0.084253362",
            "midsection": "0",
            "length": "-0.125524042",
            "sleeve_width": "0.003207757",
            "cuff": "0.003003667"
        },
        "1": {
            "collar": "0",
            "sleeve": "0.052882951",
            "yoke": "0.039600535",
            "chest": "-0.053082783",
            "midsection": "0",
            "length": "-0.061669654",
            "sleeve_width": "0.020188429",
            "cuff": "0.009983154"
        },
        "2": {
            "collar": "0",
            "sleeve": "-0.066722467",
            "yoke": "-0.033854493",
            "chest": "0.044789293",
            "midsection": "0",
            "length": "0.051079183",
            "sleeve_width": "0.000777945",
            "cuff": "0.001331929"
        },
        "3": {
            "collar": "0",
            "sleeve": "-0.127726246",
            "yoke": "-0.200123439",
            "chest": "0.17348589",
            "midsection": "0",
            "length": "0.240961749",
            "sleeve_width": "-0.095367949",
            "cuff": "-0.05200601"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB191J194 = function (val, param) {
    var info = {
        "skipped": {
            "collar": "-0.055546978",
            "sleeve": "0.094368542",
            "yoke": "-0.01476207",
            "chest": "0.013854928",
            "midsection": "-0.00855007",
            "length": "-1.116321304",
            "sleeve_width": "-0.029724131",
            "cuff": "-0.040186808"
        },
        "0": {
            "collar": "-0.059956927",
            "sleeve": "0.021663493",
            "yoke": "-0.027404034",
            "chest": "-0.038583921",
            "midsection": "0.009904125",
            "length": "-0.767055439",
            "sleeve_width": "-0.037312418",
            "cuff": "0.014321054"
        },
        "1": {
            "collar": "0.02269059",
            "sleeve": "0.008480989",
            "yoke": "0.011138082",
            "chest": "0.016968506",
            "midsection": "0.05766999",
            "length": "0.267344435",
            "sleeve_width": "0.009037878",
            "cuff": "-0.006148317"
        },
        "2": {
            "collar": "-0.016359639",
            "sleeve": "-0.016621169",
            "yoke": "-0.008615798",
            "chest": "-0.01427841",
            "midsection": "-0.076684224",
            "length": "-0.682806998",
            "sleeve_width": "-0.003704045",
            "cuff": "0.005603482"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB198J202 = function (val, param) {
    var info = {
        "skipped": {
            "collar": "-0.009430091",
            "sleeve": "-0.060931221",
            "yoke": "0.020065084",
            "chest": "0.060996052",
            "midsection": "0",
            "length": "-0.04144851",
            "sleeve_width": "-0.018708661",
            "cuff": "0.001945119"
        },
        "0": {
            "collar": "-0.18566242",
            "sleeve": "-0.138211796",
            "yoke": "0.115009573",
            "chest": "0.723241735",
            "midsection": "0",
            "length": "0.081586598",
            "sleeve_width": "0.419678564",
            "cuff": "0.03565882"
        },
        "1": {
            "collar": "0.01439051",
            "sleeve": "0.010983172",
            "yoke": "-0.01353653",
            "chest": "-0.082439045",
            "midsection": "0",
            "length": "-0.002307378",
            "sleeve_width": "-0.042000183",
            "cuff": "0.001096295"
        },
        "2": {
            "collar": "0.128120471",
            "sleeve": "0.098908272",
            "yoke": "-0.060800453",
            "chest": "-0.388180455",
            "midsection": "0",
            "length": "-0.068118135",
            "sleeve_width": "-0.245549876",
            "cuff": "-0.041156121"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB209F241 = function (val, param) {
    var info = {
        "26": ["-0.221736265", "-1.067074513", "-0.099158452", "-1.330572457"],
        "27": ["-0.528794453", "-0.085644434", "-0.099158452", "-1.330572457"],
        "28": ["-0.91520956", "-0.568663689", "0.169899939", "-1.330572457"],
        "29": ["-0.59961993", "-0.566624529", "0.241648843", "-1.330572457"],
        "30": ["-0.49773162", "-0.410034161", "-0.397804625", "-1.368574327"],
        "31": ["-0.548523772", "-0.464622021", "-0.510047377", "0.129611864"],
        "32": ["-0.568987359", "-0.432854696", "-0.501152729", "0.257627536"],
        "33": ["-0.514781776", "-0.300351783", "-0.342121951", "-0.458061202"],
        "34": ["-0.367065616", "-0.211116161", "-0.220890441", "-0.23037326"],
        "35": ["-0.252681097", "0.063683795", "-0.024133377", "-0.029030892"],
        "36": ["-0.186931436", "0.074473126", "-0.064759354", "-0.133546747"],
        "37": ["0.162897024", "0.362301927", "0.125773915", "-0.126959521"],
        "38": ["-0.300278099", "0.276297593", "0.189665099", "0.090547931"],
        "39": ["-0.333896713", "0.417440009", "0.468001757", "0.320734751"],
        "40": ["-0.009390781", "0.377159428", "0.25651829", "0.129889443"],
        "41": ["0.223825486", "0.544350549", "0.731454049", "0.660815954"],
        "42": ["0.250566914", "1.008666258", "0.67251187", "0.592212989"],
        "43": ["0.460265847", "0.848454614", "0.917776002", "0.513604692"],
        "44": ["1.43555015", "-1.623193321", "1.182488585", "1.172238091"],
        "45": ["1.43555015", "0.610131892", "1.317501874", "1.611103714"],
        "46": ["1.43555015", "3.232353669", "1.972545174", "1.931291607"],
        "47": ["1.43555015", "2.205257771", "2.509834543", "2.419382501"],
        "48": ["1.43555015", "0.250456077", "3.047123912", "2.448343506"],
        "49": ["1.43555015", "0.250456077", "3.406056291", "1.004169692"],
        "50": ["1.43555015", "-1.604955515", "3.764988669", "3.130317882"],
        "51": ["1.43555015", "3.578109143", "4.590686069", "3.606305916"],
        "52": ["1.43555015", "3.578109143", "5.416383469", "4.082293951"],
        "53": ["1.43555015", "3.578109143", "3.985774926", "4.511644724"],
        "54": ["1.43555015", "3.578109143", "2.555166383", "4.940995497"],
        "55": ["1.43555015", "3.578109143", "3.322031276", "5.400684663"],
        "56": ["1.43555015", "3.578109143", "4.088896169", "5.86037383"],
        "57": ["1.43555015", "3.578109143", "5.285508081", "5.897607282"],
        "58": ["1.43555015", "3.578109143", "6.482119994", "5.934840734"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB278J313 = function (val, param) {
    var info = {
        "skipped": ["0", "0.865907137", "1.324364121", "0.746046057", "0.639005495", "-0.344075047", "-0.843603142", "0"],
        "100": ["0", "0.553748023", "0.583752513", "-1.030663801", "0.114424126", "-2.692317521", "-5.237655536", "0"],
        "110": ["0", "1.56103665", "0.583752513", "-0.99686358", "-0.94601477", "-2.692317521", "-5.237655536", "0"],
        "120": ["0", "0.500125704", "-0.156677307", "-0.963063358", "-1.161001475", "-2.692317521", "-5.237655536", "0"],
        "130": ["0", "1.089358032", "0.427227989", "-0.416102605", "-1.616065544", "-2.692317521", "-5.237655536", "0"],
        "140": ["0", "0.86641734", "0.51030676", "-0.463741059", "-1.861692699", "-2.692317521", "-5.237655536", "0"],
        "150": ["0", "1.116616011", "0.747659017", "-0.105449104", "-1.165852722", "-2.409147604", "-5.237655536", "0"],
        "160": ["0", "1.166022084", "1.189205914", "0.283054254", "-0.918560456", "-2.383404884", "-5.237655536", "0"],
        "170": ["0", "3.61686791", "1.546272799", "0.626061683", "-0.566839049", "-1.958198419", "-4.553068223", "0"],
        "180": ["0", "5.741633648", "1.843972507", "0.931614391", "-0.24150579", "-1.817324925", "-3.868480909", "0"],
        "190": ["0", "5.741633648", "1.882054969", "1.26993304", "0.132339142", "-1.431691946", "-4.396063208", "0"],
        "200": ["0", "-1.943814176", "2.377126978", "1.725030832", "0.575698608", "-1.039116212", "-3.95422189", "0"],
        "210": ["0", "-1.943814176", "2.377126978", "2.526783586", "0.915060675", "-0.667762844", "-3.264910596", "0"],
        "220": ["0", "-1.943814176", "2.377126978", "2.697674405", "1.58155884", "-0.134603414", "-2.796680038", "0"],
        "230": ["0", "-1.943814176", "2.377126978", "3.005929771", "1.840750983", "0.215566205", "-2.473155506", "0"],
        "240": ["0", "-1.943814176", "2.377126978", "3.314185136", "2.549260478", "0.785024264", "-1.998163023", "0"],
        "250": ["0", "-1.943814176", "2.377126978", "3.314185136", "3.182513408", "1.11431203", "-1.612006279", "0"],
        "260": ["0", "-1.943814176", "2.377126978", "3.314185136", "3.42578829", "1.129717773", "-1.658623634", "0"],
        "270": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.885437576", "1.392717052", "-1.177835979", "0"],
        "280": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.632984077", "1.799394271", "-0.616710319", "0"],
        "290": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "1.740625521", "-0.208066313", "0"],
        "300": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.744487701", "0.023576329", "0"],
        "310": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.447924908", "-0.28981966", "0"],
        "320": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.9270755", "0.382100299", "0"],
        "330": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "3.999351679", "0.180687132", "0"],
        "340": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "5.186563987", "0.829911306", "0"],
        "350": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "3.897876709", "0.433399973", "0"],
        "360": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "0.769156505", "0"],
        "370": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "1.31819065", "0"],
        "380": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "1.514897599", "0"],
        "390": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "-0.369642408", "0"],
        "400": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "0.91294971", "0"],
        "410": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "1.181711267", "0"],
        "420": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "1.120419492", "0"],
        "430": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "0.925549126", "0"],
        "440": ["0", "-1.943814176", "2.377126978", "3.314185136", "4.380530577", "2.609189431", "0.904535422", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB318J354 = function (val, param) {
    var info = {
        "skipped": ["0", "0.51918282", "0.949535617", "0.632463605", "0.318122855", "-0.406493007", "-0.798176894", "0"],
        "90": ["0", "-0.284602883", "-0.097892121", "-1.205343734", "0.158955288", "-0.400365796", "-1.927532827", "0"],
        "100": ["0", "-0.284602883", "-0.097892121", "-1.205343734", "0.158955288", "-0.400365796", "-1.927532827", "0"],
        "110": ["0", "0.192535767", "-0.097892121", "-1.023735141", "-0.101820524", "-0.400365796", "-1.927532827", "0"],
        "120": ["0", "0.431600131", "-0.461776665", "-0.842126547", "-0.420821084", "-0.400365796", "-1.927532827", "0"],
        "130": ["0", "0.963102054", "0.117024459", "-0.709821929", "-0.847037928", "-0.400365796", "-1.927532827", "0"],
        "140": ["0", "0.929194025", "0.394919955", "-0.378283692", "-0.982640793", "-0.400365796", "-1.927532827", "0"],
        "150": ["0", "1.34539664", "0.623625185", "-0.100650176", "-0.85321654", "-1.859781718", "-1.927532827", "0"],
        "160": ["0", "1.395114605", "0.983077655", "0.264459458", "-0.46897313", "-1.992455893", "-1.927532827", "0"],
        "170": ["0", "2.78841013", "1.163795932", "0.462699969", "-0.298752476", "-1.470441884", "-2.21643653", "0"],
        "180": ["0", "3.853567088", "1.571117856", "0.711723083", "-0.147951125", "-1.319085786", "-2.505340233", "0"],
        "190": ["0", "3.853567088", "1.628567187", "0.951103538", "0.145844819", "-0.818219533", "-2.926704477", "0"],
        "200": ["0", "0.624960596", "2.375408492", "1.250620488", "0.372785043", "-0.701026665", "-2.64571571", "0"],
        "210": ["0", "0.624960596", "2.375408492", "1.634058414", "0.530810219", "-0.462438486", "-1.898730096", "0"],
        "220": ["0", "0.624960596", "2.375408492", "1.711455419", "1.07078278", "-0.165693544", "-1.632363695", "0"],
        "230": ["0", "0.624960596", "2.375408492", "2.054469345", "1.056360215", "-0.039124811", "-1.629768589", "0"],
        "240": ["0", "0.624960596", "2.375408492", "2.397483271", "1.56613717", "0.101268876", "-1.688800928", "0"],
        "250": ["0", "0.624960596", "2.375408492", "2.397483271", "2.03009421", "0.368792062", "-1.259970801", "0"],
        "260": ["0", "0.624960596", "2.375408492", "2.397483271", "2.151482924", "0.654804892", "-1.220050722", "0"],
        "270": ["0", "0.624960596", "2.375408492", "2.397483271", "2.879815211", "0.589976486", "-0.964482213", "0"],
        "280": ["0", "0.624960596", "2.375408492", "2.397483271", "3.611163118", "1.022637838", "-0.820491667", "0"],
        "290": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "0.758123201", "-0.587298324", "0"],
        "300": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "1.841665829", "-0.441736616", "0"],
        "310": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "1.50377662", "-0.459282929", "0"],
        "320": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "1.47100203", "-0.12455398", "0"],
        "330": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "2.114005859", "0.153691583", "0"],
        "340": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "0.487592503", "0.365409567", "0"],
        "350": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "1.745008624", "0.598671123", "0"],
        "360": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "0.800953703", "0"],
        "370": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "1.853477968", "0"],
        "380": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "1.880788561", "0"],
        "390": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "1.470916033", "0"],
        "400": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "1.750131542", "0"],
        "410": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "1.988401839", "0"],
        "420": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "2.209034536", "0"],
        "430": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "2.064813264", "0"],
        "440": ["0", "0.624960596", "2.375408492", "2.397483271", "4.342511025", "3.002424746", "2.033397223", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB359J363 = function (val, param) {
    var info = {
        "skipped": ["0", "-0.271176382", "-0.390897633", "-0.334014105", "-0.258248608", "0.4310461", "1.218648194", "0"],
        "0": ["0", "-0.113942797", "-0.164584173", "-0.283871219", "-0.476422085", "-0.939082604", "-1.18614059", "0"],
        "1": ["0", "0.076107459", "0.029723807", "-0.050736926", "-0.217021314", "-0.579911509", "-1.117715635", "0"],
        "2": ["0", "0.315425222", "0.352972984", "0.439347972", "0.356702328", "0.063471977", "-0.479931055", "0"],
        "3": ["0", "0", "0.807888884", "0.753056415", "1.075207684", "0.903501119", "0.517380868", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB368J371 = function (val, param) {
    var info = {
        "skipped": ["0", "0.167642557", "0.14617446", "0.217503507", "0.116937941", "-0.159945633", "-0.115457551", "0"],
        "0": ["0", "0.379097569", "1.190977061", "0.995188753", "0.986421968", "0.704159537", "0.420132691", "0"],
        "1": ["0", "0.244470129", "0.163662653", "0.072301216", "-0.042474017", "-0.203105709", "-0.479661447", "0"],
        "2": ["0", "-0.155860565", "-0.258742309", "-0.326931998", "-0.482420612", "-0.881698902", "-1.214275331", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB376J401 = function (val, param) {
    var info = {
        "60": ["0.824374657", "2.063728583", "0.638989712"],
        "61": ["1.54645143", "1.185339336", "1.029347871"],
        "62": ["1.75275908", "0.62488689", "0.197219194"],
        "63": ["0.521173456", "0.276179464", "0.489903044"],
        "64": ["0.55985071", "0.423437897", "0.590072736"],
        "65": ["0.288022082", "0.333988944", "0.480047033"],
        "66": ["0.240621507", "0.311028368", "0.306329501"],
        "67": ["0.298990327", "0.236119756", "0.325025654"],
        "68": ["0.126021332", "0.174597385", "0.213072625"],
        "69": ["0.068763474", "0.110440488", "0.195004756"],
        "70": ["-0.001516016", "0.048122719", "0.183248227"],
        "71": ["-0.102614905", "-0.070806192", "0.04955794"],
        "72": ["0.049852575", "-0.128310179", "-0.01166375"],
        "73": ["-0.28711655", "-0.192788421", "-0.136685278"],
        "74": ["-0.100781292", "-0.251597423", "-0.122470483"],
        "75": ["-0.240192541", "-0.402079111", "-0.254774321"],
        "76": ["-0.278735842", "-0.571705347", "-0.385318055"],
        "77": ["-0.431703604", "-0.796163099", "-0.344154477"],
        "78": ["-0.677249849", "-0.718234112", "-0.718025689"],
        "79": ["-0.463183335", "-0.646184377", "-0.208955167"],
        "80": ["-0.776916223", "-1.373498033", "-0.631700648"],
        "81": ["-1.47118574", "-1.167007288", "-0.373930241"],
        "82": ["-1.119678964", "-1.068674981", "-0.364615354"],
        "83": ["-1.119678964", "-0.534482534", "-0.350441842"],
        "84": ["-1.119678964", "-0.359851694", "-0.035974146"],
        "85": ["-1.119678964", "-0.359851694", "-0.035974146"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB406J431 = function (val, param) {
    var info = {
        "skipped": ["0", "0.890486845", "0.278037803", "0.365835007", "0.057044278", "-0.42453268", "-0.254752743", "0"],
        "60": ["0", "-0.082761366", "-0.504723239", "-1.393609572", "-1.559146768", "-2.867366674", "-3.387746919", "0"],
        "61": ["0", "-0.581189272", "-0.471559773", "-1.247610882", "-1.704287887", "-3.250741345", "-3.258302419", "0"],
        "62": ["0", "-1.079617179", "-0.345360903", "-1.409243361", "-2.393201279", "-3.038617044", "-3.040184812", "0"],
        "63": ["0", "0.016192003", "-0.485212592", "-1.541590552", "-2.621388395", "-2.044806633", "-2.751255279", "0"],
        "64": ["0", "0.57590373", "-0.411072822", "-0.977759024", "-1.553912875", "-2.010473325", "-2.701861851", "0"],
        "65": ["0", "0.558303672", "-0.146405498", "-0.527496883", "-1.346482272", "-1.706905322", "-3.139066546", "0"],
        "66": ["0", "0.538918292", "0.289265504", "-0.369547627", "-1.126747473", "-1.453619488", "-2.256304869", "0"],
        "67": ["0", "0.811449198", "0.476119682", "-0.160406737", "-0.794389069", "-1.487920745", "-2.163507444", "0"],
        "68": ["0", "0.938102181", "0.591247848", "0.022958831", "-0.668149158", "-1.279619566", "-2.115388604", "0"],
        "69": ["0", "1.758491929", "0.989731201", "0.218930321", "-0.420045616", "-1.052600755", "-1.719232744", "0"],
        "70": ["0", "1.428086856", "1.031375932", "0.462734718", "-0.12870359", "-0.760157959", "-1.385122802", "0"],
        "71": ["0", "2.046941419", "1.23050091", "0.631704829", "0.03372674", "-0.569080264", "-1.22796329", "0"],
        "72": ["0", "2.024125059", "1.810492749", "0.928453263", "0.219374902", "-0.378017129", "-0.958949957", "0"],
        "73": ["0", "2.223039721", "1.655250443", "1.143852528", "0.446199951", "-0.167818198", "-0.778422523", "0"],
        "74": ["0", "3.125666773", "2.070777586", "1.461756681", "0.723966535", "0.097181532", "-0.623726351", "0"],
        "75": ["0", "3.379484546", "1.953499623", "1.536086637", "0.92925151", "0.390453473", "-0.38966433", "0"],
        "76": ["0", "3.379484546", "1.746477638", "1.856603467", "1.259442163", "0.717636792", "0.020558235", "0"],
        "77": ["0", "3.379484546", "2.681130244", "2.069544515", "1.417229514", "0.748949313", "0.081394674", "0"],
        "78": ["0", "3.379484546", "3.118909104", "2.946265729", "1.978048791", "1.23122146", "0.341192415", "0"],
        "79": ["0", "3.379484546", "3.118909104", "2.996685808", "2.167912778", "1.032844493", "0.275419997", "0"],
        "80": ["0", "3.379484546", "3.118909104", "3.789469023", "2.145543379", "1.39541603", "0.228510807", "0"],
        "81": ["0", "3.379484546", "3.118909104", "3.883340161", "2.566378837", "1.660643297", "0.782198384", "0"],
        "82": ["0", "3.379484546", "3.118909104", "3.883340161", "2.566378837", "1.081830872", "0.65008253", "0"],
        "83": ["0", "3.379484546", "3.118909104", "3.883340161", "0.147998839", "0.992096006", "1.730262773", "0"],
        "84": ["0", "3.379484546", "3.118909104", "3.883340161", "0.147998839", "4.346351501", "2.782605602", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB436E460 = function (val, param) {
    var info = {
        "60": ["-1.614287379", "0.515260304", "-0.441651689"],
        "61": ["-0.982746022", "0.646880632", "-0.108784839"],
        "62": ["-0.802305634", "0.466776607", "-0.115767892"],
        "63": ["-0.339657427", "0.358608801", "-0.083504443"],
        "64": ["-0.628568272", "0.486232061", "-0.395358653"],
        "65": ["-0.718414366", "0.490694604", "-0.266782311"],
        "66": ["-0.745366965", "0.388058798", "-0.31119076"],
        "67": ["-1.030363537", "0.424907201", "-0.340434986"],
        "68": ["-0.865840159", "0.491005379", "-0.290618947"],
        "69": ["-0.944434382", "0.386886691", "-0.283197397"],
        "70": ["-0.675267015", "0.396029189", "-0.341964957"],
        "71": ["-0.754112388", "0.356570529", "-0.312363645"],
        "72": ["-0.858560401", "0.37839907", "-0.312791543"],
        "73": ["-0.510473091", "0.388773707", "-0.358109255"],
        "74": ["-0.741624794", "0.399363817", "-0.398243302"],
        "75": ["-0.728605057", "0.344044934", "-0.314406571"],
        "76": ["-0.73579814", "0.361539077", "-0.365678558"],
        "77": ["-1.057998235", "0.559785987", "-0.534048209"],
        "78": ["-0.554286297", "0.396548175", "-0.335896499"],
        "79": ["-1.531654124", "0.645622275", "-0.290535732"],
        "80": ["-1.530793246", "0.413002771", "-0.160796072"],
        "81": ["-1.050296001", "0.811360534", "-0.642736161"],
        "82": ["-0.572668353", "0.840612269", "-0.488560181"],
        "83": ["-0.572668353", "0.477976946", "-0.888140992"],
        "84": ["-0.572668353", "-0.803374865", "1.60674973"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB465J468 = function (val, param) {
    var info = {
        "1": ["0", "0.76077645", "0.003519696", "1.338650486", "0.996245266", "0", "0", "0"],
        "2": ["0", "0", "0", "-1.651289164", "-0.624645786", "0", "-1.69711143", "0"],
        "3": ["0", "0", "0.461458627", "-0.08041614", "-0.220931935", "-0.35254771", "-1.073443293", "0"],
        "4": ["0", "0", "0", "-0.661016644", "0", "0.128005463", "0", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB473J497 = function (val, param) {
    var info = {
        "60": ["0", "-1.024322491", "0.052712285", "1.413532428", "-2.03007026", "-3.082260664", "-2.421259924", "0"],
        "61": ["0", "-1.024322491", "0.052712285", "1.413532428", "-2.03007026", "-3.082260664", "-2.421259924", "0"],
        "62": ["0", "-1.024322491", "0.052712285", "0.022997665", "-2.03007026", "-3.082260664", "-2.421259924", "0"],
        "63": ["0", "-0.522089242", "0.052712285", "-1.367537098", "-2.463870936", "-3.082260664", "-2.421259924", "0"],
        "64": ["0", "0.29609726", "-0.129129849", "-1.367537098", "-2.044952744", "-3.361155567", "-1.8915848", "0"],
        "65": ["0", "0.121014631", "-0.207062192", "-1.413796902", "-1.480871939", "-2.0546042", "-1.361909676", "0"],
        "66": ["0", "0.662488565", "0.384997011", "-0.369754144", "-1.509448154", "-1.52612211", "-1.408015642", "0"],
        "67": ["0", "0.587236389", "-0.160738462", "-0.266706456", "-1.285774107", "-1.945859034", "-1.4813728", "0"],
        "68": ["0", "1.695289152", "0.388015838", "-0.485380781", "-0.76036472", "-1.570734739", "-1.465226805", "0"],
        "69": ["0", "1.850474292", "1.32573467", "0.111615283", "-0.482097234", "-1.195610445", "-1.559596886", "0"],
        "70": ["0", "2.031682584", "1.503902541", "0.548980946", "-0.260644984", "-0.807281788", "-1.619698722", "0"],
        "71": ["0", "2.10193836", "2.006838222", "0.553053466", "0.099929851", "-0.630224306", "-1.046865976", "0"],
        "72": ["0", "2.185238148", "2.075775359", "1.644813943", "0.196957988", "-0.269385481", "-0.359276453", "0"],
        "73": ["0", "2.185238148", "2.431525952", "1.454244052", "0.677389707", "0.074826202", "0.162679203", "0"],
        "74": ["0", "2.185238148", "2.210748997", "2.161832505", "1.163861786", "0.863441484", "0.075972995", "0"],
        "75": ["0", "2.185238148", "2.210748997", "2.117526336", "1.412645093", "0.359938134", "0.381397865", "0"],
        "76": ["0", "2.185238148", "2.210748997", "2.264537217", "1.92484681", "1.331615925", "0.127625022", "0"],
        "77": ["0", "2.185238148", "2.210748997", "2.957314494", "1.939959499", "1.68101547", "-0.082355202", "0"],
        "78": ["0", "2.185238148", "2.210748997", "2.957314494", "2.087055848", "1.553879398", "1.646545168", "0"],
        "79": ["0", "2.185238148", "2.210748997", "2.957314494", "2.215008958", "1.114715188", "2.185183688", "0"],
        "80": ["0", "2.185238148", "2.210748997", "2.957314494", "2.215008958", "2.584702195", "3.080475183", "0"],
        "81": ["0", "2.185238148", "2.210748997", "2.957314494", "2.215008958", "3.642173094", "2.317145623", "0"],
        "82": ["0", "2.185238148", "2.210748997", "2.957314494", "2.215008958", "3.642173094", "2.317145623", "0"],
        "83": ["0", "2.185238148", "2.210748997", "2.957314494", "2.215008958", "3.056389006", "0.658524569", "0"],
        "84": ["0", "2.185238148", "2.210748997", "2.957314494", "2.215008958", "3.056389006", "0.658524569", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB502J505 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = [
        ["0", "0.074434348", "0.145043351", "0.147538631", "0.085919848", "0.012089592", "-0.174499972", "0"],
        ["0", "0.15315265", "0.106985018", "0.095559837", "0.058562703", "-0.001304517", "-0.176638206", "0"],
        ["0", "-0.044907779", "0.102818231", "0.028139113", "-0.015982028", "-0.082164124", "-0.169946976", "0"],
        ["0", "0", "0.189755098", "-0.16162894", "-0.075596226", "-0.121876125", "-0.250030517", "0"]
    ]
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB510J542 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "26": ["0", "0.039029205", "-0.053799739", "-0.016482639", "0.080553038", "1.146700536", "-0.48396791", "0"],
        "27": ["0", "-0.309307786", "-0.164550046", "-0.016482639", "0.18549206", "1.146700536", "-0.48396791", "0"],
        "28": ["0", "-0.097865297", "-0.129708393", "-0.016482639", "0.004118995", "1.049029724", "-0.48396791", "0"],
        "29": ["0", "-0.057097146", "-0.014635064", "-0.143929941", "-0.05434165", "0.179479825", "-0.48396791", "0"],
        "30": ["0", "0.152960456", "-0.008011632", "-0.139649433", "-0.29109282", "0.050833311", "-0.48396791", "0"],
        "31": ["0", "0.268795828", "0.093310372", "-0.03947189", "-0.170740588", "-0.172665094", "-0.48396791", "0"],
        "32": ["0", "0.053068873", "0.024463451", "-0.014306685", "-0.097559344", "-0.396163498", "-0.467498931", "0"],
        "33": ["0", "0.038578437", "0.211637145", "0.047842014", "-0.087610346", "-0.308860528", "-0.547368355", "0"],
        "34": ["0", "0.172935692", "0.006611406", "0.08203174", "-0.036415502", "-0.186732765", "-0.658891652", "0"],
        "35": ["0", "0.394235562", "-0.14905031", "0.108709656", "0.017118901", "-0.239159054", "-0.672121585", "0"],
        "36": ["0", "-0.733525999", "-0.25298137", "0.133453838", "0.063894376", "-0.15476759", "-0.416373665", "0"],
        "37": ["0", "-1.861287561", "0.549919539", "0.195978881", "0.113198116", "-0.082759657", "-0.207127345", "0"],
        "38": ["0", "-1.861287561", "0.549919539", "-0.122925183", "0.13387397", "-0.002935455", "-0.329711049", "0"],
        "39": ["0", "-1.861287561", "0.728800898", "0.008567827", "0.263371493", "0.047653014", "-0.169891059", "0"],
        "40": ["0", "-1.861287561", "0.000850288", "0.576319233", "0.226494294", "0.135462786", "-0.201515654", "0"],
        "41": ["0", "-1.861287561", "-0.292606142", "0.220707335", "0.465464449", "0.188093331", "-0.06319705", "0"],
        "42": ["0", "-1.861287561", "-0.586062572", "0.300238323", "0.536848675", "0.217126375", "-0.082492299", "0"],
        "43": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "0.557698112", "0.15606622", "-0.055979205", "0"],
        "44": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "0.57854755", "-0.038725064", "-0.127472071", "0"],
        "45": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "0.57854755", "0.293499648", "-0.054911227", "0"],
        "46": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "0.57854755", "0.677793719", "-0.029312611", "0"],
        "47": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "2.709241446", "0.564578733", "-0.139091717", "0"],
        "48": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "2.709241446", "0.451363748", "0.032545776", "0"],
        "49": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.887632641", "0.257910554", "0.498066313", "0"],
        "50": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.887632641", "0.06445736", "0.263414284", "0"],
        "51": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "0.548174559", "0.498557433", "0"],
        "52": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "0.738452258", "0.733700581", "0"],
        "53": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "-0.018871316", "0.937685018", "0"],
        "54": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "-0.175101891", "1.141669454", "0"],
        "55": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "-0.175101891", "0.909418237", "0"],
        "56": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "0.602357721", "0.677167021", "0"],
        "57": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "1.655546077", "0.511893922", "0"],
        "58": ["0", "-1.861287561", "-0.586062572", "-0.448571866", "1.476828238", "2.708734434", "0.346620823", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB547J571 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "60": ["0", "-1.768180372", "-0.279342695", "-0.290794575", "0.574185083", "0.507082536", "0.300340241", "0"],
        "61": ["0", "-1.768180372", "-0.279342695", "-0.290794575", "0.574185083", "0.507082536", "0.300340241", "0"],
        "62": ["0", "-1.768180372", "-0.279342695", "-0.290794575", "0.574185083", "0.507082536", "0.300340241", "0"],
        "63": ["0", "-1.768180372", "-0.279342695", "-0.290794575", "0.574185083", "0.507082536", "0.300340241", "0"],
        "64": ["0", "-1.768180372", "-0.279342695", "-0.290794575", "0.574185083", "0.507082536", "0.300340241", "0"],
        "65": ["0", "-0.832169531", "-0.279342695", "-0.140834014", "0.615965342", "0.117576572", "0.300340241", "0"],
        "66": ["0", "-0.832169531", "-0.596627262", "-0.283408993", "0.458605946", "0.117576572", "0.300340241", "0"],
        "67": ["0", "-0.821666547", "-0.718454854", "-0.093187985", "0.450651852", "0.7687182", "1.58416416", "0"],
        "68": ["0", "-1.279168984", "-0.662595719", "-0.242208874", "0.343557946", "0.673852522", "2.151890886", "0"],
        "69": ["0", "-1.279168984", "-0.67367274", "-0.248464068", "0.182054401", "0.143542575", "1.538820286", "0"],
        "70": ["0", "-1.279168984", "-0.268505027", "-0.623080432", "0.108439044", "0.162265919", "0.754507873", "0"],
        "71": ["0", "-1.279168984", "-0.727485593", "-0.657283743", "0.088207403", "0.935833591", "0.573704029", "0"],
        "72": ["0", "-1.279168984", "-0.623195453", "-0.522937587", "0.075377436", "0.869203329", "0.234951946", "0"],
        "73": ["0", "-1.279168984", "-0.969229149", "-0.269779549", "0.063242753", "-0.104333506", "0.632818596", "0"],
        "74": ["0", "-1.279168984", "-0.969229149", "0.49270093", "0.051108071", "0.091433132", "0.796297117", "0"],
        "75": ["0", "-1.279168984", "-0.969229149", "0.869143605", "-0.015003292", "0.306104596", "0.932133713", "0"],
        "76": ["0", "-1.279168984", "-0.969229149", "1.531793733", "-0.511818026", "0.176152276", "0.255189187", "0"],
        "77": ["0", "-1.279168984", "-0.969229149", "1.531793733", "-0.876410035", "-0.411382687", "0.003635125", "0"],
        "78": ["0", "-1.279168984", "-0.969229149", "1.531793733", "-0.1667684", "-0.391085258", "0.184032766", "0"],
        "79": ["0", "-1.279168984", "-0.969229149", "1.531793733", "0.781064992", "-0.391085258", "0.248755072", "0"],
        "80": ["0", "-1.279168984", "-0.969229149", "1.531793733", "0.781064992", "-0.391085258", "0.120919474", "0"],
        "81": ["0", "-1.279168984", "-0.969229149", "1.531793733", "0.781064992", "-0.391085258", "-0.004489759", "0"],
        "82": ["0", "-1.279168984", "-0.969229149", "1.531793733", "0.781064992", "-0.391085258", "-0.004489759", "0"],
        "83": ["0", "-1.279168984", "-0.969229149", "1.531793733", "0.781064992", "-0.391085258", "-0.004489759", "0"],
        "84": ["0", "-1.279168984", "-0.969229149", "1.531793733", "0.781064992", "-0.391085258", "-0.004489759", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB576J610 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "100": ["0", "-0.81840202", "-0.872148013", "-0.638958723", "-0.083489891", "-0.273650649", "0.440262709", "0"],
        "110": ["0", "-0.81840202", "-0.872148013", "-0.638958723", "-0.083489891", "-0.273650649", "0.440262709", "0"],
        "120": ["0", "-0.81840202", "-0.872148013", "-0.638958723", "-0.083489891", "-0.273650649", "0.440262709", "0"],
        "130": ["0", "-0.81840202", "-0.872148013", "-0.745681936", "-0.083489891", "-0.273650649", "0.440262709", "0"],
        "140": ["0", "-0.81840202", "-0.872148013", "-0.564691529", "-0.083489891", "-0.273650649", "0.440262709", "0"],
        "150": ["0", "-0.81840202", "-0.872148013", "-0.614567757", "-0.083489891", "-0.273650649", "0.440262709", "0"],
        "160": ["0", "-0.81840202", "-0.872148013", "-0.286072519", "-0.083489891", "-0.273650649", "0.440262709", "0"],
        "170": ["0", "-0.81840202", "-0.872148013", "-0.217788895", "-0.031578653", "-0.273650649", "0.440262709", "0"],
        "180": ["0", "-0.81840202", "-0.872148013", "-0.015463813", "0.100705734", "-0.273650649", "0.440262709", "0"],
        "190": ["0", "-0.81840202", "-0.872148013", "-0.142160649", "0.160359023", "0.131866169", "0.440262709", "0"],
        "200": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "0.533188861", "0.440262709", "0"],
        "210": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "0.383187228", "0.440262709", "0"],
        "220": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "0.561311301", "0.147632992", "0"],
        "230": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "0.57678997", "-0.144996724", "0"],
        "240": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "0.698167314", "0.077713651", "0"],
        "250": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "1.327308619", "0.118864702", "0"],
        "260": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "1.604146622", "0.412875057", "0"],
        "270": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "0.227582656", "0"],
        "280": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "0.314109023", "0"],
        "290": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "0.098484609", "0"],
        "300": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "0.331679018", "0"],
        "310": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "0.818197342", "0"],
        "320": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "0.729524507", "0"],
        "330": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "0.729524507", "0"],
        "340": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "350": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "360": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "370": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "380": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "390": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "400": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "410": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "420": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "430": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"],
        "440": ["0", "-0.81840202", "-0.872148013", "-0.31399423", "0.48295607", "2.68299168", "-0.057035639", "0"]
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB615AA649 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "100": {
            "60": "-0.107481573",
            "61": "-0.652845778",
            "62": "-0.040601277",
            "63": "-1.224417244",
            "64": "-1.384048749",
            "65": "-2.638166136",
            "66": "-2.354322987",
            "67": "-1.192671818",
            "68": "-0.95961766",
            "69": "-1.280533867",
            "70": "-1.480339828",
            "71": "0.083270198",
            "72": "-1.81055141",
            "73": "-1.324966795",
            "74": "-0.521089775",
            "75": "-1.561235784",
            "76": "-1.123429828",
            "77": "-2.558295241",
            "78": "-0.517643016",
            "79": "-0.753758697",
            "80": "-0.753758697",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "110": {
            "60": "-0.244062417",
            "61": "-0.829771297",
            "62": "-0.822260497",
            "63": "-1.067020081",
            "64": "-1.384048749",
            "65": "-1.145350364",
            "66": "-1.170363582",
            "67": "-1.187351628",
            "68": "-1.074894833",
            "69": "-1.161847014",
            "70": "-1.480339828",
            "71": "-1.326631294",
            "72": "-1.81055141",
            "73": "-1.324966795",
            "74": "-1.04116278",
            "75": "-1.561235784",
            "76": "-1.123429828",
            "77": "-2.558295241",
            "78": "-0.517643016",
            "79": "-0.753758697",
            "80": "-0.753758697",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "120": {
            "60": "-0.628083963",
            "61": "-0.787520576",
            "62": "-0.714687291",
            "63": "-0.728451193",
            "64": "-0.751467896",
            "65": "-1.200109028",
            "66": "-1.182193639",
            "67": "-1.367900826",
            "68": "-1.110233206",
            "69": "-1.092078341",
            "70": "-1.037791729",
            "71": "-1.154715852",
            "72": "-1.382702153",
            "73": "-1.324966795",
            "74": "-2.112752213",
            "75": "-1.561235784",
            "76": "-1.123429828",
            "77": "-2.558295241",
            "78": "-0.517643016",
            "79": "-0.753758697",
            "80": "-0.753758697",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "130": {
            "60": "-0.389484646",
            "61": "-0.5612965",
            "62": "-0.562293636",
            "63": "-0.584155494",
            "64": "-0.689115117",
            "65": "-0.915812261",
            "66": "-0.842623469",
            "67": "-0.971937787",
            "68": "-0.769881464",
            "69": "-1.072452584",
            "70": "-0.967707323",
            "71": "-0.910944899",
            "72": "-1.120736425",
            "73": "-1.325544806",
            "74": "-1.323259715",
            "75": "-1.755970128",
            "76": "-1.123429828",
            "77": "-2.558295241",
            "78": "-0.517643016",
            "79": "-0.753758697",
            "80": "-0.753758697",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "140": {
            "60": "-0.193194498",
            "61": "-0.476135032",
            "62": "-0.643601587",
            "63": "-0.151521083",
            "64": "-0.462316557",
            "65": "-0.490181897",
            "66": "-0.65593034",
            "67": "-0.718254049",
            "68": "-0.811433395",
            "69": "-0.841888187",
            "70": "-0.825650984",
            "71": "-0.931260998",
            "72": "-1.163066493",
            "73": "-1.332341795",
            "74": "-1.220196381",
            "75": "-1.037541843",
            "76": "-1.123429828",
            "77": "-2.558295241",
            "78": "-0.517643016",
            "79": "-0.753758697",
            "80": "-0.753758697",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "150": {
            "60": "0.823058129",
            "61": "0.030529231",
            "62": "-0.062901469",
            "63": "0.052374521",
            "64": "-0.229614612",
            "65": "-0.262217151",
            "66": "-0.391350023",
            "67": "-0.531698919",
            "68": "-0.566049847",
            "69": "-0.680544588",
            "70": "-0.650181686",
            "71": "-0.744470644",
            "72": "-0.771748147",
            "73": "-0.849860738",
            "74": "-0.800180998",
            "75": "-0.974156683",
            "76": "-1.474038817",
            "77": "-1.007657373",
            "78": "-0.819219462",
            "79": "-0.635700856",
            "80": "-0.753758697",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "160": {
            "60": "0.09579588",
            "61": "0.542097698",
            "62": "0.283492612",
            "63": "0.110249382",
            "64": "-0.048739241",
            "65": "-0.053522032",
            "66": "-0.1079227",
            "67": "-0.257657022",
            "68": "-0.367557839",
            "69": "-0.469761631",
            "70": "-0.513938934",
            "71": "-0.53716149",
            "72": "-0.661365098",
            "73": "-0.677154824",
            "74": "-0.701006025",
            "75": "-0.848323434",
            "76": "-0.889664527",
            "77": "-0.796497611",
            "78": "-0.651719237",
            "79": "-0.774100022",
            "80": "-0.835290415",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "170": {
            "60": "0.133282548",
            "61": "0.489980549",
            "62": "0.799345244",
            "63": "0.296759951",
            "64": "0.306162244",
            "65": "0.050060862",
            "66": "0.114036556",
            "67": "-0.000646442",
            "68": "-0.081308665",
            "69": "-0.221317044",
            "70": "-0.330861587",
            "71": "-0.383063718",
            "72": "-0.440341019",
            "73": "-0.542965986",
            "74": "-0.603718454",
            "75": "-0.617497995",
            "76": "-0.937846606",
            "77": "-0.554306193",
            "78": "-0.999291866",
            "79": "-0.858394497",
            "80": "-0.916822133",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.159553849"
        },
        "180": {
            "60": "-0.302391606",
            "61": "0.625402414",
            "62": "0.815874587",
            "63": "0.463241967",
            "64": "0.420946997",
            "65": "0.330092072",
            "66": "0.29007023",
            "67": "0.161934485",
            "68": "0.016370093",
            "69": "-0.067181828",
            "70": "-0.146197696",
            "71": "-0.170865677",
            "72": "-0.318149126",
            "73": "-0.341026375",
            "74": "-0.44556478",
            "75": "-0.481419651",
            "76": "-0.542330651",
            "77": "-0.577038663",
            "78": "-0.654144041",
            "79": "-0.657367771",
            "80": "-0.68405196",
            "81": "-0.486053909",
            "82": "-0.486053909",
            "83": "-1.159553849",
            "84": "-1.072758869"
        },
        "190": {
            "60": "-0.075917666",
            "61": "-0.145481004",
            "62": "0.590984037",
            "63": "0.429172282",
            "64": "0.417298307",
            "65": "0.618945191",
            "66": "0.531682844",
            "67": "0.476095725",
            "68": "0.193128871",
            "69": "0.17818145",
            "70": "-0.006378491",
            "71": "-0.023090201",
            "72": "-0.154600872",
            "73": "-0.209930466",
            "74": "-0.257914044",
            "75": "-0.290554959",
            "76": "-0.369714492",
            "77": "-0.485254307",
            "78": "-0.450870461",
            "79": "-0.670172524",
            "80": "-0.646662968",
            "81": "-0.469722092",
            "82": "-0.486053909",
            "83": "-0.89916891",
            "84": "-1.072758869"
        },
        "200": {
            "60": "-0.145481004",
            "61": "-0.153481155",
            "62": "0.650159781",
            "63": "0.947448652",
            "64": "1.198443144",
            "65": "1.145438035",
            "66": "0.668613066",
            "67": "0.428299522",
            "68": "0.445381715",
            "69": "0.327303186",
            "70": "0.228939608",
            "71": "0.189436185",
            "72": "0.028731063",
            "73": "-0.035783585",
            "74": "-0.0940422",
            "75": "-0.206299736",
            "76": "-0.237572893",
            "77": "-0.346462474",
            "78": "-0.250878641",
            "79": "-0.526770106",
            "80": "-0.433622615",
            "81": "-0.105935717",
            "82": "-0.182530199",
            "83": "-0.532547306",
            "84": "-0.89916891"
        },
        "210": {
            "60": "-0.145481004",
            "61": "0.638939613",
            "62": "0.760437815",
            "63": "1.03634798",
            "64": "1.034868127",
            "65": "1.141871539",
            "66": "0.713027034",
            "67": "0.814538701",
            "68": "0.661095307",
            "69": "0.475155702",
            "70": "0.412004835",
            "71": "0.220396235",
            "72": "0.194695517",
            "73": "0.172847381",
            "74": "0.010278998",
            "75": "-0.016181976",
            "76": "-0.132265708",
            "77": "-0.194298372",
            "78": "-0.292103474",
            "79": "-0.263922795",
            "80": "-0.335591952",
            "81": "-0.25180112",
            "82": "-0.12752747",
            "83": "-0.165925703",
            "84": "-0.488343293"
        },
        "220": {
            "60": "0.001511338",
            "61": "0.885098833",
            "62": "1.020451008",
            "63": "1.416769765",
            "64": "1.732493217",
            "65": "0.836005372",
            "66": "1.133670736",
            "67": "0.952231512",
            "68": "0.847407404",
            "69": "0.678179174",
            "70": "0.582141237",
            "71": "0.504515643",
            "72": "0.385435925",
            "73": "0.297494113",
            "74": "0.206123186",
            "75": "0.179179983",
            "76": "0.010151603",
            "77": "0.036023052",
            "78": "-0.104289522",
            "79": "-0.156061162",
            "80": "-0.28009678",
            "81": "-0.130523801",
            "82": "-0.426318453",
            "83": "-0.313036889",
            "84": "-0.077517676"
        },
        "230": {
            "60": "0.148503681",
            "61": "0.148503681",
            "62": "0.885098833",
            "63": "1.361485382",
            "64": "1.563591946",
            "65": "1.205356136",
            "66": "1.210956999",
            "67": "0.927856159",
            "68": "0.831361625",
            "69": "0.600781669",
            "70": "0.679980114",
            "71": "0.619253567",
            "72": "0.62289666",
            "73": "0.469092507",
            "74": "0.46143288",
            "75": "0.27296729",
            "76": "0.181362186",
            "77": "0.119609931",
            "78": "0.062824344",
            "79": "0.200998931",
            "80": "-0.607094624",
            "81": "-0.288490206",
            "82": "-0.322696443",
            "83": "0.167160027",
            "84": "-1.091116667"
        },
        "240": {
            "60": "0.148503681",
            "61": "0.148503681",
            "62": "0.760145126",
            "63": "1.131929905",
            "64": "1.055017251",
            "65": "0.952837729",
            "66": "0.938322786",
            "67": "0.904960858",
            "68": "1.205698027",
            "69": "0.695835337",
            "70": "0.762568078",
            "71": "0.597669901",
            "72": "0.586651725",
            "73": "0.52041646",
            "74": "0.496152527",
            "75": "0.368664247",
            "76": "0.2200761",
            "77": "0.057273886",
            "78": "0.070446542",
            "79": "-0.215881544",
            "80": "-0.04249161",
            "81": "-0.111380907",
            "82": "-0.222121929",
            "83": "0.096482192",
            "84": "-0.089147069"
        },
        "250": {
            "60": "0.148503681",
            "61": "0.148503681",
            "62": "0.7409057",
            "63": "0.625189311",
            "64": "0.986092415",
            "65": "0.962683392",
            "66": "1.204816165",
            "67": "1.463567944",
            "68": "1.00121698",
            "69": "0.984974987",
            "70": "1.009668272",
            "71": "0.547098757",
            "72": "0.867341762",
            "73": "0.699062742",
            "74": "0.563993874",
            "75": "0.436089425",
            "76": "0.260303787",
            "77": "0.28922168",
            "78": "0.218589562",
            "79": "0.082670645",
            "80": "0.066649129",
            "81": "-0.079940185",
            "82": "-0.100241874",
            "83": "0.653304179",
            "84": "0.614359667"
        },
        "260": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "0.721666274",
            "63": "0.237749424",
            "64": "0.38686362",
            "65": "0.886209464",
            "66": "0.668198628",
            "67": "0.577312942",
            "68": "0.914304738",
            "69": "0.808034884",
            "70": "0.663309823",
            "71": "0.878148033",
            "72": "0.978492832",
            "73": "0.701419841",
            "74": "0.542847477",
            "75": "0.628050416",
            "76": "0.35237846",
            "77": "0.286225893",
            "78": "0.498741134",
            "79": "-0.239882284",
            "80": "-0.040830321",
            "81": "0.038611911",
            "82": "-0.164242803",
            "83": "1.019770628",
            "84": "0.614359667"
        },
        "270": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.560135207",
            "63": "0.810882124",
            "64": "0.381230124",
            "65": "1.192405978",
            "66": "1.29370441",
            "67": "0.591992105",
            "68": "1.31745293",
            "69": "0.969840428",
            "70": "1.143847715",
            "71": "0.972953716",
            "72": "0.827697754",
            "73": "0.983848521",
            "74": "1.026143074",
            "75": "0.520051768",
            "76": "0.559950899",
            "77": "0.439960166",
            "78": "0.368273279",
            "79": "0.230144709",
            "80": "0.089729278",
            "81": "-0.012007532",
            "82": "0.013966614",
            "83": "-0.153459156",
            "84": "-0.011806338"
        },
        "280": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.092564969",
            "65": "1.463416756",
            "66": "1.856328306",
            "67": "2.489804154",
            "68": "0.956132536",
            "69": "1.032682273",
            "70": "1.204492696",
            "71": "1.196779128",
            "72": "1.053408767",
            "73": "1.143486598",
            "74": "0.723005255",
            "75": "0.872767013",
            "76": "0.72102536",
            "77": "0.58238287",
            "78": "0.68776339",
            "79": "0.605791966",
            "80": "0.817390029",
            "81": "-0.239498367",
            "82": "-0.087681223",
            "83": "-0.011806338",
            "84": "-0.011806338"
        },
        "290": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.791966954",
            "65": "1.96539117",
            "66": "2.008819152",
            "67": "2.061108568",
            "68": "1.129203202",
            "69": "0.997156845",
            "70": "1.059480438",
            "71": "1.189285147",
            "72": "1.176006061",
            "73": "1.409138098",
            "74": "0.805803623",
            "75": "1.066393531",
            "76": "0.363296276",
            "77": "1.192397611",
            "78": "0.365947018",
            "79": "0.832285818",
            "80": "0.97219012",
            "81": "0.912756793",
            "82": "-0.325101011",
            "83": "0.257449241",
            "84": "0.364236541"
        },
        "300": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.375892469",
            "65": "2.294826919",
            "66": "2.313528665",
            "67": "2.006170524",
            "68": "1.142021042",
            "69": "1.284858067",
            "70": "0.784132695",
            "71": "1.570155828",
            "72": "1.232992335",
            "73": "1.561788042",
            "74": "1.22666164",
            "75": "1.236563283",
            "76": "1.335260249",
            "77": "0.563073849",
            "78": "0.680237433",
            "79": "0.894122608",
            "80": "1.152407718",
            "81": "0.235390353",
            "82": "0.392077031",
            "83": "0.74027942",
            "84": "0.74027942"
        },
        "310": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.375892469",
            "65": "1.375892469",
            "66": "1.951840748",
            "67": "1.937131308",
            "68": "1.138897117",
            "69": "1.491748054",
            "70": "1.175065158",
            "71": "1.978010673",
            "72": "1.38458227",
            "73": "1.329810148",
            "74": "1.342433844",
            "75": "1.340549709",
            "76": "1.202376013",
            "77": "1.088496397",
            "78": "0.980389197",
            "79": "1.083009491",
            "80": "0.721108644",
            "81": "0.146010527",
            "82": "0.475188523",
            "83": "0.74027942",
            "84": "0.695225566"
        },
        "320": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.382114954",
            "66": "1.509495775",
            "67": "1.501010023",
            "68": "1.828116695",
            "69": "1.287085563",
            "70": "2.092827636",
            "71": "2.206915123",
            "72": "1.122987293",
            "73": "2.575282012",
            "74": "1.826741008",
            "75": "0.753559901",
            "76": "1.384430393",
            "77": "1.174599491",
            "78": "1.082348764",
            "79": "0.666654416",
            "80": "0.788255569",
            "81": "0.467773305",
            "82": "0.475188523",
            "83": "0.695225566",
            "84": "0.650171711"
        },
        "330": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.102860909",
            "66": "1.073218044",
            "67": "1.099684787",
            "68": "0.7368697",
            "69": "1.70189962",
            "70": "0.924746106",
            "71": "1.678925908",
            "72": "1.083903467",
            "73": "1.742249819",
            "74": "1.545606423",
            "75": "1.048527895",
            "76": "1.261204175",
            "77": "1.488196496",
            "78": "1.108368006",
            "79": "1.118369896",
            "80": "1.293130305",
            "81": "2.856687313",
            "82": "0.864510548",
            "83": "0.650171711",
            "84": "0.650171711"
        },
        "340": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "0.854481916",
            "67": "0.810724877",
            "68": "1.091846821",
            "69": "1.888947702",
            "70": "2.197013485",
            "71": "0.933586875",
            "72": "1.744210556",
            "73": "1.704721722",
            "74": "1.606176598",
            "75": "1.540925466",
            "76": "1.817776417",
            "77": "1.362637278",
            "78": "1.099351371",
            "79": "0.924732464",
            "80": "1.41878847",
            "81": "1.298621471",
            "82": "1.253832574",
            "83": "0.650171711",
            "84": "0.650171711"
        },
        "350": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "0.778641535",
            "67": "1.346048302",
            "68": "1.747639411",
            "69": "2.167979701",
            "70": "2.452235555",
            "71": "2.079788397",
            "72": "2.51755898",
            "73": "1.83324223",
            "74": "0.851896897",
            "75": "1.707388914",
            "76": "1.617136292",
            "77": "1.494812271",
            "78": "0.728739189",
            "79": "0.596871693",
            "80": "1.298621471",
            "81": "1.253832574",
            "82": "1.253832574",
            "83": "0.650171711",
            "84": "0.650171711"
        },
        "360": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "1.522796563",
            "68": "1.502972104",
            "69": "3.049263964",
            "70": "1.863068355",
            "71": "1.520825551",
            "72": "1.895961748",
            "73": "1.614448564",
            "74": "1.252916486",
            "75": "1.932007423",
            "76": "1.678738644",
            "77": "1.105282037",
            "78": "0.486918988",
            "79": "0.539421825",
            "80": "1.298621471",
            "81": "1.253832574",
            "82": "1.253832574",
            "83": "1.485232009",
            "84": "1.485232009"
        },
        "370": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "2.473619227",
            "69": "1.732889555",
            "70": "2.185032325",
            "71": "1.422872523",
            "72": "1.463867774",
            "73": "1.283284489",
            "74": "1.938110939",
            "75": "1.816240584",
            "76": "1.760798632",
            "77": "1.059341359",
            "78": "0.526358957",
            "79": "0.322374521",
            "80": "0.136363451",
            "81": "1.253832574",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        },
        "380": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "1.529211624",
            "69": "3.41802683",
            "70": "1.000978308",
            "71": "1.259309271",
            "72": "1.093524328",
            "73": "1.523418794",
            "74": "1.702867141",
            "75": "2.253728291",
            "76": "1.544155653",
            "77": "1.575303984",
            "78": "1.338558346",
            "79": "0.105327217",
            "80": "0.136363451",
            "81": "0.136363451",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        },
        "390": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "1.529211624",
            "69": "3.139329455",
            "70": "1.615204401",
            "71": "0.359288787",
            "72": "0.680994152",
            "73": "0.759921958",
            "74": "1.935513791",
            "75": "1.606008297",
            "76": "2.170586067",
            "77": "1.945676771",
            "78": "0.105327217",
            "79": "0.120845334",
            "80": "0.120845334",
            "81": "0.136363451",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        },
        "400": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "1.529211624",
            "69": "2.860632081",
            "70": "2.860632081",
            "71": "1.615204401",
            "72": "0.696813842",
            "73": "2.046114636",
            "74": "1.719685827",
            "75": "2.034110493",
            "76": "2.295816272",
            "77": "2.429967349",
            "78": "2.552795196",
            "79": "0.105327217",
            "80": "0.136363451",
            "81": "0.136363451",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        },
        "410": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "1.529211624",
            "69": "2.860632081",
            "70": "2.860632081",
            "71": "1.615204401",
            "72": "1.283295281",
            "73": "1.762015629",
            "74": "1.975635411",
            "75": "2.092462957",
            "76": "1.767619857",
            "77": "1.817480509",
            "78": "1.605674708",
            "79": "0.303812349",
            "80": "0.2200879",
            "81": "0.136363451",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        },
        "420": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "1.529211624",
            "69": "2.860632081",
            "70": "2.860632081",
            "71": "6.439426076",
            "72": "1.86977672",
            "73": "1.86977672",
            "74": "2.469803185",
            "75": "1.884318463",
            "76": "1.759826407",
            "77": "1.041562869",
            "78": "0.658554219",
            "79": "0.838155594",
            "80": "0.303812349",
            "81": "0.136363451",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        },
        "430": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "1.529211624",
            "69": "2.860632081",
            "70": "2.860632081",
            "71": "6.439426076",
            "72": "1.86977672",
            "73": "1.705354592",
            "74": "0.900375848",
            "75": "3.069829649",
            "76": "2.360102748",
            "77": "2.419818084",
            "78": "2.0778383",
            "79": "1.166210658",
            "80": "2.337578433",
            "81": "0.136363451",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        },
        "440": {
            "60": "1.560135207",
            "61": "1.560135207",
            "62": "1.569471732",
            "63": "1.569471732",
            "64": "1.502766969",
            "65": "1.502766969",
            "66": "2.639029105",
            "67": "2.084120365",
            "68": "1.529211624",
            "69": "2.860632081",
            "70": "2.860632081",
            "71": "6.439426076",
            "72": "1.86977672",
            "73": "1.540932463",
            "74": "0.900375848",
            "75": "3.069829649",
            "76": "3.650375848",
            "77": "3.826340079",
            "78": "3.050349383",
            "79": "2.150375848",
            "80": "3.569829649",
            "81": "0.136363451",
            "82": "1.253832574",
            "83": "2.320292307",
            "84": "2.320292307"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB654AA686 = function (val, param) {
    var info = {
        "26": {
            "60": "0.835836018",
            "61": "-1.591119778",
            "62": "-1.72721137",
            "63": "-1.189687061",
            "64": "-1.027968158",
            "65": "0.124784562",
            "66": "-2.337160596",
            "67": "-1.547668589",
            "68": "-0.918446947",
            "69": "-1.710314215",
            "70": "-0.773635758",
            "71": "-0.365098416",
            "72": "-1.648545163",
            "73": "-0.484435464",
            "74": "0.49601797",
            "75": "-0.412678648",
            "76": "-1.321375267",
            "77": "-0.785108549",
            "78": "-0.746851494",
            "79": "-1.183696084",
            "80": "-1.183696084",
            "81": "-1.81228704",
            "82": "-0.117518216",
            "83": "1.006874237",
            "84": "1.006874237"
        },
        "27": {
            "60": "-1.450216727",
            "61": "-1.591119778",
            "62": "-1.473587896",
            "63": "-0.957337388",
            "64": "-1.301047682",
            "65": "-0.922961083",
            "66": "-0.695803197",
            "67": "-0.538849734",
            "68": "-0.584130552",
            "69": "-0.580424805",
            "70": "-1.025021899",
            "71": "-0.365098416",
            "72": "-1.648545163",
            "73": "-0.484435464",
            "74": "0.330079889",
            "75": "-0.412678648",
            "76": "-1.321375267",
            "77": "-0.785108549",
            "78": "-0.746851494",
            "79": "-1.183696084",
            "80": "-1.183696084",
            "81": "-1.81228704",
            "82": "-0.117518216",
            "83": "1.006874237",
            "84": "1.006874237"
        },
        "28": {
            "60": "-1.328935862",
            "61": "-0.958726861",
            "62": "-0.805961887",
            "63": "-0.398010509",
            "64": "-0.511321388",
            "65": "-0.778568042",
            "66": "-0.528252976",
            "67": "-0.661677878",
            "68": "-0.49230709",
            "69": "-0.363733792",
            "70": "-0.959186693",
            "71": "-0.636350991",
            "72": "-0.573951554",
            "73": "-0.775146076",
            "74": "-0.301062837",
            "75": "-0.453905764",
            "76": "-1.321375267",
            "77": "-0.785108549",
            "78": "-0.746851494",
            "79": "-1.183696084",
            "80": "-1.183696084",
            "81": "-1.81228704",
            "82": "-0.117518216",
            "83": "1.006874237",
            "84": "1.006874237"
        },
        "29": {
            "60": "0.080181212",
            "61": "-0.292558225",
            "62": "-0.67630126",
            "63": "-0.532043719",
            "64": "-0.507551534",
            "65": "-0.423426118",
            "66": "-0.637633415",
            "67": "-0.384978796",
            "68": "-0.616600212",
            "69": "-0.621672196",
            "70": "-0.694531371",
            "71": "-0.431749855",
            "72": "-0.437892612",
            "73": "-0.586574866",
            "74": "-0.119245791",
            "75": "-0.412071637",
            "76": "-0.513412986",
            "77": "-0.785108549",
            "78": "-0.746851494",
            "79": "-1.183696084",
            "80": "-1.183696084",
            "81": "-1.81228704",
            "82": "-0.117518216",
            "83": "1.006874237",
            "84": "1.006874237"
        },
        "30": {
            "60": "0.589741806",
            "61": "0.113191448",
            "62": "-0.547004165",
            "63": "-0.049390818",
            "64": "-0.156214359",
            "65": "-0.201053047",
            "66": "-0.454758417",
            "67": "-0.368637747",
            "68": "-0.435746395",
            "69": "-0.469669259",
            "70": "-0.626935429",
            "71": "-0.458510635",
            "72": "-0.686676865",
            "73": "-0.494678555",
            "74": "-0.458695074",
            "75": "-0.486169015",
            "76": "-0.49783301",
            "77": "0.02154216",
            "78": "-0.746851494",
            "79": "-1.183696084",
            "80": "-1.183696084",
            "81": "-1.81228704",
            "82": "-0.117518216",
            "83": "1.006874237",
            "84": "1.006874237"
        },
        "31": {
            "60": "0.393051447",
            "61": "0.04292066",
            "62": "-0.122809965",
            "63": "-0.093780664",
            "64": "-0.053313456",
            "65": "-0.017740004",
            "66": "-0.156851283",
            "67": "-0.209578265",
            "68": "-0.267469879",
            "69": "-0.288831226",
            "70": "-0.359141975",
            "71": "-0.338733357",
            "72": "-0.498345377",
            "73": "-0.42385451",
            "74": "-0.376285482",
            "75": "-0.676475759",
            "76": "-0.509205542",
            "77": "-0.364455502",
            "78": "-0.051143333",
            "79": "-0.812848129",
            "80": "-1.183696084",
            "81": "-1.81228704",
            "82": "-0.117518216",
            "83": "1.006874237",
            "84": "1.006874237"
        },
        "32": {
            "60": "0.083706105",
            "61": "-0.073658573",
            "62": "0.301498496",
            "63": "0.393081965",
            "64": "0.123283709",
            "65": "0.171670521",
            "66": "0.125437202",
            "67": "0.02980961",
            "68": "-0.05825471",
            "69": "-0.156125611",
            "70": "-0.174185299",
            "71": "-0.196770331",
            "72": "-0.347185446",
            "73": "-0.330224767",
            "74": "-0.279707477",
            "75": "-0.260828836",
            "76": "-0.373305755",
            "77": "-0.356037037",
            "78": "-0.046836765",
            "79": "-0.83791821",
            "80": "-0.83791821",
            "81": "-1.81228704",
            "82": "-0.117518216",
            "83": "1.006874237",
            "84": "0.649945478"
        },
        "33": {
            "60": "0.530307841",
            "61": "0.18973449",
            "62": "0.738684445",
            "63": "-0.29615075",
            "64": "0.138792807",
            "65": "0.231251775",
            "66": "0.15664531",
            "67": "0.01499563",
            "68": "-0.000238689",
            "69": "-0.056922891",
            "70": "-0.056179565",
            "71": "-0.108815377",
            "72": "-0.244617721",
            "73": "-0.291721186",
            "74": "-0.177356517",
            "75": "-0.123754349",
            "76": "-0.297647787",
            "77": "-0.439790165",
            "78": "-0.422690285",
            "79": "-1.134385431",
            "80": "-1.262670511",
            "81": "-0.132963825",
            "82": "-0.157906118",
            "83": "0.087749252",
            "84": "0.649945478"
        },
        "34": {
            "60": "0.55317742",
            "61": "0.513058777",
            "62": "0.5069163",
            "63": "0.109309196",
            "64": "0.084740065",
            "65": "0.331346327",
            "66": "0.361641067",
            "67": "0.114753957",
            "68": "0.128764502",
            "69": "0.108720989",
            "70": "0.059949842",
            "71": "0.075009074",
            "72": "-0.095781434",
            "73": "-0.126265355",
            "74": "-0.085536142",
            "75": "-0.091033971",
            "76": "-0.241812179",
            "77": "-0.487255071",
            "78": "-0.279392987",
            "79": "-0.956722829",
            "80": "-0.453470296",
            "81": "0.144349109",
            "82": "0.313398456",
            "83": "1.456086902",
            "84": "-0.356928759"
        },
        "35": {
            "60": "0.131348836",
            "61": "0.658564496",
            "62": "0.299782578",
            "63": "0.108607323",
            "64": "-0.019069527",
            "65": "-0.018729841",
            "66": "0.116855844",
            "67": "-0.02317166",
            "68": "0.0787213",
            "69": "0.093845944",
            "70": "0.102703586",
            "71": "0.025997482",
            "72": "-0.093601342",
            "73": "-0.167444503",
            "74": "-0.074092548",
            "75": "-0.032224993",
            "76": "-0.299292671",
            "77": "-0.435651322",
            "78": "-0.098991154",
            "79": "-0.885538161",
            "80": "-0.48395886",
            "81": "-0.03048139",
            "82": "-0.267252219",
            "83": "0.424458229",
            "84": "-1.006874237"
        },
        "36": {
            "60": "0.131348836",
            "61": "-0.939133933",
            "62": "-1.330273922",
            "63": "-0.040494439",
            "64": "0.062241788",
            "65": "0.274476343",
            "66": "0.174047172",
            "67": "0.14542748",
            "68": "0.134800964",
            "69": "0.180873238",
            "70": "0.120976417",
            "71": "0.100054362",
            "72": "0.039053305",
            "73": "-0.040820489",
            "74": "0.055266223",
            "75": "0.006848353",
            "76": "0.066240778",
            "77": "0.057902565",
            "78": "-0.064572829",
            "79": "-0.938187245",
            "80": "-0.095032138",
            "81": "-0.185135265",
            "82": "0.716324118",
            "83": "1.664326163",
            "84": "0.328725963"
        },
        "37": {
            "60": "0.28496241",
            "61": "-3.165920468",
            "62": "-1.034872003",
            "63": "0.033635124",
            "64": "0.200780862",
            "65": "0.152616989",
            "66": "0.216066798",
            "67": "0.023217564",
            "68": "0.100645892",
            "69": "0.26195747",
            "70": "0.184530144",
            "71": "0.0576559",
            "72": "-0.053315757",
            "73": "-0.12911558",
            "74": "-0.169542829",
            "75": "0.09790506",
            "76": "-0.058147321",
            "77": "0.034685301",
            "78": "-0.155651538",
            "79": "-0.965650716",
            "80": "-0.036045866",
            "81": "-0.271871726",
            "82": "-1.236598968",
            "83": "0.563215713",
            "84": "-3.836755256"
        },
        "38": {
            "60": "0.438575985",
            "61": "1.805800529",
            "62": "-0.10358298",
            "63": "-0.061328217",
            "64": "-0.303441212",
            "65": "0.346028188",
            "66": "0.239117214",
            "67": "0.018674352",
            "68": "0.090384645",
            "69": "0.277899309",
            "70": "0.242893281",
            "71": "0.260126452",
            "72": "0.100001792",
            "73": "0.028850314",
            "74": "0.097141761",
            "75": "0.207577283",
            "76": "0.072962504",
            "77": "0.358286598",
            "78": "0.189031245",
            "79": "-0.297588881",
            "80": "1.003068893",
            "81": "0.159676033",
            "82": "-0.795841572",
            "83": "-1.642381561",
            "84": "-1.362609867"
        },
        "39": {
            "60": "0.438575985",
            "61": "0.616281853",
            "62": "0.11037545",
            "63": "-0.166442942",
            "64": "0.268493988",
            "65": "0.365687009",
            "66": "0.106759611",
            "67": "0.026453906",
            "68": "0.24779286",
            "69": "0.220381119",
            "70": "0.183507103",
            "71": "0.167227958",
            "72": "0.105400635",
            "73": "0.044520148",
            "74": "-0.072689369",
            "75": "0.298758505",
            "76": "0.313139856",
            "77": "0.345691828",
            "78": "0.161856347",
            "79": "-0.204861081",
            "80": "0.712701434",
            "81": "0.140691733",
            "82": "-0.22204477",
            "83": "-0.089316298",
            "84": "-3.836755256"
        },
        "40": {
            "60": "0.438575985",
            "61": "-0.573236822",
            "62": "-1.551389906",
            "63": "0.396361161",
            "64": "1.045611517",
            "65": "0.423453135",
            "66": "0.255443479",
            "67": "0.237439433",
            "68": "0.307447648",
            "69": "0.373658521",
            "70": "0.350343631",
            "71": "0.375132269",
            "72": "0.469267853",
            "73": "0.274667456",
            "74": "0.369011088",
            "75": "0.301279726",
            "76": "0.358571104",
            "77": "0.576749991",
            "78": "0.161372441",
            "79": "-0.254306138",
            "80": "0.726685647",
            "81": "0.555452733",
            "82": "0.439731848",
            "83": "0.164420805",
            "84": "-3.836755256"
        },
        "41": {
            "60": "0.438575985",
            "61": "0.243308681",
            "62": "-0.262597722",
            "63": "-1.225074038",
            "64": "0.746135176",
            "65": "0.444801102",
            "66": "0.398607792",
            "67": "-0.183277337",
            "68": "0.47170678",
            "69": "0.524803662",
            "70": "0.511086745",
            "71": "0.434086141",
            "72": "0.74475764",
            "73": "0.506493576",
            "74": "0.21254687",
            "75": "0.376907015",
            "76": "0.406014939",
            "77": "0.347583652",
            "78": "-0.451035534",
            "79": "-0.002988955",
            "80": "0.19170244",
            "81": "0.355008992",
            "82": "-0.00558008",
            "83": "-0.880257891",
            "84": "-1.714968113"
        },
        "42": {
            "60": "0.438575985",
            "61": "1.059854184",
            "62": "1.059854184",
            "63": "0.814934571",
            "64": "0.570014959",
            "65": "0.426504454",
            "66": "0.669632873",
            "67": "0.293213823",
            "68": "0.31499238",
            "69": "0.517867909",
            "70": "0.118529862",
            "71": "0.5516422",
            "72": "0.541677074",
            "73": "0.409143114",
            "74": "0.419270901",
            "75": "0.428183193",
            "76": "0.535959203",
            "77": "0.858605212",
            "78": "0.506273563",
            "79": "0.628288959",
            "80": "0.541913041",
            "81": "0.228365147",
            "82": "-0.663207542",
            "83": "-1.714968113",
            "84": "-1.714968113"
        },
        "43": {
            "60": "0.438575985",
            "61": "1.059854184",
            "62": "1.059854184",
            "63": "1.532052195",
            "64": "1.053015984",
            "65": "0.043305594",
            "66": "0.485142291",
            "67": "0.214254109",
            "68": "1.114029208",
            "69": "0.801505758",
            "70": "0.93828974",
            "71": "1.402574271",
            "72": "0.623118743",
            "73": "0.46105629",
            "74": "0.364571648",
            "75": "0.56915728",
            "76": "0.36946309",
            "77": "0.911608518",
            "78": "0.559792909",
            "79": "0.482901633",
            "80": "0.292621533",
            "81": "0.193609677",
            "82": "-0.023440672",
            "83": "-1.714968113",
            "84": "2.754446071"
        },
        "44": {
            "60": "0.670476329",
            "61": "0.670476329",
            "62": "1.294915763",
            "63": "1.541773249",
            "64": "0.392309848",
            "65": "-0.504122388",
            "66": "0.26559129",
            "67": "-0.142912212",
            "68": "0.426394642",
            "69": "0.536435406",
            "70": "0.418071053",
            "71": "0.557470511",
            "72": "0.528455995",
            "73": "0.447391652",
            "74": "0.348778888",
            "75": "0.167596097",
            "76": "0.683265949",
            "77": "1.137927792",
            "78": "0.398369337",
            "79": "0.230293082",
            "80": "0.14938169",
            "81": "-0.02016833",
            "82": "0.616326199",
            "83": "2.754446071",
            "84": "2.754446071"
        },
        "45": {
            "60": "0.670476329",
            "61": "0.670476329",
            "62": "0.982696046",
            "63": "0.867243861",
            "64": "0.830725286",
            "65": "-0.014139503",
            "66": "0.063931822",
            "67": "-0.315476193",
            "68": "0.307539549",
            "69": "0.35171237",
            "70": "0.41270168",
            "71": "0.701531066",
            "72": "0.635309488",
            "73": "1.072768301",
            "74": "0.305364735",
            "75": "0.040855947",
            "76": "0.264579563",
            "77": "0.121658418",
            "78": "-0.021981421",
            "79": "0.601693853",
            "80": "0.048488075",
            "81": "1.029780409",
            "82": "1.200485584",
            "83": "2.754446071",
            "84": "2.754446071"
        },
        "46": {
            "60": "0.670476329",
            "61": "0.670476329",
            "62": "0.670476329",
            "63": "-0.287127482",
            "64": "0.309580065",
            "65": "0.148266535",
            "66": "0.064999635",
            "67": "-0.516573886",
            "68": "0.315371019",
            "69": "-0.056370609",
            "70": "0.179492232",
            "71": "0.288286854",
            "72": "0.23848259",
            "73": "-0.269870542",
            "74": "0.167066893",
            "75": "0.039894467",
            "76": "0.118135724",
            "77": "-0.046085641",
            "78": "0.049285548",
            "79": "0.038856919",
            "80": "1.169690212",
            "81": "0.621562957",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "2.754446071"
        },
        "47": {
            "60": "0.527083334",
            "61": "0.527083334",
            "62": "0.527083334",
            "63": "-1.146337539",
            "64": "-1.146337539",
            "65": "-1.041890918",
            "66": "-0.462788082",
            "67": "-0.492361483",
            "68": "0.352627463",
            "69": "-0.250839835",
            "70": "0.085194245",
            "71": "0.194783976",
            "72": "-0.033955276",
            "73": "-0.356271201",
            "74": "0.007402023",
            "75": "0.215063943",
            "76": "0.183372943",
            "77": "0.557080903",
            "78": "-0.453882639",
            "79": "0.495239353",
            "80": "-0.541519056",
            "81": "1.78464497",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "2.754446071"
        },
        "48": {
            "60": "0.383690339",
            "61": "0.383690339",
            "62": "0.383690339",
            "63": "-2.005547596",
            "64": "-2.394832538",
            "65": "-1.537564248",
            "66": "-1.108930103",
            "67": "-0.788511432",
            "68": "0.891022667",
            "69": "0.081943879",
            "70": "0.095949488",
            "71": "0.208933725",
            "72": "-0.099907622",
            "73": "-0.301301189",
            "74": "0.124603392",
            "75": "0.43929314",
            "76": "-0.141334722",
            "77": "0.480165441",
            "78": "0.488819025",
            "79": "-0.411647797",
            "80": "-0.615905004",
            "81": "1.78464497",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "2.754446071"
        },
        "49": {
            "60": "0.383690339",
            "61": "0.383690339",
            "62": "-0.610581193",
            "63": "-1.604852724",
            "64": "-1.927390785",
            "65": "-1.423556784",
            "66": "0.273155745",
            "67": "-0.775430891",
            "68": "0.865262685",
            "69": "-0.406597366",
            "70": "-0.240002298",
            "71": "-0.006000415",
            "72": "-0.177270615",
            "73": "-0.278313415",
            "74": "-0.151540887",
            "75": "0.434000488",
            "76": "-0.709921876",
            "77": "1.220290034",
            "78": "-0.572221454",
            "79": "-0.615905004",
            "80": "-0.615905004",
            "81": "1.78464497",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "2.754446071"
        },
        "50": {
            "60": "0.336814716",
            "61": "0.336814716",
            "62": "-1.604852724",
            "63": "-1.727043349",
            "64": "-1.269682164",
            "65": "-0.373594538",
            "66": "-0.648577246",
            "67": "-1.16949986",
            "68": "-0.315426248",
            "69": "0.091033523",
            "70": "-0.762707631",
            "71": "-0.321964709",
            "72": "-0.125219689",
            "73": "-0.578667286",
            "74": "-0.846282316",
            "75": "0.183717267",
            "76": "-1.675941636",
            "77": "-1.194723466",
            "78": "-0.521018028",
            "79": "-1.039180922",
            "80": "-1.284266656",
            "81": "-1.284266656",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "2.754446071"
        },
        "51": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "-0.657456816",
            "63": "-1.604852724",
            "64": "-1.849233974",
            "65": "-0.354959795",
            "66": "0.801270028",
            "67": "-1.182630114",
            "68": "0.198882269",
            "69": "-0.438238418",
            "70": "-0.853517912",
            "71": "-0.380402132",
            "72": "-0.24010124",
            "73": "-0.85676232",
            "74": "-0.435712688",
            "75": "0.19295537",
            "76": "-1.954319411",
            "77": "-0.542707672",
            "78": "-2.147513265",
            "79": "-1.654618527",
            "80": "-1.284266656",
            "81": "-1.284266656",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "1.771869268"
        },
        "52": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "0.289939093",
            "63": "-1.604852724",
            "64": "-1.849233974",
            "65": "1.684733655",
            "66": "-0.49319699",
            "67": "-0.253466901",
            "68": "-0.814033249",
            "69": "-0.859382326",
            "70": "-0.962238204",
            "71": "-0.111832136",
            "72": "-0.455776119",
            "73": "-1.352715951",
            "74": "0.398018927",
            "75": "0.597259054",
            "76": "-2.338498315",
            "77": "-0.673145421",
            "78": "-1.042102591",
            "79": "-2.270056132",
            "80": "-1.284266656",
            "81": "-1.284266656",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "0.789292466"
        },
        "53": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "0.289939093",
            "63": "-1.604852724",
            "64": "-0.54077883",
            "65": "-0.54077883",
            "66": "0.506135945",
            "67": "-0.809611503",
            "68": "0.541112093",
            "69": "-0.752461172",
            "70": "-1.365327746",
            "71": "-0.803799882",
            "72": "-0.600640946",
            "73": "-1.352715951",
            "74": "-0.178922058",
            "75": "0.446877585",
            "76": "-1.18166406",
            "77": "-1.658338871",
            "78": "-2.027310685",
            "79": "-0.19411785",
            "80": "-1.284266656",
            "81": "-1.284266656",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "0.789292466"
        },
        "54": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "0.289939093",
            "63": "-1.604852724",
            "64": "-0.54077883",
            "65": "-0.606620298",
            "66": "-0.395560374",
            "67": "0.091802491",
            "68": "-0.18823986",
            "69": "-0.645540018",
            "70": "-1.768417287",
            "71": "-1.211833966",
            "72": "-0.745505773",
            "73": "-0.638989046",
            "74": "-0.532472318",
            "75": "-0.430752768",
            "76": "-0.889338103",
            "77": "-1.262667562",
            "78": "-0.957635946",
            "79": "-0.395670488",
            "80": "-0.19411785",
            "81": "-0.063998142",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "0.789292466"
        },
        "55": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "0.289939093",
            "63": "-1.604852724",
            "64": "-0.54077883",
            "65": "-0.54077883",
            "66": "-0.523789774",
            "67": "-0.042872041",
            "68": "-0.578013923",
            "69": "-0.987235115",
            "70": "-1.763130712",
            "71": "-1.579570468",
            "72": "-0.308955526",
            "73": "0.329444671",
            "74": "-0.929883335",
            "75": "-0.350869626",
            "76": "-0.648241012",
            "77": "-2.079384468",
            "78": "-0.798775763",
            "79": "-0.19411785",
            "80": "1.156270371",
            "81": "1.156270371",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "0.789292466"
        },
        "56": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "0.289939093",
            "63": "-1.604852724",
            "64": "-0.54077883",
            "65": "-0.861695487",
            "66": "0.607346273",
            "67": "-0.334157576",
            "68": "-1.032291669",
            "69": "-2.491599444",
            "70": "-2.541270929",
            "71": "-1.787240641",
            "72": "-0.779677371",
            "73": "0.180485371",
            "74": "-0.756583757",
            "75": "-0.92704439",
            "76": "-1.205975667",
            "77": "-1.174258058",
            "78": "-1.515236615",
            "79": "1.156270371",
            "80": "1.156270371",
            "81": "1.156270371",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "0.789292466"
        },
        "57": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "0.289939093",
            "63": "-1.604852724",
            "64": "-0.54077883",
            "65": "-1.182612143",
            "66": "0.607346273",
            "67": "-0.395016632",
            "68": "-2.52361034",
            "69": "-2.49990323",
            "70": "-2.589290316",
            "71": "-2.493744592",
            "72": "0.211730374",
            "73": "-0.971719523",
            "74": "-2.036177932",
            "75": "-1.11495556",
            "76": "-1.336232725",
            "77": "0.440482261",
            "78": "-0.337452194",
            "79": "0.351414656",
            "80": "1.156270371",
            "81": "1.156270371",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "0.789292466"
        },
        "58": {
            "60": "0.289939093",
            "61": "0.289939093",
            "62": "0.289939093",
            "63": "-1.604852724",
            "64": "-0.54077883",
            "65": "-1.182612143",
            "66": "0.607346273",
            "67": "1.119579647",
            "68": "-2.911975814",
            "69": "-3.258803666",
            "70": "-2.307225235",
            "71": "-2.473217543",
            "72": "-0.842779532",
            "73": "-1.79205937",
            "74": "-2.745061513",
            "75": "-0.833629794",
            "76": "-2.180164508",
            "77": "2.396201138",
            "78": "-0.337452194",
            "79": "0.351414656",
            "80": "1.156270371",
            "81": "1.156270371",
            "82": "1.78464497",
            "83": "2.754446071",
            "84": "0.789292466"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB691AA725 = function (val, param) {
    var info = {
        "100": {
            "60": "-0.220002381",
            "61": "-3.034893869",
            "62": "2.30741163",
            "63": "0.9901445",
            "64": "-0.291376021",
            "65": "-1.500632575",
            "66": "-1.581096381",
            "67": "-0.238146288",
            "68": "0.889062823",
            "69": "-0.265967717",
            "70": "-0.330678931",
            "71": "0.659350238",
            "72": "0.195012825",
            "73": "0.02105233",
            "74": "-0.106221686",
            "75": "-0.862490164",
            "76": "0.133699829",
            "77": "1.430441384",
            "78": "0.34914438",
            "79": "0.339032337",
            "80": "0.339032337",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "110": {
            "60": "0.427812436",
            "61": "-0.211908752",
            "62": "0.303285978",
            "63": "0.005291645",
            "64": "-0.291376021",
            "65": "0.993279089",
            "66": "0.351984174",
            "67": "0.27212102",
            "68": "0.496306685",
            "69": "0.227345633",
            "70": "-0.330678931",
            "71": "0.015871522",
            "72": "0.195012825",
            "73": "0.02105233",
            "74": "-0.484355925",
            "75": "-0.862490164",
            "76": "0.133699829",
            "77": "1.430441384",
            "78": "0.34914438",
            "79": "0.339032337",
            "80": "0.339032337",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "120": {
            "60": "0.127691617",
            "61": "0.644098224",
            "62": "0.149962271",
            "63": "0.079610075",
            "64": "-0.115790264",
            "65": "0.090621616",
            "66": "0.161243828",
            "67": "-0.031933674",
            "68": "0.703723786",
            "69": "0.010705533",
            "70": "-0.047584012",
            "71": "0.14317644",
            "72": "0.600751658",
            "73": "0.02105233",
            "74": "0.052700921",
            "75": "-0.862490164",
            "76": "0.133699829",
            "77": "1.430441384",
            "78": "0.34914438",
            "79": "0.339032337",
            "80": "0.339032337",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "130": {
            "60": "0.155917892",
            "61": "-0.351931923",
            "62": "0.167633766",
            "63": "0.147616806",
            "64": "0.250662262",
            "65": "-0.075970456",
            "66": "-0.037524489",
            "67": "0.128853773",
            "68": "0.235403021",
            "69": "-0.113105516",
            "70": "-0.02589329",
            "71": "0.238679813",
            "72": "0.289593167",
            "73": "0.241400497",
            "74": "0.101755673",
            "75": "0.321998146",
            "76": "0.133699829",
            "77": "1.430441384",
            "78": "0.34914438",
            "79": "0.339032337",
            "80": "0.339032337",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "140": {
            "60": "-0.929877936",
            "61": "0.158879164",
            "62": "0.014074949",
            "63": "0.185538936",
            "64": "-0.148658512",
            "65": "-0.018991553",
            "66": "0.310098021",
            "67": "0.060402012",
            "68": "0.149527688",
            "69": "-0.019205079",
            "70": "0.24531587",
            "71": "-0.026020568",
            "72": "0.17182095",
            "73": "0.060546612",
            "74": "0.091088731",
            "75": "0.167511848",
            "76": "0.133699829",
            "77": "1.430441384",
            "78": "0.34914438",
            "79": "0.339032337",
            "80": "0.339032337",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "150": {
            "60": "-0.253991667",
            "61": "0.500651567",
            "62": "-0.176524126",
            "63": "0.121623672",
            "64": "0.185300651",
            "65": "-0.000613292",
            "66": "0.077206466",
            "67": "0.037546635",
            "68": "0.124916353",
            "69": "0.08587716",
            "70": "0.17471067",
            "71": "0.060595005",
            "72": "0.264571348",
            "73": "0.340240242",
            "74": "0.057602521",
            "75": "0.193819985",
            "76": "0.68592471",
            "77": "0.156140855",
            "78": "0.149344517",
            "79": "0.344088359",
            "80": "0.339032337",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "160": {
            "60": "0.092113486",
            "61": "-0.630720284",
            "62": "-0.16646249",
            "63": "0.17345373",
            "64": "0.07144347",
            "65": "0.019544465",
            "66": "-0.01628533",
            "67": "0.023240582",
            "68": "-0.03025899",
            "69": "0.08161482",
            "70": "0.077597456",
            "71": "0.047740837",
            "72": "0.384686508",
            "73": "0.158538909",
            "74": "0.017473806",
            "75": "0.042021884",
            "76": "0.433512761",
            "77": "0.293349503",
            "78": "-0.194000855",
            "79": "0.25755341",
            "80": "0.483330542",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "170": {
            "60": "-0.101596667",
            "61": "0.104964381",
            "62": "0.000579382",
            "63": "0.035724821",
            "64": "0.006900504",
            "65": "0.196283818",
            "66": "-0.001530539",
            "67": "0.008479905",
            "68": "0.064904099",
            "69": "0.079046336",
            "70": "0.046843907",
            "71": "0.122164422",
            "72": "0.220430214",
            "73": "0.14684147",
            "74": "0.045024913",
            "75": "0.292889905",
            "76": "0.12400771",
            "77": "0.406446364",
            "78": "0.817159561",
            "79": "0.686434327",
            "80": "0.627628747",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "180": {
            "60": "0",
            "61": "0.883848123",
            "62": "0.823465696",
            "63": "0.261740394",
            "64": "0.310919091",
            "65": "-0.067614284",
            "66": "-0.02358305",
            "67": "0.112824729",
            "68": "0.103339827",
            "69": "0.028402636",
            "70": "-0.023840997",
            "71": "0.080724642",
            "72": "0.192386786",
            "73": "0.21483006",
            "74": "0.001213021",
            "75": "-0.007358317",
            "76": "0.221870057",
            "77": "0.606482419",
            "78": "0.486294681",
            "79": "0.502317635",
            "80": "-0.265275761",
            "81": "-0.097538009",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "190": {
            "60": "0",
            "61": "0",
            "62": "0.616258329",
            "63": "-0.315755466",
            "64": "-0.303864723",
            "65": "-0.005353287",
            "66": "0.135086728",
            "67": "0.186024143",
            "68": "0.162335603",
            "69": "0.033682995",
            "70": "-0.034548537",
            "71": "0.091177836",
            "72": "0.112025564",
            "73": "0.127809495",
            "74": "0.077505213",
            "75": "-0.002680569",
            "76": "0.264405728",
            "77": "0.246512043",
            "78": "0.156115488",
            "79": "0.543493199",
            "80": "0.536361279",
            "81": "0.522443394",
            "82": "-0.097538009",
            "83": "0",
            "84": "0"
        },
        "200": {
            "60": "0",
            "61": "0.270177147",
            "62": "0.055296729",
            "63": "0.254124908",
            "64": "0.532799004",
            "65": "0.033257638",
            "66": "-0.036293008",
            "67": "0.068087704",
            "68": "0.009280651",
            "69": "-0.111163509",
            "70": "-0.135463443",
            "71": "-0.023188865",
            "72": "0.087431832",
            "73": "0.09143063",
            "74": "-0.030607687",
            "75": "-0.04040632",
            "76": "0.128607503",
            "77": "0.357962083",
            "78": "0.468251866",
            "79": "0.692704049",
            "80": "0.701472387",
            "81": "1.131647259",
            "82": "0.55313436",
            "83": "-0.279286708",
            "84": "0"
        },
        "210": {
            "60": "0",
            "61": "-0.358514174",
            "62": "0.026951191",
            "63": "0.22295793",
            "64": "0.310720452",
            "65": "-0.025118095",
            "66": "0.03714105",
            "67": "0.180878184",
            "68": "0.024094684",
            "69": "-0.032427097",
            "70": "0.017483289",
            "71": "0.004936322",
            "72": "0.024853416",
            "73": "0.10663258",
            "74": "-0.068855474",
            "75": "0.001638601",
            "76": "0.049618302",
            "77": "0.283007405",
            "78": "-0.04501294",
            "79": "0.396899806",
            "80": "0.551745954",
            "81": "0.665960301",
            "82": "0.756156224",
            "83": "-0.558573416",
            "84": "-0.558573416"
        },
        "220": {
            "60": "0",
            "61": "0.623525256",
            "62": "0.048776843",
            "63": "0.29728037",
            "64": "0.218692755",
            "65": "0.069815395",
            "66": "0.032754437",
            "67": "0.29679489",
            "68": "0.029877896",
            "69": "0.030985929",
            "70": "-0.130345014",
            "71": "-0.023408761",
            "72": "-0.072001049",
            "73": "0.106124305",
            "74": "-0.03720151",
            "75": "-0.109848206",
            "76": "-0.074843973",
            "77": "-0.023085673",
            "78": "-0.102132259",
            "79": "0.386959523",
            "80": "-0.344505205",
            "81": "0.199208913",
            "82": "-0.248294745",
            "83": "-0.558573416",
            "84": "-1.117146833"
        },
        "230": {
            "60": "0",
            "61": "0",
            "62": "0.623525256",
            "63": "0.410488858",
            "64": "-0.084238516",
            "65": "0.634030169",
            "66": "0.114093032",
            "67": "0.119266963",
            "68": "-0.018536935",
            "69": "-0.276174679",
            "70": "-0.177997441",
            "71": "-0.254611982",
            "72": "-0.189322162",
            "73": "0.008049002",
            "74": "-0.113003663",
            "75": "-0.117156807",
            "76": "-0.14602967",
            "77": "-0.371027804",
            "78": "0.063303478",
            "79": "0.274638652",
            "80": "-0.049636409",
            "81": "-0.030305128",
            "82": "-0.035263312",
            "83": "-0.243648559",
            "84": "0"
        },
        "240": {
            "60": "0",
            "61": "0",
            "62": "0.433272884",
            "63": "-0.676965191",
            "64": "-0.552455941",
            "65": "-0.109689985",
            "66": "0.134584208",
            "67": "0.175024231",
            "68": "-0.021652562",
            "69": "-0.14220071",
            "70": "-0.270183816",
            "71": "-0.292953786",
            "72": "-0.201831027",
            "73": "-0.20056541",
            "74": "-0.210786319",
            "75": "-0.380311335",
            "76": "-0.171120072",
            "77": "-0.289686025",
            "78": "-0.3298919",
            "79": "-0.120560675",
            "80": "-0.825550687",
            "81": "-0.492255103",
            "82": "0.098967904",
            "83": "0.042159001",
            "84": "0.419899809"
        },
        "250": {
            "60": "0",
            "61": "0",
            "62": "-0.310965611",
            "63": "-0.095846788",
            "64": "-0.922673397",
            "65": "-0.810614101",
            "66": "-0.843806394",
            "67": "0.095519911",
            "68": "-0.276895792",
            "69": "-0.173195311",
            "70": "0.048658257",
            "71": "-0.374143983",
            "72": "-0.069170657",
            "73": "-0.144322113",
            "74": "-0.324156361",
            "75": "-0.395969629",
            "76": "-0.247043622",
            "77": "-0.588620488",
            "78": "-0.484318697",
            "79": "-0.225679591",
            "80": "-0.532167851",
            "81": "-0.345924538",
            "82": "-0.579446969",
            "83": "0.296947256",
            "84": "-0.264305073"
        },
        "260": {
            "60": "0",
            "61": "0",
            "62": "-1.055204106",
            "63": "-0.47816104",
            "64": "-0.523248294",
            "65": "-0.616829009",
            "66": "-0.515302784",
            "67": "0.086526025",
            "68": "-0.0738691",
            "69": "-0.184620913",
            "70": "-0.275374058",
            "71": "-0.254345525",
            "72": "-0.309991811",
            "73": "0.018945188",
            "74": "-0.257463523",
            "75": "-0.097172845",
            "76": "0.123435404",
            "77": "-0.243827783",
            "78": "0.125119723",
            "79": "-0.08396235",
            "80": "-0.309020539",
            "81": "-0.552344142",
            "82": "0.447023662",
            "83": "-0.253587305",
            "84": "-0.264305073"
        },
        "270": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "-0.351734702",
            "64": "0.349450565",
            "65": "-0.003842167",
            "66": "0.368480931",
            "67": "0.121112612",
            "68": "0.055236193",
            "69": "-0.168244113",
            "70": "0.072794717",
            "71": "-0.241827238",
            "72": "-0.202060609",
            "73": "-0.302811951",
            "74": "0.026091897",
            "75": "-0.50489359",
            "76": "0.066560455",
            "77": "-0.463930285",
            "78": "-0.542714122",
            "79": "-0.444002049",
            "80": "-0.648407935",
            "81": "-0.376958182",
            "82": "-0.824367749",
            "83": "0.193028775",
            "84": "0.38605755"
        },
        "280": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "-0.249083115",
            "65": "0.520920803",
            "66": "0.413515126",
            "67": "0.027115935",
            "68": "-0.419500746",
            "69": "-0.216063156",
            "70": "-0.29729035",
            "71": "-0.410778207",
            "72": "-0.484001788",
            "73": "-0.265432125",
            "74": "-0.55142199",
            "75": "-0.177537004",
            "76": "-0.97579182",
            "77": "-0.824461418",
            "78": "0.192764119",
            "79": "-0.060580217",
            "80": "-0.71716809",
            "81": "-2.054590016",
            "82": "0.12868585",
            "83": "0.38605755",
            "84": "0.38605755"
        },
        "290": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0.010965116",
            "65": "0.006216331",
            "66": "0.715397388",
            "67": "-0.126921723",
            "68": "-0.522465849",
            "69": "-0.155090126",
            "70": "-0.424655581",
            "71": "-0.646937784",
            "72": "-0.261336545",
            "73": "-0.24420149",
            "74": "-0.362518582",
            "75": "-0.10898229",
            "76": "-0.057695496",
            "77": "-1.122348261",
            "78": "-0.431033162",
            "79": "-0.290004713",
            "80": "-0.235632953",
            "81": "-0.637304168",
            "82": "-1.364044302",
            "83": "0.12868585",
            "84": "0.193028775"
        },
        "300": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "-0.743384752",
            "65": "0.2021369",
            "66": "0.356548618",
            "67": "0.095645012",
            "68": "-1.126737064",
            "69": "0.128487591",
            "70": "-0.470926477",
            "71": "-0.26110335",
            "72": "-0.608785021",
            "73": "-0.277462036",
            "74": "-0.122798168",
            "75": "-0.553816194",
            "76": "-0.439931725",
            "77": "-0.782216569",
            "78": "-0.040898398",
            "79": "0.267162579",
            "80": "0.012791405",
            "81": "-0.930998419",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "310": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "-0.743384752",
            "65": "-0.743384752",
            "66": "0.89831273",
            "67": "0.783115485",
            "68": "0.092773285",
            "69": "0.195449839",
            "70": "-0.012136827",
            "71": "-0.527561365",
            "72": "0.137746657",
            "73": "-0.873014258",
            "74": "-1.423657517",
            "75": "0.050217156",
            "76": "0.091783694",
            "77": "-0.985386304",
            "78": "0.514456604",
            "79": "0.947808441",
            "80": "0.218204628",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "320": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "0.297377709",
            "67": "0.840831397",
            "68": "0.332723208",
            "69": "0.988349823",
            "70": "0.606179569",
            "71": "-0.227853587",
            "72": "0.068567894",
            "73": "0.263620928",
            "74": "-0.779415256",
            "75": "-0.852407096",
            "76": "0.125391953",
            "77": "-0.288262251",
            "78": "0.743313008",
            "79": "-0.100009763",
            "80": "-0.183783174",
            "81": "-0.732708115",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "330": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "-0.612188334",
            "66": "-0.326414551",
            "67": "0.010488139",
            "68": "-0.089703231",
            "69": "0.467863684",
            "70": "1.327134751",
            "71": "-0.115359002",
            "72": "-0.725701687",
            "73": "0.075960845",
            "74": "-0.210056392",
            "75": "-0.087934932",
            "76": "-0.101715683",
            "77": "-0.251605781",
            "78": "0.246571793",
            "79": "0.122717939",
            "80": "-1.051571579",
            "81": "3.121780683",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "340": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "0.289886234",
            "67": "-0.909653954",
            "68": "-0.868276828",
            "69": "0.294057403",
            "70": "1.16664519",
            "71": "-0.403372623",
            "72": "0.002829224",
            "73": "0.594534559",
            "74": "0.651247747",
            "75": "0.017566307",
            "76": "-0.247628758",
            "77": "-0.121636799",
            "78": "-0.154452077",
            "79": "-0.650027454",
            "80": "1.311323169",
            "81": "-0.770286543",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "350": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-2.067182558",
            "67": "-1.30813432",
            "68": "-1.529737737",
            "69": "-0.17927176",
            "70": "0.544800388",
            "71": "0.368897371",
            "72": "0.282066112",
            "73": "0.656995292",
            "74": "1.026476652",
            "75": "0.44543728",
            "76": "0.73867611",
            "77": "0.156295",
            "78": "0.304762585",
            "79": "-0.294792384",
            "80": "-0.770286543",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "360": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-1.399076594",
            "68": "-1.362345851",
            "69": "-0.188454872",
            "70": "0.751433961",
            "71": "0.368914842",
            "72": "0.154231125",
            "73": "-0.199390889",
            "74": "0.288978315",
            "75": "0.33629193",
            "76": "0.854649618",
            "77": "0.898841335",
            "78": "-0.786278383",
            "79": "0",
            "80": "-0.770286543",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "370": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "-0.471641544",
            "69": "0.102946133",
            "70": "0.805897422",
            "71": "0.385262848",
            "72": "-0.171667107",
            "73": "-0.296528019",
            "74": "0.594660177",
            "75": "0.706831548",
            "76": "1.362325141",
            "77": "0.644617943",
            "78": "-0.4481667",
            "79": "-0.218222213",
            "80": "0",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "380": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "0",
            "69": "-0.943283087",
            "70": "0.016173039",
            "71": "0.167543717",
            "72": "-0.817381914",
            "73": "-0.286086677",
            "74": "1.224293486",
            "75": "1.8024899",
            "76": "1.265851043",
            "77": "1.290935343",
            "78": "1.242930613",
            "79": "-0.436444426",
            "80": "0",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "390": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "0",
            "69": "0.123169627",
            "70": "1.864184663",
            "71": "-0.268333554",
            "72": "-0.313105274",
            "73": "0.796637539",
            "74": "1.59095596",
            "75": "1.182389742",
            "76": "1.712535656",
            "77": "0.340113681",
            "78": "-0.436444426",
            "79": "-0.218222213",
            "80": "-0.218222213",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "400": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "0",
            "69": "1.18962234",
            "70": "1.18962234",
            "71": "1.864184663",
            "72": "0.341295683",
            "73": "1.433970075",
            "74": "1.098542874",
            "75": "0.528722499",
            "76": "-0.244145615",
            "77": "-0.334404861",
            "78": "-0.562703252",
            "79": "-0.436444426",
            "80": "0",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "410": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "0",
            "69": "1.18962234",
            "70": "1.18962234",
            "71": "1.864184663",
            "72": "-0.106551259",
            "73": "0.630096711",
            "74": "0.263100227",
            "75": "-0.118470957",
            "76": "-0.056552846",
            "77": "0.373559619",
            "78": "0.238622137",
            "79": "0.630867089",
            "80": "0.315433544",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "420": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "0",
            "69": "1.18962234",
            "70": "1.18962234",
            "71": "3.263244096",
            "72": "-0.554398201",
            "73": "-0.554398201",
            "74": "-0.277199101",
            "75": "-0.253834073",
            "76": "0.362256991",
            "77": "0.607336908",
            "78": "1.039947526",
            "79": "0.145481475",
            "80": "0.630867089",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "430": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "0",
            "69": "1.18962234",
            "70": "1.18962234",
            "71": "3.263244096",
            "72": "-0.554398201",
            "73": "-0.277199101",
            "74": "0.701889215",
            "75": "0",
            "76": "1.111372994",
            "77": "1.514370852",
            "78": "0.556801161",
            "79": "0.109111106",
            "80": "-0.048605666",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        },
        "440": {
            "60": "0",
            "61": "0",
            "62": "0",
            "63": "0",
            "64": "0",
            "65": "0",
            "66": "-0.396917649",
            "67": "-0.198458825",
            "68": "0",
            "69": "1.18962234",
            "70": "1.18962234",
            "71": "3.263244096",
            "72": "-0.554398201",
            "73": "0",
            "74": "0.701889215",
            "75": "0",
            "76": "2.457100135",
            "77": "1.579713741",
            "78": "1.210813654",
            "79": "0",
            "80": "0",
            "81": "0",
            "82": "0",
            "83": "0",
            "84": "0"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB730AI764 = function (val, param) {
    var info = {
        "100": {
            "26": "1.415993052",
            "27": "-0.49507225",
            "28": "-0.540613074",
            "29": "-0.220002381",
            "30": "-0.720828383",
            "31": "-0.367007954",
            "32": "1.41493682",
            "33": "0",
            "34": "0",
            "35": "1.641281045",
            "36": "1.641281045",
            "37": "1.36486304",
            "38": "0.905485304",
            "39": "3.029174785",
            "40": "3.099313023",
            "41": "3.099313023",
            "42": "0.769221311",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "110": {
            "26": "-0.099033647",
            "27": "-0.592786088",
            "28": "-1.159279094",
            "29": "-0.760696526",
            "30": "-0.720828383",
            "31": "-0.367007954",
            "32": "1.41493682",
            "33": "-0.750316093",
            "34": "0.000895706",
            "35": "1.641281045",
            "36": "1.641281045",
            "37": "1.36486304",
            "38": "0.905485304",
            "39": "3.029174785",
            "40": "3.099313023",
            "41": "3.099313023",
            "42": "0.769221311",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "120": {
            "26": "-0.099034769",
            "27": "0.024389948",
            "28": "0.015674027",
            "29": "0.097626799",
            "30": "0.123993879",
            "31": "0.269100459",
            "32": "0.228532239",
            "33": "0.656858003",
            "34": "0.181169937",
            "35": "0.821536229",
            "36": "1.641281045",
            "37": "1.36486304",
            "38": "0.905485304",
            "39": "3.029174785",
            "40": "3.099313023",
            "41": "3.099313023",
            "42": "0.769221311",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "130": {
            "26": "-0.329021245",
            "27": "-0.080564312",
            "28": "-0.050830818",
            "29": "-0.068708056",
            "30": "-0.007243582",
            "31": "0.260770463",
            "32": "0.163184133",
            "33": "0.805914287",
            "34": "0.80720716",
            "35": "1.276570189",
            "36": "1.36486304",
            "37": "1.36486304",
            "38": "0.905485304",
            "39": "3.029174785",
            "40": "3.099313023",
            "41": "3.099313023",
            "42": "0.769221311",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "140": {
            "26": "-0.567655494",
            "27": "0.022083899",
            "28": "0.038901621",
            "29": "0.043173604",
            "30": "-0.009723431",
            "31": "0.317637451",
            "32": "0.362651611",
            "33": "0.892305507",
            "34": "0.806594724",
            "35": "0.690120462",
            "36": "0.994734372",
            "37": "1.36486304",
            "38": "0.905485304",
            "39": "3.029174785",
            "40": "3.099313023",
            "41": "3.099313023",
            "42": "0.769221311",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "150": {
            "26": "0.060067588",
            "27": "0.332070559",
            "28": "0.323227388",
            "29": "-0.067541294",
            "30": "-0.040868048",
            "31": "0.080252834",
            "32": "0.261541016",
            "33": "0.370591646",
            "34": "0.535798149",
            "35": "0.54728102",
            "36": "0.960033546",
            "37": "0.920408867",
            "38": "1.015915444",
            "39": "3.029174785",
            "40": "1.458763736",
            "41": "3.099313023",
            "42": "0.769221311",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "160": {
            "26": "0.060067588",
            "27": "-0.129678475",
            "28": "-0.044936579",
            "29": "-0.398201102",
            "30": "-0.280939331",
            "31": "-0.172079481",
            "32": "0.021731102",
            "33": "0.246826735",
            "34": "0.488887055",
            "35": "0.751661735",
            "36": "1.116619563",
            "37": "0.895707751",
            "38": "0.94769658",
            "39": "1.788118991",
            "40": "1.224399552",
            "41": "1.323085147",
            "42": "0.769221311",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "170": {
            "26": "-0.001213021",
            "27": "0.565268018",
            "28": "-0.442866153",
            "29": "-0.582981418",
            "30": "-0.446175069",
            "31": "-0.275555632",
            "32": "-0.184013651",
            "33": "0.055070101",
            "34": "0.183027704",
            "35": "0.44763611",
            "36": "0.522639575",
            "37": "0.865789008",
            "38": "0.759306134",
            "39": "0.997635806",
            "40": "1.5841589",
            "41": "0.972834238",
            "42": "1.370953472",
            "43": "0.769221311",
            "44": "-0.987231338",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "-0.310919091",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "180": {
            "26": "-0.001213021",
            "27": "-0.001213021",
            "28": "0.565268018",
            "29": "-0.33577178",
            "30": "-0.766045538",
            "31": "-0.354273566",
            "32": "-0.248500934",
            "33": "-0.119774146",
            "34": "0.021109274",
            "35": "0.183503002",
            "36": "0.436339334",
            "37": "0.705169707",
            "38": "0.885867173",
            "39": "0.728653344",
            "40": "1.803382096",
            "41": "1.483238325",
            "42": "1.094884728",
            "43": "1.281717414",
            "44": "0.394980909",
            "45": "-0.987231338",
            "46": "1.491200681",
            "47": "-0.310919091",
            "48": "0.044114528",
            "49": "-0.310919091",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "190": {
            "26": "-0.001213021",
            "27": "-0.001213021",
            "28": "0.341711616",
            "29": "0.49852295",
            "30": "-0.38040709",
            "31": "-0.309997482",
            "32": "-0.398242561",
            "33": "-0.287445216",
            "34": "-0.162451041",
            "35": "-0.001061634",
            "36": "0.269276559",
            "37": "0.406267817",
            "38": "0.575554593",
            "39": "0.542363514",
            "40": "1.283868809",
            "41": "1.040678073",
            "42": "0.940307372",
            "43": "1.368922273",
            "44": "1.468041203",
            "45": "2.539751314",
            "46": "1.491200681",
            "47": "0.399148147",
            "48": "0.029409685",
            "49": "0.399148147",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "200": {
            "26": "-0.001213021",
            "27": "-0.001213021",
            "28": "0.341711616",
            "29": "0.378546068",
            "30": "-0.014721085",
            "31": "-0.637620441",
            "32": "-0.341460949",
            "33": "-0.511963275",
            "34": "-0.327339476",
            "35": "-0.181280479",
            "36": "0.030478871",
            "37": "0.26675107",
            "38": "0.480875117",
            "39": "0.815111693",
            "40": "1.012309958",
            "41": "0.472009221",
            "42": "0.381955065",
            "43": "1.190516513",
            "44": "1.899210209",
            "45": "1.453155387",
            "46": "2.094903612",
            "47": "1.045344998",
            "48": "0.199574073",
            "49": "0",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "3.966767905",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "210": {
            "26": "-0.001213021",
            "27": "-0.078327201",
            "28": "-0.15544138",
            "29": "0.184449385",
            "30": "-0.155065544",
            "31": "-0.642046979",
            "32": "-0.633801266",
            "33": "-0.632937891",
            "34": "-0.534455604",
            "35": "-0.436241077",
            "36": "-0.142896272",
            "37": "0.089990179",
            "38": "0.313918828",
            "39": "0.452825526",
            "40": "0.747310401",
            "41": "1.024905799",
            "42": "1.146169004",
            "43": "1.068623717",
            "44": "0.969898482",
            "45": "0.809350951",
            "46": "0.229623485",
            "47": "1.644834314",
            "48": "1.209290654",
            "49": "1.116501948",
            "50": "2.454960938",
            "51": "3.210864422",
            "52": "2.55528901",
            "53": "2.155097097",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "220": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.009647298",
            "30": "-0.009647298",
            "31": "-0.335011767",
            "32": "-0.593948047",
            "33": "-0.725588381",
            "34": "-0.736497571",
            "35": "-0.769107551",
            "36": "-0.444334814",
            "37": "-0.199402163",
            "38": "-0.029468408",
            "39": "0.055419361",
            "40": "0.392064331",
            "41": "0.540706097",
            "42": "0.668202975",
            "43": "0.469832504",
            "44": "1.06298909",
            "45": "0.906705943",
            "46": "0.930877163",
            "47": "0.369590693",
            "48": "1.139301041",
            "49": "1.106121213",
            "50": "0.954003435",
            "51": "1.143810114",
            "52": "2.55528901",
            "53": "1.143810114",
            "54": "0.343426288",
            "55": "0.343426288",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "230": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "-0.335011767",
            "32": "1.182465996",
            "33": "-0.504349814",
            "34": "-0.589353931",
            "35": "-0.699929702",
            "36": "-0.359722866",
            "37": "-0.353322952",
            "38": "-0.206480433",
            "39": "0.022495731",
            "40": "0.229512282",
            "41": "0.28067544",
            "42": "0.471381853",
            "43": "0.054410879",
            "44": "0.464895776",
            "45": "0.307953057",
            "46": "-1.320206708",
            "47": "-0.525837096",
            "48": "0.72883065",
            "49": "0.543059776",
            "50": "0.16320366",
            "51": "-0.178080603",
            "52": "1.143810114",
            "53": "1.143810114",
            "54": "0.476186352",
            "55": "0.476186352",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "240": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "0.418487247",
            "32": "1.119613095",
            "33": "0.847663738",
            "34": "-0.636979388",
            "35": "-0.609239113",
            "36": "-0.79657404",
            "37": "-0.207033788",
            "38": "-0.408782972",
            "39": "-0.212130767",
            "40": "-0.073632664",
            "41": "-0.154770719",
            "42": "0.13938078",
            "43": "0.010565246",
            "44": "0.356097274",
            "45": "0.729243437",
            "46": "0.426126839",
            "47": "0.313092219",
            "48": "0.639079614",
            "49": "0.071851988",
            "50": "-0.618748512",
            "51": "-0.405323789",
            "52": "-0.985167615",
            "53": "0.608946416",
            "54": "0.608946416",
            "55": "0.608946416",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "250": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.171986261",
            "32": "1.056760195",
            "33": "0.941534128",
            "34": "-0.713974431",
            "35": "-0.867987554",
            "36": "-0.814562884",
            "37": "-0.385822123",
            "38": "-0.386766174",
            "39": "-0.327826202",
            "40": "-0.272421231",
            "41": "-0.219083362",
            "42": "0.054253088",
            "43": "-0.559812124",
            "44": "0.028148548",
            "45": "0.348320097",
            "46": "0.270657592",
            "47": "0.445410162",
            "48": "0.63641756",
            "49": "0.249886782",
            "50": "-0.73922111",
            "51": "-0.990760972",
            "52": "-0.497252282",
            "53": "0.608946416",
            "54": "0.608946416",
            "55": "0.608946416",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "260": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.171986261",
            "32": "1.171986261",
            "33": "0.277336925",
            "34": "-1.281509615",
            "35": "-1.115314218",
            "36": "-0.43644386",
            "37": "-0.554794424",
            "38": "-0.434935189",
            "39": "-0.584766885",
            "40": "-0.097231542",
            "41": "-0.229359657",
            "42": "-0.021980198",
            "43": "0.682472541",
            "44": "0.137552605",
            "45": "0.36523081",
            "46": "0.466470866",
            "47": "0.522585746",
            "48": "0.738241232",
            "49": "0.362735007",
            "50": "-0.146206705",
            "51": "-0.687720885",
            "52": "-0.09223629",
            "53": "-0.497252282",
            "54": "-0.116438401",
            "55": "-2.791838497",
            "56": "0.0738691",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "270": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.171986261",
            "32": "1.171986261",
            "33": "0.277336925",
            "34": "-1.281509615",
            "35": "0.311226966",
            "36": "0.311226966",
            "37": "-0.476454778",
            "38": "-0.604435586",
            "39": "-0.595645658",
            "40": "-0.250633505",
            "41": "-0.470956422",
            "42": "-0.028436417",
            "43": "0.103163347",
            "44": "0.00904505",
            "45": "-0.380358536",
            "46": "0.005280104",
            "47": "0.170989876",
            "48": "0.426673655",
            "49": "0.513523909",
            "50": "0.65508297",
            "51": "0.483931336",
            "52": "-0.180021157",
            "53": "-0.264521757",
            "54": "-0.650951513",
            "55": "-1.231826273",
            "56": "-2.791838497",
            "57": "0.0738691",
            "58": "0.0738691"
        },
        "280": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "0.248506296",
            "37": "-0.232415359",
            "38": "-0.361290724",
            "39": "-0.266459803",
            "40": "-0.123042136",
            "41": "0.347881194",
            "42": "-0.167093363",
            "43": "0.280569106",
            "44": "-0.319866757",
            "45": "-0.562439943",
            "46": "0.236384607",
            "47": "0.088455418",
            "48": "-0.058631974",
            "49": "0.226001994",
            "50": "1.188440236",
            "51": "0.767719409",
            "52": "0.383952917",
            "53": "-0.118278261",
            "54": "0.281480695",
            "55": "-0.041028714",
            "56": "0.376405287",
            "57": "0.225137194",
            "58": "0.074350579"
        },
        "290": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "-1.621201352",
            "38": "-0.736953242",
            "39": "-0.526648325",
            "40": "-0.382430149",
            "41": "-0.294399898",
            "42": "-0.329208896",
            "43": "-0.323206435",
            "44": "-0.489875479",
            "45": "-0.279287217",
            "46": "-0.139417318",
            "47": "-0.00217819",
            "48": "0.232539842",
            "49": "0.110057158",
            "50": "-0.143628535",
            "51": "0.284630472",
            "52": "0.683565432",
            "53": "2.058076602",
            "54": "0.265511174",
            "55": "2.212886944",
            "56": "1.464571616",
            "57": "0.376405287",
            "58": "0.074350579"
        },
        "300": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "-2.020555485",
            "38": "-1.574620879",
            "39": "-0.512598992",
            "40": "-0.349536473",
            "41": "-0.455258087",
            "42": "-0.423169646",
            "43": "-0.34433155",
            "44": "-0.294064021",
            "45": "-0.163238313",
            "46": "-0.009484685",
            "47": "0.030739891",
            "48": "-0.059344515",
            "49": "0.014008635",
            "50": "0.187564495",
            "51": "0.245677787",
            "52": "0.24373349",
            "53": "-0.032919333",
            "54": "-0.310916495",
            "55": "1.235464355",
            "56": "0.900052215",
            "57": "0.749024861",
            "58": "-0.594855471"
        },
        "310": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "-2.020555485",
            "38": "-2.020555485",
            "39": "-0.957272247",
            "40": "-0.297059349",
            "41": "0.012857979",
            "42": "0.818785325",
            "43": "0.428632474",
            "44": "0.383766514",
            "45": "0.746210686",
            "46": "0.735823866",
            "47": "-0.127602477",
            "48": "-1.378737965",
            "49": "-0.233316694",
            "50": "-0.115299363",
            "51": "0.201093522",
            "52": "0.725158112",
            "53": "-0.198067645",
            "54": "-0.726944947",
            "55": "-1.212159466",
            "56": "1.299361203",
            "57": "-1.933267572",
            "58": "-0.997573693"
        },
        "320": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "-1.010277743",
            "38": "-1.010277743",
            "39": "5.53717711",
            "40": "-0.184200692",
            "41": "0.520706122",
            "42": "0.544137545",
            "43": "-0.410798495",
            "44": "-0.901608809",
            "45": "-0.315451225",
            "46": "0.087897269",
            "47": "0.064435714",
            "48": "-0.100687568",
            "49": "-0.014174745",
            "50": "0.109741261",
            "51": "-0.11181561",
            "52": "-1.349451327",
            "53": "-1.257415433",
            "54": "-0.376495672",
            "55": "-0.014488388",
            "56": "0.701438425",
            "57": "-0.032090682",
            "58": "-1.832236476"
        },
        "330": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "2.768588555",
            "40": "5.53717711",
            "41": "-0.227304095",
            "42": "0.251116037",
            "43": "-0.769435006",
            "44": "-0.957452322",
            "45": "-0.000469936",
            "46": "0.559939275",
            "47": "0.086743181",
            "48": "-0.071626629",
            "49": "-0.214801342",
            "50": "0.05486945",
            "51": "-0.546946416",
            "52": "-0.762155613",
            "53": "-0.172093781",
            "54": "-0.015767424",
            "55": "0.437571246",
            "56": "0.655590751",
            "57": "-3.264300554",
            "58": "-1.157543835"
        },
        "340": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "0.269109125",
            "42": "-0.145749576",
            "43": "-0.237712543",
            "44": "-0.746681439",
            "45": "-0.114693621",
            "46": "0.108116",
            "47": "-0.794947163",
            "48": "-0.469870883",
            "49": "-0.497507295",
            "50": "0.128072072",
            "51": "0.749685217",
            "52": "0.374514258",
            "53": "0.397631271",
            "54": "-0.065105781",
            "55": "0.154646683",
            "56": "-0.425670088",
            "57": "0.609706081",
            "58": "-0.011613752"
        },
        "350": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.033953287",
            "43": "-0.754359163",
            "44": "0.314466654",
            "45": "-0.340395477",
            "46": "-0.508709825",
            "47": "-0.431371178",
            "48": "-0.958208435",
            "49": "-0.626958333",
            "50": "-0.370014563",
            "51": "0.240843394",
            "52": "0.656435774",
            "53": "0.400225696",
            "54": "-0.343371143",
            "55": "-0.507449963",
            "56": "-0.364860075",
            "57": "-0.080607744",
            "58": "0.510313295"
        },
        "360": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.122383717",
            "46": "-0.608528206",
            "47": "-0.867285067",
            "48": "-0.300157472",
            "49": "0.104122513",
            "50": "0.210057564",
            "51": "0.626110199",
            "52": "0.152966626",
            "53": "-0.148700631",
            "54": "-0.313968218",
            "55": "-0.225183943",
            "56": "-1.002407892",
            "57": "0",
            "58": "0.291326736"
        },
        "370": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-0.84019309",
            "46": "-1.166632877",
            "47": "-0.385235505",
            "48": "0.300978158",
            "49": "0.544642166",
            "50": "0.455015415",
            "51": "1.013408494",
            "52": "0.406981919",
            "53": "0.707651369",
            "54": "0.028248595",
            "55": "-0.587920487",
            "56": "-0.845423317",
            "57": "-0.889708741",
            "58": "-0.190696931"
        },
        "380": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.581570983",
            "46": "-1.210882037",
            "47": "0.278798029",
            "48": "0.403009227",
            "49": "0.001712338",
            "50": "-0.032205955",
            "51": "-1.043186838",
            "52": "0.641876384",
            "53": "0.294586397",
            "54": "0.405492062",
            "55": "0.37430022",
            "56": "-0.845423317",
            "57": "-0.035000846",
            "58": "-0.143022698"
        },
        "390": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.581570983",
            "46": "-1.581570983",
            "47": "0",
            "48": "0.713055681",
            "49": "0",
            "50": "0.399142862",
            "51": "0",
            "52": "0.203497289",
            "53": "0",
            "54": "0.06368337",
            "55": "0",
            "56": "-0.143604854",
            "57": "0",
            "58": "-0.027230687"
        },
        "400": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.581570983",
            "46": "-1.581570983",
            "47": "0",
            "48": "0",
            "49": "1.467014045",
            "50": "2.934028091",
            "51": "1.696701311",
            "52": "0.229687266",
            "53": "-0.079640756",
            "54": "-0.412437362",
            "55": "-0.593232258",
            "56": "-0.283904237",
            "57": "-0.227279143",
            "58": "0.056625094"
        },
        "410": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.581570983",
            "46": "-1.581570983",
            "47": "0",
            "48": "0",
            "49": "1.467014045",
            "50": "2.934028091",
            "51": "0",
            "52": "0.229687266",
            "53": "0",
            "54": "-0.309328021",
            "55": "0",
            "56": "-0.189269491",
            "57": "0",
            "58": "0.113250188"
        },
        "420": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.581570983",
            "46": "-1.581570983",
            "47": "0",
            "48": "0",
            "49": "1.467014045",
            "50": "2.934028091",
            "51": "0",
            "52": "0",
            "53": "0",
            "54": "0",
            "55": "0",
            "56": "0",
            "57": "0",
            "58": "0.056625094"
        },
        "430": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.581570983",
            "46": "-1.581570983",
            "47": "0",
            "48": "0",
            "49": "1.467014045",
            "50": "2.934028091",
            "51": "0",
            "52": "0",
            "53": "0",
            "54": "0.014764299",
            "55": "0",
            "56": "-0.014764299",
            "57": "0",
            "58": "0"
        },
        "440": {
            "26": "-0.001213021",
            "27": "-0.15544138",
            "28": "-0.15544138",
            "29": "-0.15544138",
            "30": "-0.009647298",
            "31": "1.683797132",
            "32": "1.683797132",
            "33": "1.683797132",
            "34": "-1.281509615",
            "35": "-0.127817719",
            "36": "-0.127817719",
            "37": "0",
            "38": "0",
            "39": "0",
            "40": "5.53717711",
            "41": "-0.943140523",
            "42": "-0.943140523",
            "43": "-0.754359163",
            "44": "0.442340134",
            "45": "-1.581570983",
            "46": "-1.581570983",
            "47": "0",
            "48": "0",
            "49": "1.467014045",
            "50": "2.934028091",
            "51": "0",
            "52": "0",
            "53": "0",
            "54": "0.059057194",
            "55": "0",
            "56": "-0.029528597",
            "57": "0",
            "58": "0"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB769F793 = function (val, param) {
    return 0;
}
SmartSize.prototype.getB798F822 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "60": {
            "1": "-1.464994875",
            "2": "-0.971420246",
            "3": "-1.695933405",
            "4": "-0.694306169"
        },
        "61": {
            "1": "-1.218850859",
            "2": "-0.971420246",
            "3": "-1.81418721",
            "4": "0.019734358"
        },
        "62": {
            "1": "-0.847638637",
            "2": "0.757783573",
            "3": "-0.173942459",
            "4": "0.019734358"
        },
        "63": {
            "1": "-0.25759581",
            "2": "0.505681384",
            "3": "0.024767984",
            "4": "0.499968354"
        },
        "64": {
            "1": "-0.204995409",
            "2": "0.505681384",
            "3": "0.001890059",
            "4": "0.492170671"
        },
        "65": {
            "1": "0.118104055",
            "2": "-0.22053549",
            "3": "0.01386603",
            "4": "0.432147887"
        },
        "66": {
            "1": "0.024839702",
            "2": "0.607295154",
            "3": "0.34708823",
            "4": "0.503284771"
        },
        "67": {
            "1": "0.684299216",
            "2": "0.607295154",
            "3": "0.574147827",
            "4": "0.34211371"
        },
        "68": {
            "1": "1.147102521",
            "2": "1.909240482",
            "3": "0.848308233",
            "4": "0.34211371"
        },
        "69": {
            "1": "1.841936191",
            "2": "1.909240482",
            "3": "1.008027104",
            "4": "0.34211371"
        },
        "70": {
            "1": "1.735476054",
            "2": "1.909240482",
            "3": "0.993119716",
            "4": "0.34211371"
        },
        "71": {
            "1": "2.139359531",
            "2": "1.909240482",
            "3": "2.222876809",
            "4": "0.34211371"
        },
        "72": {
            "1": "2.898110131",
            "2": "1.909240482",
            "3": "2.159310554",
            "4": "0.34211371"
        },
        "73": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "1.931521788",
            "4": "0.34211371"
        },
        "74": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "3.316845776",
            "4": "0.34211371"
        },
        "75": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "76": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "77": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "78": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "79": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "80": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "81": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "82": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "83": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        },
        "84": {
            "1": "3.062346906",
            "2": "1.909240482",
            "3": "4.421428493",
            "4": "0.34211371"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB827F851 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "60": {
            "1": "-0.889693748",
            "2": "-4.14761052",
            "3": "-2.803099079",
            "4": "-1.290531152"
        },
        "61": {
            "1": "-1.41814741",
            "2": "-4.14761052",
            "3": "-2.232769021",
            "4": "-1.290531152"
        },
        "62": {
            "1": "-1.191146692",
            "2": "-4.14761052",
            "3": "-1.60838502",
            "4": "-0.876685293"
        },
        "63": {
            "1": "-1.134419755",
            "2": "-4.14761052",
            "3": "-1.470948903",
            "4": "-0.441007703"
        },
        "64": {
            "1": "-0.779828011",
            "2": "-2.026112824",
            "3": "-0.913563828",
            "4": "-0.364756149"
        },
        "65": {
            "1": "-0.21537668",
            "2": "0.560449353",
            "3": "-0.482272012",
            "4": "-0.48816334"
        },
        "66": {
            "1": "-0.157261183",
            "2": "0.792981594",
            "3": "-0.089918738",
            "4": "-0.237106957"
        },
        "67": {
            "1": "0.062959076",
            "2": "0.860420292",
            "3": "0.113502844",
            "4": "0.274293747"
        },
        "68": {
            "1": "0.500075561",
            "2": "0.61639072",
            "3": "0.450198396",
            "4": "0.562294749"
        },
        "69": {
            "1": "0.813195997",
            "2": "0.479781406",
            "3": "0.729128517",
            "4": "0.628802309"
        },
        "70": {
            "1": "1.209773137",
            "2": "1.183409245",
            "3": "1.117190579",
            "4": "1.352439795"
        },
        "71": {
            "1": "1.675334899",
            "2": "1.731422748",
            "3": "1.513113816",
            "4": "1.55324426"
        },
        "72": {
            "1": "2.128543884",
            "2": "1.820726182",
            "3": "1.810735926",
            "4": "1.647947044"
        },
        "73": {
            "1": "1.986951468",
            "2": "1.861522049",
            "3": "1.777118682",
            "4": "2.140228847"
        },
        "74": {
            "1": "1.95267635",
            "2": "2.204360284",
            "3": "2.920474472",
            "4": "2.294076761"
        },
        "75": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "2.633868077",
            "4": "2.294076761"
        },
        "76": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "2.154905938",
            "4": "2.294076761"
        },
        "77": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.633136016",
            "4": "2.294076761"
        },
        "78": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.603571526",
            "4": "2.294076761"
        },
        "79": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.603571526",
            "4": "2.294076761"
        },
        "80": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.603571526",
            "4": "2.294076761"
        },
        "81": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.603571526",
            "4": "2.294076761"
        },
        "82": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.603571526",
            "4": "2.294076761"
        },
        "83": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.603571526",
            "4": "2.294076761"
        },
        "84": {
            "1": "2.273130926",
            "2": "2.204360284",
            "3": "3.603571526",
            "4": "2.294076761"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB856F880 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "60": {
            "1": "-2.006022641",
            "2": "-1.998687147",
            "3": "-3.405799311",
            "4": "-1.886069773"
        },
        "61": {
            "1": "-2.010594464",
            "2": "-1.998687147",
            "3": "-1.949966674",
            "4": "-1.886069773"
        },
        "62": {
            "1": "-1.939914857",
            "2": "-1.998687147",
            "3": "-1.842763384",
            "4": "-1.886069773"
        },
        "63": {
            "1": "-1.907372142",
            "2": "-1.998687147",
            "3": "-1.984243978",
            "4": "-1.654447494"
        },
        "64": {
            "1": "-1.584856899",
            "2": "-0.701508376",
            "3": "-1.52519572",
            "4": "-1.551504258"
        },
        "65": {
            "1": "-1.076648082",
            "2": "-0.572717906",
            "3": "-1.108402199",
            "4": "-1.089158355"
        },
        "66": {
            "1": "-0.722433952",
            "2": "0.171657758",
            "3": "-1.019342937",
            "4": "-1.107731105"
        },
        "67": {
            "1": "-0.705534374",
            "2": "0.318641747",
            "3": "-0.630324883",
            "4": "-0.281721415"
        },
        "68": {
            "1": "-0.420871764",
            "2": "0.234637105",
            "3": "-0.357971444",
            "4": "-0.369797391"
        },
        "69": {
            "1": "0.091393764",
            "2": "0.881652773",
            "3": "-0.010188812",
            "4": "0.154971314"
        },
        "70": {
            "1": "0.404877171",
            "2": "0.724156959",
            "3": "0.302127578",
            "4": "0.660684509"
        },
        "71": {
            "1": "0.604066573",
            "2": "1.105383581",
            "3": "0.681021678",
            "4": "1.037550616"
        },
        "72": {
            "1": "1.210653036",
            "2": "1.246607777",
            "3": "1.072309054",
            "4": "1.306810756"
        },
        "73": {
            "1": "1.303531396",
            "2": "1.787836827",
            "3": "1.36278955",
            "4": "0.952446111"
        },
        "74": {
            "1": "2.047557095",
            "2": "2.500653696",
            "3": "1.79992457",
            "4": "1.766541669"
        },
        "75": {
            "1": "2.114295115",
            "2": "2.671768071",
            "3": "2.156206759",
            "4": "2.200397885"
        },
        "76": {
            "1": "2.114295115",
            "2": "3.268252256",
            "3": "2.555424017",
            "4": "3.091629392"
        },
        "77": {
            "1": "2.114295115",
            "2": "3.267044191",
            "3": "2.881841281",
            "4": "3.162186621"
        },
        "78": {
            "1": "2.114295115",
            "2": "3.486657602",
            "3": "3.433421279",
            "4": "3.162186621"
        },
        "79": {
            "1": "2.114295115",
            "2": "5.446542921",
            "3": "3.464487046",
            "4": "3.162186621"
        },
        "80": {
            "1": "2.114295115",
            "2": "5.446542921",
            "3": "4.14188904",
            "4": "3.162186621"
        },
        "81": {
            "1": "2.114295115",
            "2": "5.446542921",
            "3": "4.446501832",
            "4": "3.162186621"
        },
        "82": {
            "1": "2.114295115",
            "2": "5.446542921",
            "3": "4.446501832",
            "4": "3.162186621"
        },
        "83": {
            "1": "2.114295115",
            "2": "5.446542921",
            "3": "4.446501832",
            "4": "3.162186621"
        },
        "84": {
            "1": "2.114295115",
            "2": "5.446542921",
            "3": "4.446501832",
            "4": "3.162186621"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB885F909 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "60": {
            "1": "-3.035668282",
            "2": "-2.095696641",
            "3": "-4.094493681",
            "4": "-1.804487893"
        },
        "61": {
            "1": "-3.035668282",
            "2": "-2.095696641",
            "3": "-2.940748626",
            "4": "-1.804487893"
        },
        "62": {
            "1": "-2.858372067",
            "2": "-1.687866811",
            "3": "-2.627974068",
            "4": "-1.804487893"
        },
        "63": {
            "1": "-2.374614566",
            "2": "-1.28003698",
            "3": "-2.61406647",
            "4": "-1.804487893"
        },
        "64": {
            "1": "-2.302776495",
            "2": "-1.660177046",
            "3": "-2.520454595",
            "4": "-1.804487893"
        },
        "65": {
            "1": "-2.067565763",
            "2": "-1.446361556",
            "3": "-2.003884848",
            "4": "-1.927479136"
        },
        "66": {
            "1": "-1.322866168",
            "2": "-0.988045013",
            "3": "-1.68538419",
            "4": "-1.472003675"
        },
        "67": {
            "1": "-1.328370637",
            "2": "-1.001055475",
            "3": "-1.427998416",
            "4": "-1.149761568"
        },
        "68": {
            "1": "-1.028262819",
            "2": "-0.508101768",
            "3": "-1.142537063",
            "4": "-0.97680425"
        },
        "69": {
            "1": "-0.557077987",
            "2": "0.097882236",
            "3": "-0.80544617",
            "4": "-0.747790433"
        },
        "70": {
            "1": "-0.456354615",
            "2": "0.464968184",
            "3": "-0.422052801",
            "4": "-0.308861967"
        },
        "71": {
            "1": "0.094107997",
            "2": "0.518498933",
            "3": "-0.040012617",
            "4": "0.292089951"
        },
        "72": {
            "1": "0.371375007",
            "2": "0.668100419",
            "3": "0.20634205",
            "4": "0.519787836"
        },
        "73": {
            "1": "0.929695178",
            "2": "1.096258004",
            "3": "0.566391232",
            "4": "0.571914406"
        },
        "74": {
            "1": "0.92997033",
            "2": "1.438584395",
            "3": "0.926154148",
            "4": "0.773194299"
        },
        "75": {
            "1": "0.967931725",
            "2": "2.326680388",
            "3": "1.313882619",
            "4": "0.835341764"
        },
        "76": {
            "1": "1.151916713",
            "2": "2.569717478",
            "3": "1.689345106",
            "4": "1.603638292"
        },
        "77": {
            "1": "2.236892948",
            "2": "2.679928591",
            "3": "2.034811703",
            "4": "2.019248387"
        },
        "78": {
            "1": "3.1189505",
            "2": "3.552931027",
            "3": "2.342183892",
            "4": "1.976421822"
        },
        "79": {
            "1": "3.1189505",
            "2": "3.986826307",
            "3": "2.423193441",
            "4": "1.976421822"
        },
        "80": {
            "1": "3.1189505",
            "2": "5.037018168",
            "3": "3.384921159",
            "4": "1.976421822"
        },
        "81": {
            "1": "3.1189505",
            "2": "3.781961073",
            "3": "4.163693471",
            "4": "1.976421822"
        },
        "82": {
            "1": "3.1189505",
            "2": "3.781961073",
            "3": "4.163693471",
            "4": "1.976421822"
        },
        "83": {
            "1": "3.1189505",
            "2": "3.781961073",
            "3": "3.175902609",
            "4": "1.976421822"
        },
        "84": {
            "1": "3.1189505",
            "2": "3.781961073",
            "3": "3.175902609",
            "4": "1.976421822"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB914F938 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "60": {
            "1": "-3.546175432",
            "2": "-1.564728058",
            "3": "-2.615423435",
            "4": "-3.911068954"
        },
        "61": {
            "1": "-3.546175432",
            "2": "-1.564728058",
            "3": "-3.198701714",
            "4": "-3.911068954"
        },
        "62": {
            "1": "-3.045009291",
            "2": "-1.564728058",
            "3": "-3.198701714",
            "4": "-3.911068954"
        },
        "63": {
            "1": "-2.798953987",
            "2": "-1.564728058",
            "3": "-3.360739762",
            "4": "-3.058310699"
        },
        "64": {
            "1": "-2.337206464",
            "2": "-1.564728058",
            "3": "-3.23113867",
            "4": "-2.081823764"
        },
        "65": {
            "1": "-1.781717497",
            "2": "-1.550110751",
            "3": "-2.379648665",
            "4": "-2.478328268"
        },
        "66": {
            "1": "-1.827593976",
            "2": "-0.875490388",
            "3": "-2.286918332",
            "4": "-2.651739329"
        },
        "67": {
            "1": "-1.792463334",
            "2": "-0.325487841",
            "3": "-1.929637296",
            "4": "-1.862721148"
        },
        "68": {
            "1": "-1.517539516",
            "2": "-0.676405103",
            "3": "-1.652835895",
            "4": "-1.111244827"
        },
        "69": {
            "1": "-1.498299491",
            "2": "-0.546983287",
            "3": "-1.344782433",
            "4": "-1.24769101"
        },
        "70": {
            "1": "-0.766498076",
            "2": "-0.553719897",
            "3": "-0.934332312",
            "4": "-0.921737182"
        },
        "71": {
            "1": "-0.525978606",
            "2": "0.060558237",
            "3": "-0.543887796",
            "4": "-0.432333419"
        },
        "72": {
            "1": "-0.203179918",
            "2": "0.321487916",
            "3": "-0.262617398",
            "4": "-0.348826505"
        },
        "73": {
            "1": "-0.005007607",
            "2": "0.713772665",
            "3": "0.088224651",
            "4": "0.502207543"
        },
        "74": {
            "1": "0.880650659",
            "2": "1.113598363",
            "3": "0.426750445",
            "4": "0.318283964"
        },
        "75": {
            "1": "1.005051444",
            "2": "1.734330239",
            "3": "0.82915268",
            "4": "0.847282477"
        },
        "76": {
            "1": "1.192785152",
            "2": "1.557627926",
            "3": "1.180409336",
            "4": "1.376280991"
        },
        "77": {
            "1": "1.445654216",
            "2": "1.615793012",
            "3": "1.515832879",
            "4": "1.489870915"
        },
        "78": {
            "1": "1.68022791",
            "2": "2.28068896",
            "3": "1.87759487",
            "4": "1.86484272"
        },
        "79": {
            "1": "2.105568599",
            "2": "3.212930478",
            "3": "2.243698536",
            "4": "2.92901742"
        },
        "80": {
            "1": "1.326069066",
            "2": "3.084515967",
            "3": "2.779991266",
            "4": "3.17484444"
        },
        "81": {
            "1": "1.326069066",
            "2": "3.331240839",
            "3": "3.196700377",
            "4": "3.17484444"
        },
        "82": {
            "1": "1.326069066",
            "2": "3.628045976",
            "3": "3.576480863",
            "4": "3.17484444"
        },
        "83": {
            "1": "1.326069066",
            "2": "3.628045976",
            "3": "3.17815986",
            "4": "3.17484444"
        },
        "84": {
            "1": "1.326069066",
            "2": "3.628045976",
            "3": "3.793864615",
            "4": "3.17484444"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB943F967 = function (val, param) {
    val = parseInt(val);
    param = parseInt(param);
    var info = {
        "60": {
            "1": "-3.369728369",
            "2": "-1.613726844",
            "3": "-4.727789013",
            "4": "-2.996415278"
        },
        "61": {
            "1": "-3.369728369",
            "2": "-1.613726844",
            "3": "-4.35794255",
            "4": "-2.996415278"
        },
        "62": {
            "1": "-3.369728369",
            "2": "-1.613726844",
            "3": "-4.1402522",
            "4": "-2.996415278"
        },
        "63": {
            "1": "-2.903016391",
            "2": "-1.613726844",
            "3": "-3.363501728",
            "4": "-2.996415278"
        },
        "64": {
            "1": "-2.972748769",
            "2": "-1.613726844",
            "3": "-3.234487854",
            "4": "-3.120548374"
        },
        "65": {
            "1": "-2.396365627",
            "2": "-1.613726844",
            "3": "-2.838272351",
            "4": "-2.801199785"
        },
        "66": {
            "1": "-1.853637126",
            "2": "-1.161364408",
            "3": "-2.864108412",
            "4": "-2.727286171"
        },
        "67": {
            "1": "-1.900365036",
            "2": "-1.084299078",
            "3": "-2.375192326",
            "4": "-2.260705803"
        },
        "68": {
            "1": "-1.075786274",
            "2": "-1.878379353",
            "3": "-2.193229771",
            "4": "-1.714593745"
        },
        "69": {
            "1": "-1.080662952",
            "2": "-2.207293886",
            "3": "-1.707645608",
            "4": "-1.238649232"
        },
        "70": {
            "1": "-1.085539631",
            "2": "-0.598097558",
            "3": "-1.446627954",
            "4": "-0.762704718"
        },
        "71": {
            "1": "-0.73115937",
            "2": "-0.303882603",
            "3": "-1.183631912",
            "4": "-1.242658575"
        },
        "72": {
            "1": "-0.130669934",
            "2": "-0.073077867",
            "3": "-0.679775514",
            "4": "-0.932581301"
        },
        "73": {
            "1": "0.237434792",
            "2": "0.435642999",
            "3": "-0.315010131",
            "4": "-0.443628565"
        },
        "74": {
            "1": "0.605539519",
            "2": "0.155018785",
            "3": "-0.05407149",
            "4": "0.04532417"
        },
        "75": {
            "1": "0.430892063",
            "2": "0.633918366",
            "3": "0.369172979",
            "4": "0.354307108"
        },
        "76": {
            "1": "0.918522573",
            "2": "0.871652592",
            "3": "0.716962276",
            "4": "0.326751338"
        },
        "77": {
            "1": "2.015666408",
            "2": "1.719455499",
            "3": "1.115938124",
            "4": "0.434721231"
        },
        "78": {
            "1": "2.145818362",
            "2": "2.097192238",
            "3": "1.463615992",
            "4": "1.141990395"
        },
        "79": {
            "1": "2.210017953",
            "2": "2.115919751",
            "3": "1.439331141",
            "4": "1.483156026"
        },
        "80": {
            "1": "2.406122271",
            "2": "3.128920034",
            "3": "1.878132847",
            "4": "2.255668441"
        },
        "81": {
            "1": "2.406122271",
            "2": "3.252231487",
            "3": "2.841920917",
            "4": "2.255668441"
        },
        "82": {
            "1": "2.406122271",
            "2": "4.640847547",
            "3": "2.798707078",
            "4": "2.255668441"
        },
        "83": {
            "1": "2.406122271",
            "2": "5.833876564",
            "3": "3.5187977",
            "4": "2.255668441"
        },
        "84": {
            "1": "2.406122271",
            "2": "5.833876564",
            "3": "3.95378127",
            "4": "2.255668441"
        }
    }
    return parseFloat(info[val][param]);
}
SmartSize.prototype.getB972F996 = function (val, param) {
    return 0;
}
SmartSize.prototype.isInputYes = function (paramName) {
    switch (paramName) {
        case 'collar':
            return this.isNumeric(this.data.collar) && this.isCollarValid(this.data.collar);
            break;
        case 'sleeve':
            return this.isNumeric(this.data.sleeve) && this.isSleeveValid(this.data.sleeve);
            break;
        case 'tall':
            return this.isNumeric(this.data.tall) && this.isTallValid(this.data.tall);
            break;
        case 'pants_waist':
            return this.isNumeric(this.data.pants_waist) && this.isPantsWaistValid(this.data.pants_waist);
            break;
        case 'midsection_style':
            return this.isNumeric(this.data.midsection_style) && this.isMidsectionStyleValid(this.data.midsection_style);
            break;
        case 'shirt_type':
            return this.isNumeric(this.data.shirt_type) && this.isShirtTypeValid(this.data.shirt_type);
            break;
        case 'tucked':
            return this.isNumeric(this.data.tucked) && this.isTuckedValid(this.data.tucked);
            break;
        case 'weight':
            return this.isNumeric(this.data.weight) && this.isWeightValid(this.data.weight);
            break;
        case 'shirt_tight':
            return this.isNumeric(this.data.shirt_tight) && this.isShirtTightValid(this.data.shirt_tight);
            break;
        case 'ethnicity':
            return this.isNumeric(this.data.ethnicity) && this.data.ethnicity > 0;
            break;
        case 'suit':
            return this.isNumeric(this.data.suit);
            break;
    }
    alert("SmartSize.prototype.isInputYes() - param '" + paramName + "' doesn't exist");
}
SmartSize.prototype.isCollarValid = function (value) {
    return true;
}
SmartSize.prototype.isSleeveValid = function (value) {
    return true;
}
SmartSize.prototype.isTallValid = function (value) {
    return true;
}
SmartSize.prototype.isPantsWaistValid = function (value) {
    return true;
}
SmartSize.prototype.isMidsectionStyleValid = function (value) {
    return true;
}
SmartSize.prototype.isShirtTypeValid = function (value) {
    return true;
}
SmartSize.prototype.isTuckedValid = function (value) {
    return true;
}
SmartSize.prototype.isWeightValid = function (value) {
    return true;
}
SmartSize.prototype.isShirtTightValid = function (value) {
    return true;
}
SmartSize.prototype.isNumeric = function (value) {
    return !isNaN(parseFloat(value));
}
var SmartSizeTC = function (data) {
    this.data = data;
    if (!isNaN(parseFloat(this.data.tall_feets)) && !isNaN(parseFloat(this.data.tall_inches))) {
        this.data.tall = parseInt(this.data.tall_feets) * 12 + parseInt(this.data.tall_inches);
        this.data.tall = this.data.tall < 60 ? 60 : (this.data.tall > 84 ? 84 : this.data.tall);
    } else {
        this.data.tall = '';
        this.data.tall_feets = '';
        this.data.tall_inches = '';
    }
    if (!isNaN(parseInt(this.data.weight))) {
        this.data.weight_algo = Math.floor(this.data.weight / 10) * 10;
        this.data.weight_algo = this.data.weight_algo < 100 ? 100 : (this.data.weight_algo > 440 ? 440 : this.data.weight_algo);
    }
    if (!isNaN(parseInt(this.data.ethnicity))) {
        this.data.ethnicity = parseInt(this.data.ethnicity);
        if (this.data.ethnicity < 1) {
            this.data.ethnicity = 1
        } else {
            if (this.data.ethnicity > 4) {
                this.data.ethnicity = 4;
            }
        }
    }
    if (!isNaN(parseInt(this.data.jacket_size))) {
        this.data.jacket_size = this.data.jacket_size < 32 ? 32 : (this.data.jacket_size > 60 ? 60 : this.data.jacket_size);
    }
    switch (this.data.size.toLowerCase()) {
        case 'xxs':
            this.data.size_num = 0;
            break;
        case 'xs':
            this.data.size_num = 1;
            break;
        case 's':
            this.data.size_num = 2;
            break;
        case 'm':
            this.data.size_num = 3;
            break;
        case 'l':
            this.data.size_num = 4;
            break;
        case 'xl':
            this.data.size_num = 5;
            break;
        case 'xxl':
            this.data.size_num = 6;
            break;
        case '3xl':
            this.data.size_num = 7;
            break;
        case '4xl':
            this.data.size_num = 8;
            break;
        case '5xl':
            this.data.size_num = 9;
            break;
        case '6xl':
            this.data.size_num = 10;
            break;
    }
    this.ja = {};
    this.ja.shoulder_width = this.getJAParam(this.data.size, 2);
    if (this.isInputYes('weight')) {
        this.ja.shoulder_width += this.getJATable2(this.data.weight_algo, this.data.size_num);
    } else {
        this.ja.shoulder_width += this.getJATable2('skipped', this.data.size_num);
    }
    this.ja.shoulder_width = this.getRound10(this.ja.shoulder_width);
    if (this.isInputYes('jacket_size')) {
        unrounded_matched_chest_width = this.getJATable7(this.data.jacket_size);
    } else {
        unrounded_matched_chest_width = this.getJAParam(this.data.size, 3);
        if (this.isInputYes('weight')) {
            unrounded_matched_chest_width += this.getJATable8(this.data.weight_algo, this.data.size_num);
        } else {
            unrounded_matched_chest_width += this.getJATable8('skipped', this.data.size_num);
        }
        if (this.isInputYes('midsection_style')) {
            unrounded_matched_chest_width += this.getJATable9(this.data.midsection_style, this.data.size_num);
        } else {
            unrounded_matched_chest_width += this.getJATable9('skipped', this.data.size_num);
        }
    }
    arr = [17.5, 17.9, 18.3, 18.6, 19, 19.4, 19.8, 20.1, 20.5, 20.9, 21.3, 21.6, 22, 22.4, 22.8, 23.1, 23.5, 23.9, 24.3, 24.6, 25, 25.4, 25.8, 26.1, 26.5, 26.9, 27.3, 27.6, 28, 28.4, 28.8, 29.2, 29.6, 30.1, 30.5, 30.9, 31.4]
    ja_chest_width = unrounded_matched_chest_width;
    $.each(arr, function (i, item) {
        ja_chest_width = item;
        if (unrounded_matched_chest_width <= item) {
            ja_chest_width = item;
            return false;
        }
    })
    this.ja.chest_width = ja_chest_width;
    this.ja.midsection_width = this.getJAParam(this.data.size, 4);
    if (this.isInputYes('midsection_style')) {
        this.ja.midsection_width += this.getJATable10(this.data.midsection_style, this.data.size_num);
    } else {
        this.ja.midsection_width += this.getJATable10('skipped', this.data.size_num);
    }
    this.ja.midsection_width += unrounded_matched_chest_width;
    this.ja.midsection_width = this.getRound10(this.ja.midsection_width);
    this.ja.center_back_length = this.getJAParam(this.data.size, 5);
    if (this.isInputYes('tall')) {
        this.ja.center_back_length += this.getJATable4(this.data.tall, this.data.size_num);
    } else {
        this.ja.center_back_length += this.getJATable4('skipped', this.data.size_num);
    }
    this.ja.center_back_length = this.getRound10(this.ja.center_back_length);
    this.ja.sleeve_length = this.getJAParam(this.data.size, 6);
    if (this.isInputYes('tall')) {
        this.ja.sleeve_length += this.getJATable5(this.data.tall, this.data.size_num);
    } else {
        this.ja.sleeve_length += this.getJATable5('skipped', this.data.size_num);
    }
    this.ja.sleeve_length = this.getRound10(this.ja.sleeve_length);
    this.ja.sleeve_bicep_width = this.getJAParam(this.data.size, 7);
    if (this.isInputYes('weight')) {
        this.ja.sleeve_bicep_width += this.getJATable6(this.data.weight_algo, this.data.size_num);
    } else {
        this.ja.sleeve_bicep_width += this.getJATable6('skipped', this.data.size_num);
    }
    this.ja.sleeve_bicep_width = this.getRound10(this.ja.sleeve_bicep_width);
    this.ja.sleeve_opening_width = this.getJAParam(this.data.size, 8);
    if (this.isInputYes('weight')) {
        this.ja.sleeve_opening_width += this.getJATable3(this.data.weight_algo, this.data.size_num);
    } else {
        this.ja.sleeve_opening_width += this.getJATable3('skipped', this.data.size_num);
    }
    this.ja.sleeve_opening_width = this.getRound10(this.ja.sleeve_opening_width);
    this.ja.shoulder_width = this.getJAFactoryLimitations('shoulder_width', this.ja.shoulder_width, this.ja.chest_width);
    this.ja.midsection_width = this.getJAFactoryLimitations('midsection_width', this.ja.midsection_width, this.ja.chest_width);
    this.ja.center_back_length = this.getJAFactoryLimitations('center_back_length', this.ja.center_back_length, this.ja.chest_width);
    this.ja.sleeve_bicep_width = this.getJAFactoryLimitations('sleeve_bicep_width', this.ja.sleeve_bicep_width, this.ja.chest_width);
    this.ja.sleeve_opening_width = this.getJAFactoryLimitations('sleeve_opening_width', this.ja.sleeve_opening_width, this.ja.chest_width);
    this.ja.hip_width = this.getRound10(2.125 / 3.3125 * (this.ja.chest_width - this.ja.midsection_width) + this.ja.midsection_width);
    this.pa = {};
    if (this.isInputYes('pants_waist')) {
        this.pa.waist_width = this.data.pants_waist / 2 + 0.875;
    } else {
        this.pa.waist_width = this.getPAParam(this.data.size, 3);
    }
    this.pa.waist_width = this.getRound10(this.pa.waist_width);
    this.pa.hip_width = this.getRound10(Math.ceil(((this.pa.waist_width - 0.875) * 2 / 2.5 + 8.53) * 100) / 100);
    this.pa.thigh_width = this.getRound10((this.pa.waist_width - 0.875) * 2 / 4.465 + 6.212);
    this.pa.knee_width = this.getRound10((this.pa.waist_width - 0.875) * 2 / 10.06 + 5.92);
    this.pa.leg_opening_width = this.getRound10((this.pa.waist_width - 0.875) * 2 * 0.07 + 5.35);
    this.pa.front_rise = this.getRound10((this.pa.waist_width - 0.875) * 2 / 16.21 + 8.2681);
    this.pa.back_rise = this.getRound10((this.pa.waist_width - 0.875) * 2 / 5.6 + 10.6607);
    if (this.isInputYes('tall')) {
        this.pa.inseam_length = this.getPATable3(this.data.tall);
    } else {
        this.pa.inseam_length = this.getPAParam(this.data.size, 4);
    }
    this.pa.inseam_length = this.getRound10(this.pa.inseam_length);
    this.pa.total_rise = this.getRound10(this.pa.front_rise + this.pa.back_rise);
    selected_pants_base_size = this.getPASelectedPantsBaseSize(this.pa.thigh_width);
    this.pa.total_length = this.pa.inseam_length + this.getPATable4(selected_pants_base_size, 3);
    if (this.pa.front_rise > this.getPATable4(selected_pants_base_size, 4) && this.pa.back_rise > this.getPATable4(selected_pants_base_size, 5)) {
        tmp1 = this.pa.front_rise - this.getPATable4(selected_pants_base_size, 4);
        tmp2 = this.pa.back_rise - this.getPATable4(selected_pants_base_size, 5);
        if (tmp1 > tmp2) {
            this.pa.total_length += tmp2;
        } else {
            this.pa.total_length += tmp1;
        }
    } else {
        if (this.pa.front_rise < this.getPATable4(selected_pants_base_size, 4) && this.pa.back_rise < this.getPATable4(selected_pants_base_size, 5)) {
            tmp1 = this.pa.front_rise - this.getPATable4(selected_pants_base_size, 4);
            tmp2 = this.pa.back_rise - this.getPATable4(selected_pants_base_size, 5);
            if (tmp1 > tmp2) {
                this.pa.total_length += tmp1;
            } else {
                this.pa.total_length += tmp2;
            }
        }
    }
    this.pa.total_length = this.getRound10(this.pa.total_length);
}
SmartSizeTC.prototype.getRound8 = function (value) {
    return parseFloat(excelRound(value * 8) / 8);
}
SmartSizeTC.prototype.getRound10 = function (value) {
    return parseFloat(excelRound(value * 10) / 10);
}
SmartSizeTC.prototype.getJAParam = function (size, param) {
    var info = {
        "xxs": {
            2: 17,
            3: 19.75,
            4: -3.1,
            5: 27.6,
            6: 22.8,
            7: 7.2,
            8: 5.1
        },
        "xs": {
            2: 17.40625,
            3: 20.3125,
            4: -3,
            5: 27.9,
            6: 23.375,
            7: 7.4,
            8: 5.2
        },
        "s": {
            2: 17.87,
            3: 20.88541667,
            4: -2.6,
            5: 28.64772727,
            6: 24.01,
            7: 7.6,
            8: 5.3203125
        },
        "m": {
            2: 18.15915179,
            3: 21.74344444,
            4: -2.7,
            5: 29.27,
            6: 24.72919444,
            7: 7.878787879,
            8: 5.462962963
        },
        "l": {
            2: 18.68392857,
            3: 22.71878378,
            4: -2.1,
            5: 30.06,
            6: 25.43273077,
            7: 8.171875,
            8: 5.642857143
        },
        "xl": {
            2: 19.37276786,
            3: 24.21333333,
            4: -2.1,
            5: 30.62,
            6: 26.4,
            7: 8.697368421,
            8: 5.927884615
        },
        "xxl": {
            2: 20.5,
            3: 27,
            4: -1.6,
            5: 30.97916667,
            6: 26.95,
            7: 9.28125,
            8: 6.375
        },
        "3xl": {
            2: 21,
            3: 27.6,
            4: -1.3,
            5: 31.1,
            6: 27,
            7: 9.3,
            8: 6.4
        },
        "4xl": {
            2: 21.25,
            3: 28,
            4: -1,
            5: 31.3,
            6: 27.2,
            7: 9.4,
            8: 6.5
        },
        "5xl": {
            2: 21.5,
            3: 28.7,
            4: -1,
            5: 31.5,
            6: 27.4,
            7: 9.5,
            8: 6.6
        },
        "6xl": {
            2: 22.375,
            3: 30.5,
            4: -1,
            5: 31.625,
            6: 27.6,
            7: 9.6,
            8: 6.8
        }
    }
    return info[size][param];
}
SmartSizeTC.prototype.getPAParam = function (size, param) {
    var info = {
        "xxs": {
            2: 26,
            3: 13.875,
            4: 27
        },
        "xs": {
            2: 27.5,
            3: 14.625,
            4: 28
        },
        "s": {
            2: 29.5,
            3: 15.625,
            4: 29
        },
        "m": {
            2: 31.5,
            3: 16.625,
            4: 30
        },
        "l": {
            2: 34,
            3: 17.875,
            4: 32
        },
        "xl": {
            2: 36,
            3: 18.875,
            4: 34
        },
        "xxl": {
            2: 38,
            3: 19.875,
            4: 35
        },
        "3xl": {
            2: 40,
            3: 20.875,
            4: 35
        },
        "4xl": {
            2: 42,
            3: 21.875,
            4: 35
        },
        "5xl": {
            2: 44,
            3: 22.875,
            4: 35
        },
        "6xl": {
            2: 46,
            3: 23.875,
            4: 35
        }
    }
    return info[size][param];
}
SmartSizeTC.prototype.getPAMCLBaseSize = function (val) {
    arr_table = {
        "11.5625": 30,
        "11.75": 31,
        "11.9375": 32,
        "12.125": 33,
        "12.3125": 34,
        "12.5": 35,
        "12.6875": 36,
        "12.875": 37,
        "13.0625": 38,
        "13.25": 39,
        "13.4375": 40,
        "13.625": 41,
        "13.8125": 42,
        "14": 43,
        "14.1875": 44,
        "14.375": 45,
        "14.5625": 46,
        "14.75": 47,
        "14.9375": 48,
        "15.125": 49,
        "15.3125": 50,
        "15.5": 51,
        "15.6875": 52,
        "15.875": 53,
        "16.0625": 54,
        "16.25": 55,
        "16.4375": 56,
        "16.625": 57,
        "16.8125": 58,
        "17": 59,
        "17.1875": 60,
        "17.375": 61,
        "17.5625": 62
    }
    arr2 = {};
    $.each(arr_table, function (i, item) {
        arr2[i] = Math.abs(val - item[2]);
    });
    key = 30;
    min = arr2[key];
    $.each(arr2, function (i, item) {
        if (item < min) {
            key = i;
            min = item;
        }
    });
    return key;
}
SmartSizeTC.prototype.getRangeLimits = function (param, lim) {
    var info = {
        height: {
            min: 60,
            max: 84
        },
        weight: {
            min: 100,
            max: 440
        },
        suit: {
            min: 32,
            max: 60
        },
        pants_waist: {
            min: 26,
            max: 58
        }
    }
    return info[param][lim];
}
SmartSizeTC.prototype.getJATable2 = function (val1, val2) {
    arr = {
        "skipped": {
            0: 0,
            1: -0.09375,
            2: 0.066666667,
            3: 0.209117445,
            4: -0.046428571,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        },
        "100": {
            0: -0.2,
            1: -0.3,
            2: -0.5,
            3: -0.7,
            4: -0.7,
            5: -0.7,
            6: -0.7,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "110": {
            0: -0.1,
            1: -0.2,
            2: -0.4,
            3: -0.7,
            4: -0.7,
            5: -0.7,
            6: -0.7,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "120": {
            0: 0,
            1: -0.1,
            2: -0.3,
            3: -0.6,
            4: -0.7,
            5: -0.7,
            6: -0.7,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "130": {
            0: 0.1,
            1: 0,
            2: -0.3,
            3: -0.5,
            4: -0.7,
            5: -0.7,
            6: -0.7,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "140": {
            0: 0.2,
            1: 0.1,
            2: -0.3,
            3: -0.4,
            4: -0.6,
            5: -0.7,
            6: -0.7,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "150": {
            0: 0.3,
            1: 0.2,
            2: -0.2,
            3: -0.3,
            4: -0.5,
            5: -0.7,
            6: -0.7,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "160": {
            0: 0.4,
            1: 0.3,
            2: -0.1,
            3: -0.2,
            4: -0.4,
            5: -0.6,
            6: -0.7,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "170": {
            0: 0.5,
            1: 0.4,
            2: 0,
            3: 0,
            4: -0.3,
            5: -0.5,
            6: -0.6,
            7: -0.7,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "180": {
            0: 0.5,
            1: 0.5,
            2: 0.1,
            3: 0.2,
            4: -0.2,
            5: -0.4,
            6: -0.5,
            7: -0.6,
            8: -0.7,
            9: -0.7,
            10: -0.7
        },
        "190": {
            0: 0.5,
            1: 0.5,
            2: 0.2,
            3: 0.3,
            4: 0,
            5: -0.3,
            6: -0.4,
            7: -0.5,
            8: -0.6,
            9: -0.6,
            10: -0.6
        },
        "200": {
            0: 0.5,
            1: 0.5,
            2: 0.3,
            3: 0.4,
            4: 0.2,
            5: -0.2,
            6: -0.3,
            7: -0.4,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "210": {
            0: 0.5,
            1: 0.5,
            2: 0.4,
            3: 0.5,
            4: 0.3,
            5: -0.1,
            6: -0.2,
            7: -0.3,
            8: -0.4,
            9: -0.4,
            10: -0.4
        },
        "220": {
            0: 0.6,
            1: 0.5,
            2: 0.5,
            3: 0.5,
            4: 0.4,
            5: 0,
            6: -0.1,
            7: -0.2,
            8: -0.3,
            9: -0.3,
            10: -0.3
        },
        "230": {
            0: 0.7,
            1: 0.6,
            2: 0.5,
            3: 0.5,
            4: 0.5,
            5: 0.4,
            6: 0,
            7: -0.1,
            8: -0.2,
            9: -0.2,
            10: -0.2
        },
        "240": {
            0: 0.8,
            1: 0.7,
            2: 0.6,
            3: 0.6,
            4: 0.5,
            5: 0.6,
            6: 0.1,
            7: 0,
            8: -0.1,
            9: -0.1,
            10: -0.1
        },
        "250": {
            0: 0.9,
            1: 0.8,
            2: 0.7,
            3: 0.7,
            4: 0.5,
            5: 0.8,
            6: 0.2,
            7: 0.1,
            8: 0,
            9: 0,
            10: 0
        },
        "260": {
            0: 1,
            1: 0.9,
            2: 0.8,
            3: 0.8,
            4: 0.6,
            5: 0.9,
            6: 0.3,
            7: 0.2,
            8: 0.1,
            9: 0.1,
            10: 0.1
        },
        "270": {
            0: 1.1,
            1: 1,
            2: 0.9,
            3: 0.9,
            4: 0.7,
            5: 1,
            6: 0.4,
            7: 0.3,
            8: 0.2,
            9: 0.2,
            10: 0.2
        },
        "280": {
            0: 1.2,
            1: 1.1,
            2: 1,
            3: 1,
            4: 0.8,
            5: 1.1,
            6: 0.5,
            7: 0.4,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "290": {
            0: 1.3,
            1: 1.2,
            2: 1.1,
            3: 1.1,
            4: 0.9,
            5: 1.2,
            6: 0.6,
            7: 0.5,
            8: 0.4,
            9: 0.4,
            10: 0.4
        },
        "300": {
            0: 1.4,
            1: 1.3,
            2: 1.2,
            3: 1.2,
            4: 1,
            5: 1.3,
            6: 0.7,
            7: 0.6,
            8: 0.5,
            9: 0.5,
            10: 0.5
        },
        "310": {
            0: 1.5,
            1: 1.4,
            2: 1.3,
            3: 1.3,
            4: 1.1,
            5: 1.4,
            6: 0.8,
            7: 0.7,
            8: 0.6,
            9: 0.6,
            10: 0.6
        },
        "320": {
            0: 1.5,
            1: 1.5,
            2: 1.4,
            3: 1.4,
            4: 1.2,
            5: 1.5,
            6: 0.9,
            7: 0.8,
            8: 0.7,
            9: 0.7,
            10: 0.7
        },
        "330": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.3,
            5: 1.5,
            6: 1,
            7: 0.9,
            8: 0.8,
            9: 0.8,
            10: 0.8
        },
        "340": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.4,
            5: 1.5,
            6: 1.1,
            7: 1,
            8: 0.9,
            9: 0.9,
            10: 0.9
        },
        "350": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.2,
            7: 1.1,
            8: 1,
            9: 1,
            10: 1
        },
        "360": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.3,
            7: 1.2,
            8: 1.1,
            9: 1.1,
            10: 1.1
        },
        "370": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.4,
            7: 1.3,
            8: 1.2,
            9: 1.2,
            10: 1.2
        },
        "380": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.5,
            7: 1.4,
            8: 1.3,
            9: 1.3,
            10: 1.3
        },
        "390": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.5,
            7: 1.5,
            8: 1.4,
            9: 1.4,
            10: 1.4
        },
        "400": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.5,
            7: 1.5,
            8: 1.5,
            9: 1.5,
            10: 1.5
        },
        "410": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.5,
            7: 1.5,
            8: 1.5,
            9: 1.5,
            10: 1.5
        },
        "420": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.5,
            7: 1.5,
            8: 1.5,
            9: 1.5,
            10: 1.5
        },
        "430": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.5,
            7: 1.5,
            8: 1.5,
            9: 1.5,
            10: 1.5
        },
        "440": {
            0: 1.5,
            1: 1.5,
            2: 1.5,
            3: 1.5,
            4: 1.5,
            5: 1.5,
            6: 1.5,
            7: 1.5,
            8: 1.5,
            9: 1.5,
            10: 1.5
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable3 = function (val1, val2) {
    arr = {
        "skipped": {
            0: 0.0546875,
            1: 0.0546875,
            2: 0.0546875,
            3: 0.090608466,
            4: -0.038690476,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        },
        "100": {
            0: -0.15,
            1: -0.15,
            2: -0.15,
            3: -0.2,
            4: -0.25,
            5: -0.25,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "110": {
            0: -0.12,
            1: -0.12,
            2: -0.12,
            3: -0.15,
            4: -0.2,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "120": {
            0: -0.11,
            1: -0.11,
            2: -0.11,
            3: -0.1,
            4: -0.15,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "130": {
            0: -0.1015625,
            1: -0.1015625,
            2: -0.1015625,
            3: -0.1,
            4: -0.1,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "140": {
            0: -0.05,
            1: -0.05,
            2: -0.05,
            3: -0.1,
            4: -0.049107143,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "150": {
            0: 0.0234375,
            1: 0.0234375,
            2: 0.0234375,
            3: -0.08,
            4: -0.049107143,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "160": {
            0: 0.0546875,
            1: 0.0546875,
            2: 0.0546875,
            3: -0.062962963,
            4: -0.049107143,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "170": {
            0: 0.0546875,
            1: 0.0546875,
            2: 0.0546875,
            3: 0.023148148,
            4: -0.05,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "180": {
            0: 0.0546875,
            1: 0.0546875,
            2: 0.0546875,
            3: 0.090608466,
            4: -0.038690476,
            5: -0.240384615,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "190": {
            0: 0.1,
            1: 0.1,
            2: 0.1,
            3: 0.1,
            4: 0.013392857,
            5: -0.2,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "200": {
            0: 0.12,
            1: 0.12,
            2: 0.12,
            3: 0.12,
            4: 0.091517857,
            5: -0.1,
            6: -0.25,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "210": {
            0: 0.14,
            1: 0.14,
            2: 0.14,
            3: 0.14,
            4: 0.075892857,
            5: -0.05,
            6: -0.15,
            7: -0.25,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "220": {
            0: 0.162037037,
            1: 0.162037037,
            2: 0.162037037,
            3: 0.162037037,
            4: 0.1,
            5: 0.009615385,
            6: -0.1,
            7: -0.15,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "230": {
            0: 0.18,
            1: 0.18,
            2: 0.18,
            3: 0.18,
            4: 0.12,
            5: 0.097115385,
            6: -0.05,
            7: -0.1,
            8: -0.15,
            9: -0.25,
            10: -0.25
        },
        "240": {
            0: 0.2,
            1: 0.2,
            2: 0.2,
            3: 0.2,
            4: 0.14,
            5: 0.15,
            6: 0,
            7: -0.05,
            8: -0.1,
            9: -0.15,
            10: -0.25
        },
        "250": {
            0: 0.22,
            1: 0.22,
            2: 0.22,
            3: 0.22,
            4: 0.162037037,
            5: 0.2,
            6: 0.05,
            7: 0,
            8: -0.05,
            9: -0.1,
            10: -0.15
        },
        "260": {
            0: 0.24,
            1: 0.24,
            2: 0.24,
            3: 0.24,
            4: 0.18,
            5: 0.25,
            6: 0.1,
            7: 0.05,
            8: 0,
            9: -0.05,
            10: -0.1
        },
        "270": {
            0: 0.26,
            1: 0.26,
            2: 0.26,
            3: 0.26,
            4: 0.2,
            5: 0.3,
            6: 0.15,
            7: 0.1,
            8: 0.05,
            9: 0,
            10: -0.05
        },
        "280": {
            0: 0.28,
            1: 0.28,
            2: 0.28,
            3: 0.28,
            4: 0.22,
            5: 0.322115385,
            6: 0.2,
            7: 0.15,
            8: 0.1,
            9: 0.05,
            10: 0
        },
        "290": {
            0: 0.3,
            1: 0.3,
            2: 0.3,
            3: 0.3,
            4: 0.24,
            5: 0.322115385,
            6: 0.25,
            7: 0.2,
            8: 0.15,
            9: 0.1,
            10: 0.05
        },
        "300": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.26,
            5: 0.322115385,
            6: 0.3,
            7: 0.25,
            8: 0.2,
            9: 0.15,
            10: 0.1
        },
        "310": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.28,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.25,
            9: 0.2,
            10: 0.15
        },
        "320": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.3,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.25,
            10: 0.2
        },
        "330": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.25
        },
        "340": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "350": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "360": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "370": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "380": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "390": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "400": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "410": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "420": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "430": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        },
        "440": {
            0: 0.32,
            1: 0.32,
            2: 0.32,
            3: 0.32,
            4: 0.32,
            5: 0.322115385,
            6: 0.3,
            7: 0.3,
            8: 0.3,
            9: 0.3,
            10: 0.3
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable4 = function (val1, val2) {
    arr = {
        "skipped": {
            0: 0,
            1: 0,
            2: 0.508522727,
            3: 0.369460227,
            4: -0.2125,
            5: -0.277686404,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        },
        "60": {
            0: -0.8,
            1: -1.5,
            2: -1.1,
            3: -1.6,
            4: -1.9,
            5: -2.2,
            6: -2.1,
            7: -2.2,
            8: -2.3,
            9: -2.4,
            10: -2.5
        },
        "61": {
            0: -0.7,
            1: -1.4,
            2: -1,
            3: -1.5,
            4: -1.8,
            5: -2.1,
            6: -2,
            7: -2.1,
            8: -2.2,
            9: -2.3,
            10: -2.4
        },
        "62": {
            0: -0.6,
            1: -1.2,
            2: -0.9,
            3: -1.4,
            4: -1.7,
            5: -2,
            6: -1.9,
            7: -2,
            8: -2.1,
            9: -2.2,
            10: -2.3
        },
        "63": {
            0: -0.5,
            1: -1,
            2: -0.8,
            3: -1.3,
            4: -1.6,
            5: -1.9,
            6: -1.8,
            7: -1.9,
            8: -2,
            9: -2.1,
            10: -2.2
        },
        "64": {
            0: -0.4,
            1: -1,
            2: -0.7,
            3: -1.2,
            4: -1.5,
            5: -1.8,
            6: -1.7,
            7: -1.8,
            8: -1.9,
            9: -2,
            10: -2.1
        },
        "65": {
            0: -0.2,
            1: -1,
            2: -0.6,
            3: -1.1,
            4: -1.4,
            5: -1.8,
            6: -1.6,
            7: -1.7,
            8: -1.8,
            9: -1.9,
            10: -2
        },
        "66": {
            0: 0,
            1: -1,
            2: -0.6,
            3: -1,
            4: -1.3,
            5: -1.8,
            6: -1.479166667,
            7: -1.6,
            8: -1.7,
            9: -1.8,
            10: -1.9
        },
        "67": {
            0: 0.2,
            1: -0.6,
            2: -0.6,
            3: -1.0296875,
            4: -1.2,
            5: -1.7,
            6: -1.291666667,
            7: -1.479166667,
            8: -1.6,
            9: -1.7,
            10: -1.8
        },
        "68": {
            0: 0.4,
            1: -0.2,
            2: 0.102272727,
            3: -0.7,
            4: -1.2,
            5: -1.7,
            6: -1.104166667,
            7: -1.291666667,
            8: -1.479166667,
            9: -1.6,
            10: -1.7
        },
        "69": {
            0: 0.6,
            1: 0,
            2: -0.147727273,
            3: -0.5,
            4: -0.275,
            5: -1.2,
            6: -1.104166667,
            7: -1.104166667,
            8: -1.291666667,
            9: -1.479166667,
            10: -1.6
        },
        "70": {
            0: 0.7,
            1: 0.2,
            2: 0.560606061,
            3: -0.3703125,
            4: -0.275,
            5: -0.876644737,
            6: -1,
            7: -1.104166667,
            8: -1.104166667,
            9: -1.291666667,
            10: -1.479166667
        },
        "71": {
            0: 0.8,
            1: 0.4,
            2: 0.508522727,
            3: 0.369460227,
            4: -0.2125,
            5: -0.277686404,
            6: -0.75,
            7: -1,
            8: -1.104166667,
            9: -1.104166667,
            10: -1.291666667
        },
        "72": {
            0: 0.9,
            1: 0.6,
            2: 0.2671875,
            3: 0.3921875,
            4: -0.2125,
            5: 0.32127193,
            6: -0.25,
            7: -0.75,
            8: -1,
            9: -1.104166667,
            10: -1.104166667
        },
        "73": {
            0: 1,
            1: 0.8,
            2: 0.2046875,
            3: 0.4,
            4: -0.11875,
            5: -0.24122807,
            6: 0.625,
            7: -0.25,
            8: -0.75,
            9: -1,
            10: -1.104166667
        },
        "74": {
            0: 1.1,
            1: 1,
            2: 0.4,
            3: 0.6,
            4: -0.0875,
            5: 0.529605263,
            6: 1,
            7: 0.625,
            8: -0.25,
            9: -0.75,
            10: -1
        },
        "75": {
            0: 1.2,
            1: 1.1,
            2: 0.8,
            3: 0.8609375,
            4: 1.1625,
            5: 0.560855263,
            6: 1.2,
            7: 1.5,
            8: 0.625,
            9: -0.25,
            10: -0.75
        },
        "76": {
            0: 1.3,
            1: 1.2,
            2: 1.2,
            3: 1,
            4: 1.058333333,
            5: 0.592105263,
            6: 1.7,
            7: 2.1,
            8: 1.5,
            9: 0.625,
            10: -0.25
        },
        "77": {
            0: 1.4,
            1: 1.3,
            2: 1.4,
            3: 1.2,
            4: 1.0375,
            5: 0.904605263,
            6: 2.3,
            7: 2.583333333,
            8: 2.1,
            9: 1.5,
            10: 0.625
        },
        "78": {
            0: 1.5,
            1: 1.4,
            2: 1.6,
            3: 1.4,
            4: 1,
            5: 1,
            6: 2.6,
            7: 2.583333333,
            8: 2.583333333,
            9: 2.1,
            10: 1.5
        },
        "79": {
            0: 1.6,
            1: 1.5,
            2: 1.7,
            3: 1.6,
            4: 1.2,
            5: 1.1,
            6: 2.7,
            7: 2.6,
            8: 2.583333333,
            9: 2.583333333,
            10: 2.1
        },
        "80": {
            0: 1.7,
            1: 1.6,
            2: 1.8,
            3: 1.7,
            4: 1.4,
            5: 1.2,
            6: 2.8,
            7: 2.583333333,
            8: 2.583333333,
            9: 2.583333333,
            10: 2.583333333
        },
        "81": {
            0: 1.8,
            1: 1.7,
            2: 1.9,
            3: 1.8,
            4: 1.6,
            5: 1.6,
            6: 2.9,
            7: 3,
            8: 2.583333333,
            9: 2.583333333,
            10: 2.583333333
        },
        "82": {
            0: 1.9,
            1: 1.8,
            2: 2,
            3: 1.9,
            4: 1.8,
            5: 2,
            6: 3,
            7: 3.3,
            8: 3,
            9: 2.8,
            10: 2.583333333
        },
        "83": {
            0: 2,
            1: 1.9,
            2: 2.1,
            3: 2,
            4: 2,
            5: 2.2,
            6: 3.1,
            7: 3.6,
            8: 3.3,
            9: 3,
            10: 2.8
        },
        "84": {
            0: 2.1,
            1: 2,
            2: 2.1,
            3: 2.1,
            4: 2.2,
            5: 2.3,
            6: 3.2,
            7: 3.9,
            8: 3.6,
            9: 3.3,
            10: 3
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable5 = function (val1, val2) {
    arr = {
        "skipped": {
            0: 0.00,
            1: 0.50,
            2: 0.40,
            3: 0.10,
            4: -0.10,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        },
        "60": {
            0: -0.20,
            1: -0.40,
            2: -1.10,
            3: -2.00,
            4: -2.50,
            5: -2.70,
            6: -2.70,
            7: -2.70,
            8: -2.70,
            9: -2.70,
            10: -2.70
        },
        "61": {
            0: -0.15,
            1: -0.25,
            2: -0.90,
            3: -1.80,
            4: -2.40,
            5: -2.60,
            6: -2.70,
            7: -2.70,
            8: -2.70,
            9: -2.70,
            10: -2.70
        },
        "62": {
            0: -0.10,
            1: -0.20,
            2: -0.80,
            3: -1.60,
            4: -2.30,
            5: -2.50,
            6: -2.60,
            7: -2.70,
            8: -2.70,
            9: -2.70,
            10: -2.70
        },
        "63": {
            0: -0.05,
            1: -0.15,
            2: -0.70,
            3: -1.30,
            4: -2.20,
            5: -2.40,
            6: -2.50,
            7: -2.60,
            8: -2.70,
            9: -2.70,
            10: -2.70
        },
        "64": {
            0: 0.00,
            1: -0.10,
            2: -0.60,
            3: -1.00,
            4: -2.10,
            5: -2.30,
            6: -2.40,
            7: -2.50,
            8: -2.60,
            9: -2.60,
            10: -2.60
        },
        "65": {
            0: 0.10,
            1: -0.05,
            2: -0.50,
            3: -0.80,
            4: -2.00,
            5: -2.20,
            6: -2.30,
            7: -2.40,
            8: -2.50,
            9: -2.50,
            10: -2.50
        },
        "66": {
            0: 0.20,
            1: 0.00,
            2: -0.25,
            3: -0.60,
            4: -1.80,
            5: -2.10,
            6: -2.20,
            7: -2.30,
            8: -2.40,
            9: -2.40,
            10: -2.40
        },
        "67": {
            0: 0.30,
            1: 0.10,
            2: 0.00,
            3: -0.50,
            4: -1.50,
            5: -2.00,
            6: -2.10,
            7: -2.20,
            8: -2.30,
            9: -2.30,
            10: -2.30
        },
        "68": {
            0: 0.40,
            1: 0.20,
            2: 0.10,
            3: -0.25,
            4: -1.00,
            5: -1.80,
            6: -2.00,
            7: -2.10,
            8: -2.20,
            9: -2.20,
            10: -2.20
        },
        "69": {
            0: 0.50,
            1: 0.30,
            2: 0.20,
            3: -0.10,
            4: -0.50,
            5: -1.50,
            6: -1.80,
            7: -2.00,
            8: -2.10,
            9: -2.10,
            10: -2.10
        },
        "70": {
            0: 0.60,
            1: 0.40,
            2: 0.30,
            3: 0.00,
            4: -0.25,
            5: -1.00,
            6: -1.50,
            7: -1.80,
            8: -2.00,
            9: -2.00,
            10: -2.00
        },
        "71": {
            0: 0.70,
            1: 0.50,
            2: 0.40,
            3: 0.10,
            4: -0.10,
            5: -0.50,
            6: -1.00,
            7: -1.50,
            8: -1.80,
            9: -1.80,
            10: -1.80
        },
        "72": {
            0: 0.80,
            1: 0.60,
            2: 0.50,
            3: 0.20,
            4: 0.00,
            5: -0.25,
            6: -0.50,
            7: -1.00,
            8: -1.50,
            9: -1.50,
            10: -1.50
        },
        "73": {
            0: 0.90,
            1: 0.70,
            2: 0.60,
            3: 0.30,
            4: 0.10,
            5: -0.10,
            6: -0.25,
            7: -0.50,
            8: -1.00,
            9: -1.00,
            10: -1.00
        },
        "74": {
            0: 1.00,
            1: 0.80,
            2: 0.70,
            3: 0.40,
            4: 0.25,
            5: 0.00,
            6: -0.10,
            7: -0.25,
            8: -0.50,
            9: -0.50,
            10: -0.50
        },
        "75": {
            0: 1.10,
            1: 0.90,
            2: 0.80,
            3: 0.50,
            4: 0.50,
            5: 0.10,
            6: 0.00,
            7: -0.10,
            8: -0.25,
            9: -0.25,
            10: -0.25
        },
        "76": {
            0: 1.20,
            1: 1.00,
            2: 0.90,
            3: 0.70,
            4: 0.75,
            5: 0.25,
            6: 0.10,
            7: 0.00,
            8: -0.10,
            9: -0.10,
            10: -0.10
        },
        "77": {
            0: 1.30,
            1: 1.10,
            2: 1.00,
            3: 0.90,
            4: 1.00,
            5: 0.50,
            6: 0.25,
            7: 0.10,
            8: 0.00,
            9: 0.00,
            10: 0.00
        },
        "78": {
            0: 1.40,
            1: 1.20,
            2: 1.10,
            3: 1.00,
            4: 1.10,
            5: 0.75,
            6: 0.50,
            7: 0.25,
            8: 0.10,
            9: 0.10,
            10: 0.10
        },
        "79": {
            0: 1.50,
            1: 1.30,
            2: 1.20,
            3: 1.10,
            4: 1.20,
            5: 1.00,
            6: 0.75,
            7: 0.50,
            8: 0.25,
            9: 0.25,
            10: 0.25
        },
        "80": {
            0: 1.60,
            1: 1.40,
            2: 1.30,
            3: 1.20,
            4: 1.30,
            5: 1.10,
            6: 1.00,
            7: 0.75,
            8: 0.50,
            9: 0.50,
            10: 0.50
        },
        "81": {
            0: 1.70,
            1: 1.50,
            2: 1.40,
            3: 1.30,
            4: 1.40,
            5: 1.20,
            6: 1.10,
            7: 1.00,
            8: 0.75,
            9: 0.75,
            10: 0.75
        },
        "82": {
            0: 1.80,
            1: 1.60,
            2: 1.50,
            3: 1.40,
            4: 1.50,
            5: 1.30,
            6: 1.20,
            7: 1.10,
            8: 1.00,
            9: 1.00,
            10: 1.00
        },
        "83": {
            0: 1.90,
            1: 1.70,
            2: 1.60,
            3: 1.50,
            4: 1.60,
            5: 1.40,
            6: 1.30,
            7: 1.20,
            8: 1.10,
            9: 1.10,
            10: 1.10
        },
        "84": {
            0: 2.00,
            1: 1.80,
            2: 1.70,
            3: 1.70,
            4: 1.70,
            5: 1.50,
            6: 1.40,
            7: 1.30,
            8: 1.20,
            9: 1.20,
            10: 1.20
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable6 = function (val1, val2) {
    arr = {
        "skipped": {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        },
        "100": {
            0: -0.4,
            1: -0.4,
            2: -0.5,
            3: -0.5,
            4: -0.5,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "110": {
            0: -0.301535088,
            1: -0.301535088,
            2: -0.4,
            3: -0.5,
            4: -0.5,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "120": {
            0: -0.2,
            1: -0.2,
            2: -0.301535088,
            3: -0.5,
            4: -0.5,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "130": {
            0: -0.1,
            1: -0.1,
            2: -0.2,
            3: -0.4,
            4: -0.4,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "140": {
            0: 0,
            1: 0,
            2: -0.1,
            3: -0.301535088,
            4: -0.301535088,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "150": {
            0: 0,
            1: 0,
            2: 0,
            3: -0.2,
            4: -0.2,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "160": {
            0: 0.1,
            1: 0.1,
            2: 0,
            3: -0.1,
            4: -0.1,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "170": {
            0: 0.15,
            1: 0.15,
            2: 0.1,
            3: 0,
            4: 0,
            5: -0.5,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "180": {
            0: 0.2,
            1: 0.2,
            2: 0.15,
            3: 0,
            4: 0,
            5: -0.4,
            6: -0.5,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "190": {
            0: 0.22,
            1: 0.22,
            2: 0.2,
            3: 0.1,
            4: 0.1,
            5: -0.301535088,
            6: -0.4,
            7: -0.5,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "200": {
            0: 0.24,
            1: 0.24,
            2: 0.22,
            3: 0.15,
            4: 0.15,
            5: -0.2,
            6: -0.301535088,
            7: -0.4,
            8: -0.5,
            9: -0.5,
            10: -0.5
        },
        "210": {
            0: 0.26,
            1: 0.26,
            2: 0.24,
            3: 0.2,
            4: 0.2,
            5: -0.1,
            6: -0.2,
            7: -0.301535088,
            8: -0.4,
            9: -0.4,
            10: -0.4
        },
        "220": {
            0: 0.27,
            1: 0.27,
            2: 0.26,
            3: 0.22,
            4: 0.22,
            5: 0,
            6: -0.1,
            7: -0.2,
            8: -0.301535088,
            9: -0.301535088,
            10: -0.301535088
        },
        "230": {
            0: 0.28,
            1: 0.28,
            2: 0.27,
            3: 0.24,
            4: 0.23,
            5: 0,
            6: 0,
            7: -0.1,
            8: -0.2,
            9: -0.2,
            10: -0.2
        },
        "240": {
            0: 0.3,
            1: 0.3,
            2: 0.28,
            3: 0.26,
            4: 0.24,
            5: 0.1,
            6: 0,
            7: 0,
            8: -0.1,
            9: -0.1,
            10: -0.1
        },
        "250": {
            0: 0.32,
            1: 0.32,
            2: 0.3,
            3: 0.27,
            4: 0.25,
            5: 0.15,
            6: 0.1,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        },
        "260": {
            0: 0.34,
            1: 0.34,
            2: 0.32,
            3: 0.28,
            4: 0.26,
            5: 0.2,
            6: 0.15,
            7: 0.1,
            8: 0,
            9: 0,
            10: 0
        },
        "270": {
            0: 0.35,
            1: 0.35,
            2: 0.34,
            3: 0.3,
            4: 0.27,
            5: 0.22,
            6: 0.2,
            7: 0.15,
            8: 0.1,
            9: 0.1,
            10: 0.1
        },
        "280": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.32,
            4: 0.28,
            5: 0.26,
            6: 0.22,
            7: 0.2,
            8: 0.15,
            9: 0.15,
            10: 0.15
        },
        "290": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.34,
            4: 0.3,
            5: 0.28,
            6: 0.26,
            7: 0.22,
            8: 0.2,
            9: 0.2,
            10: 0.2
        },
        "300": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.32,
            5: 0.3,
            6: 0.28,
            7: 0.26,
            8: 0.22,
            9: 0.22,
            10: 0.22
        },
        "310": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.34,
            5: 0.32,
            6: 0.3,
            7: 0.28,
            8: 0.24,
            9: 0.24,
            10: 0.24
        },
        "320": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.34,
            6: 0.32,
            7: 0.3,
            8: 0.28,
            9: 0.28,
            10: 0.26
        },
        "330": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.34,
            7: 0.32,
            8: 0.3,
            9: 0.3,
            10: 0.28
        },
        "340": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.34,
            8: 0.32,
            9: 0.32,
            10: 0.3
        },
        "350": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.34,
            9: 0.34,
            10: 0.32
        },
        "360": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.34
        },
        "370": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        },
        "380": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        },
        "390": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        },
        "400": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        },
        "410": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        },
        "420": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        },
        "430": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        },
        "440": {
            0: 0.35,
            1: 0.35,
            2: 0.35,
            3: 0.35,
            4: 0.35,
            5: 0.35,
            6: 0.35,
            7: 0.35,
            8: 0.35,
            9: 0.35,
            10: 0.35
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable7 = function (val1) {
    arr = {
        "28": {
            2: 17.5
        },
        "29": {
            2: 17.9
        },
        "30": {
            2: 18.3
        },
        "31": {
            2: 18.6
        },
        "32": {
            2: 19
        },
        "33": {
            2: 19.4
        },
        "34": {
            2: 19.8
        },
        "35": {
            2: 20.1
        },
        "36": {
            2: 20.5
        },
        "37": {
            2: 20.9
        },
        "38": {
            2: 21.3
        },
        "39": {
            2: 21.6
        },
        "40": {
            2: 22
        },
        "41": {
            2: 22.4
        },
        "42": {
            2: 22.8
        },
        "43": {
            2: 23.1
        },
        "44": {
            2: 23.5
        },
        "45": {
            2: 23.9
        },
        "46": {
            2: 24.3
        },
        "47": {
            2: 24.6
        },
        "48": {
            2: 25
        },
        "49": {
            2: 25.4
        },
        "50": {
            2: 25.8
        },
        "51": {
            2: 26.1
        },
        "52": {
            2: 26.5
        },
        "53": {
            2: 26.9
        },
        "54": {
            2: 27.3
        },
        "55": {
            2: 27.6
        },
        "56": {
            2: 28
        },
        "57": {
            2: 28.4
        },
        "58": {
            2: 28.8
        },
        "59": {
            2: 29.2
        },
        "60": {
            2: 29.6
        },
        "61": {
            2: 30.1
        },
        "62": {
            2: 30.5
        },
        "63": {
            2: 30.9
        },
        "64": {
            2: 31.4
        }
    }
    return arr[val1][2];
}
SmartSizeTC.prototype.getJATable8 = function (val1, val2) {
    arr = {
        "skipped": {
            0: 0.7,
            1: 0.4,
            2: 0.7,
            3: 0.4,
            4: -0.15,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        },
        "100": {
            0: -1,
            1: -1.4,
            2: -1.8,
            3: -1.8,
            4: -2,
            5: -2.35,
            6: -2.4,
            7: -2.4,
            8: -2.4,
            9: -2.4,
            10: -2.4
        },
        "110": {
            0: -0.5,
            1: -0.6,
            2: -1,
            3: -1.6,
            4: -1.7,
            5: -2.3,
            6: -2.35,
            7: -2.4,
            8: -2.4,
            9: -2.4,
            10: -2.4
        },
        "120": {
            0: 0,
            1: 0,
            2: -0.4,
            3: -1.4,
            4: -1.4,
            5: -2.25,
            6: -2.3,
            7: -2.35,
            8: -2.4,
            9: -2.4,
            10: -2.4
        },
        "130": {
            0: 0,
            1: 0,
            2: -0.078124986,
            3: -1.3,
            4: -1.2,
            5: -2.2,
            6: -2.25,
            7: -2.3,
            8: -2.35,
            9: -2.4,
            10: -2.4
        },
        "140": {
            0: 0,
            1: 0,
            2: 0,
            3: -1.2,
            4: -1,
            5: -2.15,
            6: -2.2,
            7: -2.25,
            8: -2.3,
            9: -2.35,
            10: -2.35
        },
        "150": {
            0: 0.06,
            1: 0.01,
            2: 0.095486106,
            3: -0.8,
            4: -0.8,
            5: -2.1,
            6: -2.15,
            7: -2.2,
            8: -2.25,
            9: -2.3,
            10: -2.3
        },
        "160": {
            0: 0.1,
            1: 0.06,
            2: 0.1,
            3: -0.4,
            4: -0.6,
            5: -2.05,
            6: -2.1,
            7: -2.15,
            8: -2.2,
            9: -2.25,
            10: -2.25
        },
        "170": {
            0: 0.4,
            1: 0.1,
            2: 0.4,
            3: 0.104560326,
            4: -0.2,
            5: -2,
            6: -2.05,
            7: -2.1,
            8: -2.15,
            9: -2.2,
            10: -2.2
        },
        "180": {
            0: 0.7,
            1: 0.4,
            2: 0.7,
            3: 0.4,
            4: -0.15,
            5: -1.8,
            6: -2,
            7: -2.05,
            8: -2.1,
            9: -2.15,
            10: -2.15
        },
        "190": {
            0: 0.8,
            1: 0.7,
            2: 0.8,
            3: 0.7,
            4: -0.101476872,
            5: -1,
            6: -1.8,
            7: -2,
            8: -2.05,
            9: -2.1,
            10: -2.1
        },
        "200": {
            0: 0.9,
            1: 0.8,
            2: 0.9,
            3: 0.8,
            4: 0.3,
            5: -0.8,
            6: -1,
            7: -1.8,
            8: -2,
            9: -2.05,
            10: -2.05
        },
        "210": {
            0: 1,
            1: 0.9,
            2: 1,
            3: 0.9,
            4: 0.699418823,
            5: 0,
            6: -0.8,
            7: -1,
            8: -1.8,
            9: -2,
            10: -2
        },
        "220": {
            0: 1.1,
            1: 1,
            2: 1.1,
            3: 1,
            4: 0.75,
            5: 0.4,
            6: 0,
            7: -0.8,
            8: -1,
            9: -1.8,
            10: -1.8
        },
        "230": {
            0: 1.2,
            1: 1.1,
            2: 1.2,
            3: 1.1,
            4: 0.8,
            5: 0.8,
            6: 0.4,
            7: 0,
            8: -0.8,
            9: -1,
            10: -1
        },
        "240": {
            0: 1.3,
            1: 1.2,
            2: 1.3,
            3: 1.2,
            4: 0.9,
            5: 1.2,
            6: 0.8,
            7: 0.4,
            8: 0,
            9: -0.8,
            10: -0.8
        },
        "250": {
            0: 1.4,
            1: 1.3,
            2: 1.4,
            3: 1.3,
            4: 1,
            5: 1.3,
            6: 1.2,
            7: 0.8,
            8: 0.4,
            9: 0,
            10: 0
        },
        "260": {
            0: 1.5,
            1: 1.4,
            2: 1.5,
            3: 1.4,
            4: 1.1,
            5: 1.4,
            6: 1.3,
            7: 1.2,
            8: 0.8,
            9: 0.4,
            10: 0.4
        },
        "270": {
            0: 1.6,
            1: 1.5,
            2: 1.6,
            3: 1.5,
            4: 1.2,
            5: 1.5,
            6: 1.4,
            7: 1.3,
            8: 1.2,
            9: 0.8,
            10: 0.8
        },
        "280": {
            0: 1.7,
            1: 1.6,
            2: 1.7,
            3: 1.6,
            4: 1.3,
            5: 1.6,
            6: 1.5,
            7: 1.4,
            8: 1.3,
            9: 1.2,
            10: 1.2
        },
        "290": {
            0: 1.8,
            1: 1.7,
            2: 1.8,
            3: 1.7,
            4: 1.4,
            5: 1.7,
            6: 1.6,
            7: 1.5,
            8: 1.4,
            9: 1.3,
            10: 1.3
        },
        "300": {
            0: 1.9,
            1: 1.8,
            2: 1.9,
            3: 1.8,
            4: 1.5,
            5: 1.8,
            6: 1.7,
            7: 1.6,
            8: 1.5,
            9: 1.4,
            10: 1.4
        },
        "310": {
            0: 2,
            1: 1.9,
            2: 2,
            3: 1.9,
            4: 1.6,
            5: 1.9,
            6: 1.8,
            7: 1.7,
            8: 1.6,
            9: 1.5,
            10: 1.5
        },
        "320": {
            0: 2.1,
            1: 2,
            2: 2.1,
            3: 2,
            4: 1.7,
            5: 2,
            6: 1.9,
            7: 1.8,
            8: 1.7,
            9: 1.6,
            10: 1.6
        },
        "330": {
            0: 2.2,
            1: 2.1,
            2: 2.2,
            3: 2.1,
            4: 1.8,
            5: 2.1,
            6: 2,
            7: 1.9,
            8: 1.8,
            9: 1.7,
            10: 1.7
        },
        "340": {
            0: 2.3,
            1: 2.2,
            2: 2.3,
            3: 2.2,
            4: 1.9,
            5: 2.2,
            6: 2.1,
            7: 2,
            8: 1.9,
            9: 1.8,
            10: 1.8
        },
        "350": {
            0: 2.4,
            1: 2.3,
            2: 2.4,
            3: 2.3,
            4: 2,
            5: 2.3,
            6: 2.2,
            7: 2.1,
            8: 2,
            9: 1.9,
            10: 1.9
        },
        "360": {
            0: 2.5,
            1: 2.4,
            2: 2.5,
            3: 2.4,
            4: 2.1,
            5: 2.4,
            6: 2.3,
            7: 2.2,
            8: 2.1,
            9: 2,
            10: 2
        },
        "370": {
            0: 2.6,
            1: 2.5,
            2: 2.6,
            3: 2.5,
            4: 2.2,
            5: 2.5,
            6: 2.4,
            7: 2.3,
            8: 2.2,
            9: 2.1,
            10: 2.1
        },
        "380": {
            0: 2.7,
            1: 2.6,
            2: 2.7,
            3: 2.6,
            4: 2.3,
            5: 2.6,
            6: 2.5,
            7: 2.4,
            8: 2.3,
            9: 2.2,
            10: 2.2
        },
        "390": {
            0: 2.8,
            1: 2.7,
            2: 2.8,
            3: 2.7,
            4: 2.4,
            5: 2.7,
            6: 2.6,
            7: 2.5,
            8: 2.4,
            9: 2.3,
            10: 2.3
        },
        "400": {
            0: 2.9,
            1: 2.8,
            2: 2.9,
            3: 2.8,
            4: 2.5,
            5: 2.8,
            6: 2.7,
            7: 2.6,
            8: 2.5,
            9: 2.4,
            10: 2.4
        },
        "410": {
            0: 3,
            1: 2.9,
            2: 3,
            3: 2.9,
            4: 2.6,
            5: 2.9,
            6: 2.8,
            7: 2.7,
            8: 2.6,
            9: 2.5,
            10: 2.5
        },
        "420": {
            0: 3.1,
            1: 3,
            2: 3.1,
            3: 3,
            4: 2.7,
            5: 3,
            6: 2.9,
            7: 2.8,
            8: 2.7,
            9: 2.6,
            10: 2.6
        },
        "430": {
            0: 3.2,
            1: 3.1,
            2: 3.2,
            3: 3.1,
            4: 2.8,
            5: 3.1,
            6: 3.1,
            7: 2.9,
            8: 2.8,
            9: 2.7,
            10: 2.7
        },
        "440": {
            0: 3.2,
            1: 3.2,
            2: 3.1,
            3: 3.2,
            4: 2.9,
            5: 3.2,
            6: 3.2,
            7: 3.1,
            8: 2.9,
            9: 2.8,
            10: 2.8
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable9 = function (val1, val2) {
    arr = {
        "skipped": {
            0: -0.05,
            1: -0.05,
            2: -0.067708336,
            3: -0.067313105,
            4: -0.043212874,
            5: -0.05,
            6: -0.05,
            7: -0.05,
            8: -0.05,
            9: -0.05,
            10: -0.05
        },
        "0": {
            0: 0.2,
            1: 0.2,
            2: 0.203125008,
            3: 0.2,
            4: 0.2,
            5: 0.2,
            6: 0.2,
            7: 0.2,
            8: 0.2,
            9: 0.2,
            10: 0.2
        },
        "1": {
            0: -0.05,
            1: -0.05,
            2: -0.067708336,
            3: -0.067313105,
            4: -0.043212874,
            5: -0.05,
            6: -0.05,
            7: -0.05,
            8: -0.05,
            9: -0.05,
            10: -0.05
        },
        "2": {
            0: 0.04522567,
            1: 0.04522567,
            2: 0,
            3: 0.025434049,
            4: 0.04522567,
            5: 0.04522567,
            6: 0.04522567,
            7: 0.04522567,
            8: 0.04522567,
            9: 0.04522567,
            10: 0.04522567
        },
        "3": {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: -0.003110518,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJATable10 = function (val1, val2) {
    arr = {
        "skipped": {
            0: 0.10,
            1: 0.00,
            2: 0.00,
            3: -0.10,
            4: -0.30,
            5: 0.40,
            6: 0.30,
            7: 0.20,
            8: 0.40,
            9: 0.20,
            10: 0.00
        },
        "0": {
            0: 0.00,
            1: -0.10,
            2: -0.20,
            3: -0.20,
            4: -0.40,
            5: -0.60,
            6: -0.80,
            7: -1.00,
            8: -1.20,
            9: -1.40,
            10: -1.60
        },
        "1": {
            0: 0.10,
            1: 0.00,
            2: 0.00,
            3: -0.10,
            4: -0.30,
            5: -0.50,
            6: -0.60,
            7: -0.70,
            8: -0.80,
            9: -1.00,
            10: -1.20
        },
        "2": {
            0: 0.90,
            1: 0.80,
            2: 0.70,
            3: 0.60,
            4: 0.50,
            5: 0.40,
            6: 0.30,
            7: 0.20,
            8: 0.10,
            9: 0.00,
            10: 0.00
        },
        "3": {
            0: 1.50,
            1: 1.40,
            2: 1.30,
            3: 1.30,
            4: 1.20,
            5: 1.00,
            6: 0.80,
            7: 0.60,
            8: 0.40,
            9: 0.20,
            10: 0.00
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getJAFactoryLimitations = function (what, val, algo_val) {
    if (what == "shoulder_width") {
        min = (algo_val <= 28.75 ? ((algo_val - 22) * 8 / 3 * 0.1875 + 18.4375) : ((algo_val - 29.1875) * 16 / 7 * 0.1875 + 22)) - 0.375;
        max = (algo_val <= 28.75 ? ((algo_val - 22) * 8 / 3 * 0.1875 + 18.4375) : ((algo_val - 29.1875) * 16 / 7 * 0.1875 + 22)) + 1.25;
    }
    if (what == "midsection_width") {
        min = algo_val - 2 - 1.75;
        max = algo_val - 2 + 1.75;
    }
    if (what == "center_back_length") {
        min = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 29.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 25.6875)) - 3;
        max = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 29.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 25.6875)) + 4;
    }
    if (what == "sleeve_bicep_width") {
        min = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 7.625) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 9.25)) - 0.25;
        max = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 7.625) : ((algo_val - 29.1875) * 16 / 7 * 0.125 + 9.25)) + 0.375;
    }
    if (what == "sleeve_opening_width") {
        min = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 5.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.0625 + 6.75)) - 0.5;
        max = (algo_val <= 28.75 ? ((algo_val - 19.75) * 8 / 3 * 0.0625 + 5.1875) : ((algo_val - 29.1875) * 16 / 7 * 0.0625 + 6.75)) + 0.5;
    }
    min = this.getRound10(min);
    max = this.getRound10(max);
    return val < min ? min : (val > max ? max : val);
}
SmartSizeTC.prototype.getPATable3 = function (val1) {
    arr = {
        "60": {
            0: 26
        },
        "61": {
            0: 26.25
        },
        "62": {
            0: 26.5
        },
        "63": {
            0: 26.75
        },
        "64": {
            0: 27.125
        },
        "65": {
            0: 27.5
        },
        "66": {
            0: 27.875
        },
        "67": {
            0: 28.25
        },
        "68": {
            0: 28.625
        },
        "69": {
            0: 29
        },
        "70": {
            0: 29.375
        },
        "71": {
            0: 29.75
        },
        "72": {
            0: 30.125
        },
        "73": {
            0: 30.5
        },
        "74": {
            0: 30.875
        },
        "75": {
            0: 31.25
        },
        "76": {
            0: 31.66
        },
        "77": {
            0: 32.07
        },
        "78": {
            0: 32.48
        },
        "79": {
            0: 32.89
        },
        "80": {
            0: 33.3
        },
        "81": {
            0: 33.71
        },
        "82": {
            0: 34.12
        },
        "83": {
            0: 34.53
        },
        "84": {
            0: 34.94
        }
    }
    return arr[val1][0];
}
SmartSizeTC.prototype.getPATable4 = function (val1, val2) {
    arr = {
        "30": {
            2: 11.5625,
            3: 9.239,
            4: 9.625,
            5: 15.25
        },
        "31": {
            2: 11.75,
            3: 9.2935,
            4: 9.6875,
            5: 15.375
        },
        "32": {
            2: 11.9375,
            3: 9.349,
            4: 9.75,
            5: 15.5
        },
        "33": {
            2: 12.125,
            3: 9.4035,
            4: 9.8125,
            5: 15.625
        },
        "34": {
            2: 12.3125,
            3: 9.458,
            4: 9.875,
            5: 15.75
        },
        "35": {
            2: 12.5,
            3: 9.5125,
            4: 9.9375,
            5: 15.875
        },
        "36": {
            2: 12.6875,
            3: 9.567,
            4: 10,
            5: 16
        },
        "37": {
            2: 12.875,
            3: 9.6215,
            4: 10.0625,
            5: 16.125
        },
        "38": {
            2: 13.0625,
            3: 9.675,
            4: 10.125,
            5: 16.25
        },
        "39": {
            2: 13.25,
            3: 9.7295,
            4: 10.1875,
            5: 16.375
        },
        "40": {
            2: 13.4375,
            3: 9.783,
            4: 10.25,
            5: 16.5
        },
        "41": {
            2: 13.625,
            3: 9.8365,
            4: 10.3125,
            5: 16.625
        },
        "42": {
            2: 13.8125,
            3: 9.89,
            4: 10.375,
            5: 16.75
        },
        "43": {
            2: 14,
            3: 9.9435,
            4: 10.4375,
            5: 16.875
        },
        "44": {
            2: 14.1875,
            3: 9.997,
            4: 10.5,
            5: 17
        },
        "45": {
            2: 14.375,
            3: 10.0505,
            4: 10.5625,
            5: 17.125
        },
        "46": {
            2: 14.5625,
            3: 10.103,
            4: 10.625,
            5: 17.25
        },
        "47": {
            2: 14.75,
            3: 10.1565,
            4: 10.6875,
            5: 17.375
        },
        "48": {
            2: 14.9375,
            3: 10.209,
            4: 10.75,
            5: 17.5
        },
        "49": {
            2: 15.125,
            3: 10.2625,
            4: 10.8125,
            5: 17.625
        },
        "50": {
            2: 15.3125,
            3: 10.315,
            4: 10.875,
            5: 17.75
        },
        "51": {
            2: 15.5,
            3: 10.3675,
            4: 10.9375,
            5: 17.875
        },
        "52": {
            2: 15.6875,
            3: 10.42,
            4: 11,
            5: 18
        },
        "53": {
            2: 15.875,
            3: 10.4725,
            4: 11.0625,
            5: 18.125
        },
        "54": {
            2: 16.0625,
            3: 10.525,
            4: 11.125,
            5: 18.25
        },
        "55": {
            2: 16.25,
            3: 10.5765,
            4: 11.1875,
            5: 18.375
        },
        "56": {
            2: 16.4375,
            3: 10.629,
            4: 11.25,
            5: 18.5
        },
        "57": {
            2: 16.625,
            3: 10.6815,
            4: 11.3125,
            5: 18.625
        },
        "58": {
            2: 16.8125,
            3: 10.733,
            4: 11.375,
            5: 18.75
        },
        "59": {
            2: 17,
            3: 10.7845,
            4: 11.4375,
            5: 19
        },
        "60": {
            2: 17.1875,
            3: 10.837,
            4: 11.5,
            5: 19.25
        },
        "61": {
            2: 17.375,
            3: 10.8885,
            4: 11.5625,
            5: 19.5
        },
        "62": {
            2: 17.5625,
            3: 10.94,
            4: 11.625,
            5: 19.75
        },
        "63": {
            2: 17.75,
            3: 10.9915,
            4: 11.6875,
            5: 20
        },
        "64": {
            2: 17.9375,
            3: 11.043,
            4: 11.75,
            5: 20.25
        },
        "65": {
            2: 18.125,
            3: 11.0945,
            4: 11.8125,
            5: 20.5
        },
        "66": {
            2: 18.3125,
            3: 11.146,
            4: 11.875,
            5: 20.75
        },
        "67": {
            2: 18.5,
            3: 11.1975,
            4: 11.9375,
            5: 21
        },
        "68": {
            2: 18.6875,
            3: 11.249,
            4: 12,
            5: 21.25
        },
        "69": {
            2: 18.875,
            3: 11.3005,
            4: 12.0625,
            5: 21.5
        },
        "70": {
            2: 19.0625,
            3: 11.352,
            4: 12.125,
            5: 21.75
        },
        "71": {
            2: 19.25,
            3: 11.4035,
            4: 12.1875,
            5: 22
        },
        "72": {
            2: 19.4375,
            3: 11.455,
            4: 12.25,
            5: 22.25
        },
        "73": {
            2: 19.625,
            3: 11.5065,
            4: 12.3125,
            5: 22.5
        },
        "74": {
            2: 19.8125,
            3: 11.558,
            4: 12.375,
            5: 22.75
        },
        "75": {
            2: 20,
            3: 11.6095,
            4: 12.4375,
            5: 23
        },
        "76": {
            2: 20.1875,
            3: 11.661,
            4: 12.5,
            5: 23.25
        },
        "77": {
            2: 20.375,
            3: 11.7125,
            4: 12.5625,
            5: 23.5
        },
        "78": {
            2: 20.5625,
            3: 11.764,
            4: 12.625,
            5: 23.75
        },
        "79": {
            2: 20.75,
            3: 11.8155,
            4: 12.6875,
            5: 24
        },
        "80": {
            2: 20.9375,
            3: 11.867,
            4: 12.75,
            5: 24.25
        },
        "81": {
            2: 21.125,
            3: 11.9185,
            4: 12.8125,
            5: 24.5
        },
        "82": {
            2: 21.3125,
            3: 11.97,
            4: 12.875,
            5: 24.75
        },
        "83": {
            2: 21.5,
            3: 12.0215,
            4: 12.9375,
            5: 25
        },
        "84": {
            2: 21.6875,
            3: 12.073,
            4: 13,
            5: 25.25
        },
        "85": {
            2: 21.875,
            3: 12.1245,
            4: 13.0625,
            5: 25.5
        },
        "86": {
            2: 22.0625,
            3: 12.176,
            4: 13.125,
            5: 25.75
        },
        "87": {
            2: 22.25,
            3: 12.2275,
            4: 13.1875,
            5: 26
        },
        "88": {
            2: 22.4375,
            3: 12.279,
            4: 13.25,
            5: 26.25
        },
        "89": {
            2: 22.625,
            3: 12.3305,
            4: 13.3125,
            5: 26.5
        },
        "90": {
            2: 22.8125,
            3: 12.382,
            4: 13.375,
            5: 26.75
        },
        "91": {
            2: 23,
            3: 12.4335,
            4: 13.4375,
            5: 27
        },
        "92": {
            2: 23.1875,
            3: 12.485,
            4: 13.5,
            5: 27.25
        }
    }
    return arr[val1][val2];
}
SmartSizeTC.prototype.getPASelectedPantsBaseSize = function (thigh_width) {
    arr = {
        "30": {
            0: 11.5625,
            1: 9.239,
            2: 24.875
        },
        "31": {
            0: 11.75,
            1: 9.2935,
            2: 25.0625
        },
        "32": {
            0: 11.9375,
            1: 9.349,
            2: 25.25
        },
        "33": {
            0: 12.125,
            1: 9.4035,
            2: 25.4375
        },
        "34": {
            0: 12.3125,
            1: 9.458,
            2: 25.625
        },
        "35": {
            0: 12.5,
            1: 9.5125,
            2: 25.8125
        },
        "36": {
            0: 12.6875,
            1: 9.567,
            2: 26
        },
        "37": {
            0: 12.875,
            1: 9.6215,
            2: 26.1875
        },
        "38": {
            0: 13.0625,
            1: 9.675,
            2: 26.375
        },
        "39": {
            0: 13.25,
            1: 9.7295,
            2: 26.5625
        },
        "40": {
            0: 13.4375,
            1: 9.783,
            2: 26.75
        },
        "41": {
            0: 13.625,
            1: 9.8365,
            2: 26.9375
        },
        "42": {
            0: 13.8125,
            1: 9.89,
            2: 27.125
        },
        "43": {
            0: 14,
            1: 9.9435,
            2: 27.3125
        },
        "44": {
            0: 14.1875,
            1: 9.997,
            2: 27.5
        },
        "45": {
            0: 14.375,
            1: 10.0505,
            2: 27.6875
        },
        "46": {
            0: 14.5625,
            1: 10.103,
            2: 27.875
        },
        "47": {
            0: 14.75,
            1: 10.1565,
            2: 28.0625
        },
        "48": {
            0: 14.9375,
            1: 10.209,
            2: 28.25
        },
        "49": {
            0: 15.125,
            1: 10.2625,
            2: 28.4375
        },
        "50": {
            0: 15.3125,
            1: 10.315,
            2: 28.625
        },
        "51": {
            0: 15.5,
            1: 10.3675,
            2: 28.8125
        },
        "52": {
            0: 15.6875,
            1: 10.42,
            2: 29
        },
        "53": {
            0: 15.875,
            1: 10.4725,
            2: 29.1875
        },
        "54": {
            0: 16.0625,
            1: 10.525,
            2: 29.375
        },
        "55": {
            0: 16.25,
            1: 10.5765,
            2: 29.5625
        },
        "56": {
            0: 16.4375,
            1: 10.629,
            2: 29.75
        },
        "57": {
            0: 16.625,
            1: 10.6815,
            2: 29.9375
        },
        "58": {
            0: 16.8125,
            1: 10.733,
            2: 30.125
        },
        "59": {
            0: 17,
            1: 10.722,
            2: 30.375
        },
        "60": {
            0: 17.1875,
            1: 10.712,
            2: 30.625
        },
        "61": {
            0: 17.375,
            1: 10.701,
            2: 30.875
        },
        "62": {
            0: 17.5625,
            1: 10.69,
            2: 31.125
        }
    }
    $.each(arr, function (i, item) {
        selected_pants_base_size = i;
        if (thigh_width <= item[0]) {
            selected_pants_base_size = i;
            return false;
        }
    })
    return selected_pants_base_size;
}
SmartSizeTC.prototype.isInputYes = function (paramName) {
    switch (paramName) {
        case 'collar':
            return this.isNumeric(this.data.collar);
            break;
        case 'sleeve':
            return this.isNumeric(this.data.sleeve);
            break;
        case 'tall':
            return this.isNumeric(this.data.tall);
            break;
        case 'pants_waist':
            return this.isNumeric(this.data.pants_waist);
            break;
        case 'midsection_style':
            return this.isNumeric(this.data.midsection_style);
            break;
        case 'shirt_type':
            return this.isNumeric(this.data.shirt_type);
            break;
        case 'tucked':
            return this.isNumeric(this.data.tucked);
            break;
        case 'weight':
            return this.isNumeric(this.data.weight_algo);
            break;
        case 'shirt_tight':
            return this.isNumeric(this.data.shirt_tight);
            break;
        case 'ethnicity':
            return this.isNumeric(this.data.ethnicity);
            break;
        case 'jacket_size':
            return this.isNumeric(this.data.jacket_size);
            break;
    }
    alert("SmartSize.prototype.isInputYes() - param '" + paramName + "' doesn't exist");
}
SmartSizeTC.prototype.isNumeric = function (value) {
    return !isNaN(parseFloat(value));
}

function number_format(number, decimals, dec_point, thousands_sep) {
    var exponent = "";
    var numberstr = number.toString();
    var eindex = numberstr.indexOf("e");
    var i, z;
    if (eindex > -1) {
        exponent = numberstr.substring(eindex);
        number = parseFloat(numberstr.substring(0, eindex));
    }
    if (decimals != null) {
        var temp = Math.pow(10, decimals);
        number = Math.round(number * temp) / temp;
    }
    var sign = number < 0 ? "-" : "";
    var integer = (number > 0 ? Math.floor(number) : Math.abs(Math.ceil(number))).toString();
    var fractional = number.toString().substring(integer.length + sign.length);
    dec_point = dec_point != null ? dec_point : ".";
    fractional = decimals != null && decimals > 0 || fractional.length > 1 ? (dec_point + fractional.substring(1)) : "";
    if (decimals != null && decimals > 0) {
        for (i = fractional.length - 1, z = decimals; i < z; ++i)
            fractional += "0";
    }
    thousands_sep = (thousands_sep != dec_point || fractional.length == 0) ? thousands_sep : null;
    if (thousands_sep != null && thousands_sep != "") {
        for (i = integer.length - 3; i > 0; i -= 3)
            integer = integer.substring(0, i) + thousands_sep + integer.substring(i);
    }
    return sign + integer + fractional + exponent;
}
var ConvertMethod = {
    PoundsToKg: function (num) {
        return number_format((excelRound(10 * parseFloat(num) / 2.20462) / 10), 1);
    },
    KgToPounds: function (num) {
        return number_format((excelRound(100 * parseFloat(num) * 2.20462) / 100), 1);
    },
    TallInchesToCm: function (tall_feet, tall_inches) {
        return number_format((excelRound(10 * (parseInt(tall_feet) * 12 + parseFloat(tall_inches)) / 0.393701) / 10), 1);
    },
    InchesToCm: function (num) {
        return number_format((excelRound(10 * parseFloat(num) / 0.393701) / 10), 1);
    },
    CmToInches: function (num) {
        return number_format((excelRound(100 * parseFloat(num) * 0.393701) / 100), 2);
    },
    UsToEu: function (num) {
        return parseInt(num) + 10;
    },
    CmToFeetInches: function (num) {
        inches = this.CmToInches(num);
        res = {};
        res.feet = Math.floor(inches / 12);
        res.inches = number_format((inches - res.feet * 12), 2);
        return res;
    },
    ConvField: function (field) {
        if (IntMetric == 'cm') {
            $('#' + field).val(number_format(this.InchesToCm($('#' + field)._in()), 1));
        } else {
            $('#' + field).val(number_format($('#' + field)._in(), 2));
        }
    },
    ToggleMetric: function () {
        if (typeof this_is_das3 != 'undefined') {
            ConvertMethod.ConvField('collar_field_das3');
            ConvertMethod.ConvField('sleeve_field_das3');
            ConvertMethod.ConvField('yoke_field_das3');
            ConvertMethod.ConvField('chest_field_das3');
            ConvertMethod.ConvField('midsection_field_das3');
            ConvertMethod.ConvField('length_field_das3');
            ConvertMethod.ConvField('sleeve_w_field_das3');
            ConvertMethod.ConvField('cuff_field_das3');
            ConvertMethod.ConvField('short_sleeve_length_field_das3');
            ConvertMethod.ConvField('short_sleeve_width_field_das3');
            ConvertMethod.ConvField('short_sleeve_opening_width_field_das3');
            ConvertMethod.ConvField('adddim_bottom_width_field_das3');
        } else {
            ConvertMethod.ConvField('collar_field');
            ConvertMethod.ConvField('sleeve_field');
            ConvertMethod.ConvField('yoke_field');
            ConvertMethod.ConvField('chest_field');
            ConvertMethod.ConvField('midsection_field');
            ConvertMethod.ConvField('length_field');
            ConvertMethod.ConvField('sleeve_w_field');
            ConvertMethod.ConvField('cuff_field');
            ConvertMethod.ConvField('short_sleeve_length_field');
            ConvertMethod.ConvField('short_sleeve_width_field');
            ConvertMethod.ConvField('short_sleeve_opening_width_field');
            ConvertMethod.ConvField('adddim_default_value');
            ConvertMethod.ConvField('adddim_bottom_width_field');
        }
        this.ToggleMetricAddim();
    },
    ToggleMetricAddim: function () {
        $('#adddim_cuff_watch_allowance_field option:eq(1), #adddim_cuff_watch_allowance_field_das3 option:eq(1)').text(IntMetric == 'cm' ? '+0.6cm Left Cuff' : '+0.25" Left Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(2), #adddim_cuff_watch_allowance_field_das3 option:eq(2)').text(IntMetric == 'cm' ? '+1.3cm Left Cuff' : '+0.5" Left Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(3), #adddim_cuff_watch_allowance_field_das3 option:eq(3)').text(IntMetric == 'cm' ? '+1.9cm Left Cuff' : '+0.75" Left Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(4), #adddim_cuff_watch_allowance_field_das3 option:eq(4)').text(IntMetric == 'cm' ? '+0.6cm Right Cuff' : '+0.25" Right Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(5), #adddim_cuff_watch_allowance_field_das3 option:eq(5)').text(IntMetric == 'cm' ? '+1.3cm Right Cuff' : '+0.5" Right Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(6), #adddim_cuff_watch_allowance_field_das3 option:eq(6)').text(IntMetric == 'cm' ? '+1.9cm Right Cuff' : '+0.75" Right Cuff');
        $('#adddim_posture_field option:eq(1), #adddim_posture_field_das3 option:eq(1)').text(IntMetric == 'cm' ? 'Neck Back 1.3cm' : 'Neck Back 1/2"');
        $('#adddim_posture_field option:eq(2), #adddim_posture_field_das3 option:eq(2)').text(IntMetric == 'cm' ? 'Neck Back 2.5cm' : 'Neck Back 1"');
        $('#adddim_posture_field option:eq(3), #adddim_posture_field_das3 option:eq(3)').text(IntMetric == 'cm' ? 'Neck Forward 1.3cm' : 'Neck Forward 1/2"');
        $('#adddim_posture_field option:eq(4), #adddim_posture_field_das3 option:eq(4)').text(IntMetric == 'cm' ? 'Neck Forward 2.5cm' : 'Neck Forward 1"');
        $('#adddim_top_button_placement_field option:eq(0), #adddim_top_button_placement_field_das3 option:eq(0)').text(IntMetric == 'cm' ? 'Raised 2.5cm' : 'Raised 1"');
        $('#adddim_top_button_placement_field option:eq(1), #adddim_top_button_placement_field_das3 option:eq(1)').text(IntMetric == 'cm' ? 'Raised 1.3cm' : 'Raised 1/2"');
        $('#adddim_top_button_placement_field option:eq(3), #adddim_top_button_placement_field_das3 option:eq(3)').text(IntMetric == 'cm' ? 'Lowered 1.3cm' : 'Lowered 1/2"');
    },
    metric: function (num) {
        if (IntMetric == 'cm') {
            return number_format(this.InchesToCm(num), 1);
        } else {
            return number_format(num, 2);
        }
    }
}
jQuery.fn.extend({
    _in: function () {
        if (IntMetric == 'disabled') {
            return parseFloat($(this).val());
        } else {
            return isNaN(parseFloat($(this).attr('in-value'))) ? parseFloat($(this).val()) : parseFloat($(this).attr('in-value'));
        }
    },
    _cm: function () {
        return isNaN(parseFloat($(this).attr('cm-value'))) ? parseFloat($(this).val()) : parseFloat($(this).attr('cm-value'));
    },
    _val: function (val) {
        $(this).attr('in-value', val);
        $(this).val(ConvertMethod.metric(val));
    }
});
$(document).ready(function () {
    if (typeof stop_update_size_fields === "undefined" || !stop_update_size_fields) {
        if (IntMetric == 'cm') {
            $('input:radio[name="toggle-metric"][value="cm"]').attr('checked', 'checked').click();
            ConvertMethod.ToggleMetric();
        }
    } else {
        $('#adddim_cuff_watch_allowance_field option:eq(1)').text(IntMetric == 'cm' ? '+0.6cm Left Cuff' : '+0.25" Left Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(2)').text(IntMetric == 'cm' ? '+1.3cm Left Cuff' : '+0.5" Left Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(3)').text(IntMetric == 'cm' ? '+1.9cm Left Cuff' : '+0.75" Left Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(4)').text(IntMetric == 'cm' ? '+0.6cm Right Cuff' : '+0.25" Right Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(5)').text(IntMetric == 'cm' ? '+1.3cm Right Cuff' : '+0.5" Right Cuff');
        $('#adddim_cuff_watch_allowance_field option:eq(6)').text(IntMetric == 'cm' ? '+1.9cm Right Cuff' : '+0.75" Right Cuff');
        $('#adddim_posture_field option:eq(1)').text(IntMetric == 'cm' ? 'Neck Back 1.3cm' : 'Neck Back 1/2"');
        $('#adddim_posture_field option:eq(2)').text(IntMetric == 'cm' ? 'Neck Back 2.5cm' : 'Neck Back 1"');
        $('#adddim_posture_field option:eq(3)').text(IntMetric == 'cm' ? 'Neck Forward 1.3cm' : 'Neck Forward 1/2"');
        $('#adddim_posture_field option:eq(4)').text(IntMetric == 'cm' ? 'Neck Forward 2.5cm' : 'Neck Forward 1"');
        $('#adddim_top_button_placement_field option:eq(0)').text(IntMetric == 'cm' ? 'Raised 2.5cm' : 'Raised 1"');
        $('#adddim_top_button_placement_field option:eq(1)').text(IntMetric == 'cm' ? 'Raised 1.3cm' : 'Raised 1/2"');
        $('#adddim_top_button_placement_field option:eq(3)').text(IntMetric == 'cm' ? 'Lowered 1.3cm' : 'Lowered 1/2"');
    }
    $('.unit-footnote a').click(function (e) {
        e.preventDefault();
        $(this).find('.unit-toggle').addClass('is-shown');
    });
    $('.unit-toggle label').click(function (e) {
        e.stopPropagation();
        $(this).closest('.unit-toggle').removeClass('is-shown');
    });
    $('input[name="toggle-metric"]').change(function () {
        var unit = '';
        IntMetric = $(this).filter(':checked').val();
        if (IntMetric == "in") {
            unit = "inches"
        } else {
            unit = "centimeters"
        }
        $('.unit-footnote i').text(unit);
        ConvertMethod.ToggleMetric();
        if (user_is_authorize) {
            $.ajax({
                url: BASE_URL + "my_account.php",
                type: "post",
                dataType: "json",
                data: {
                    action_a: 'form_edit_units',
                    val: IntMetric == "in" ? 0 : 1
                }
            });
        }
    });
});;
var $body = $('body'),
    $section = $('section'),
    $ssApp = $('.SmartGrid');
var SmartGrid = new Vue({
    el: '#smart-sizes-grid',
    data: {
        unit: 'us',
        current_question: 0,
        total_questions: ss_questions_steps.length,
        ss_answers: {
            size: '',
            size_name: '',
            collar: '',
            sleeve: '',
            tall: '',
            tall_feets: '',
            tall_inches: '',
            pants_waist: '',
            midsection_style: '',
            shirt_type: '',
            tucked: '',
            weight: '',
            shirt_tight: '',
            ethnicity: '',
            jacket_size: '',
            pants_inseam: '',
            best_chest_shoulders: '',
            best_buttocks_thighs: '',
            like_pants_to_fit: '',
            like_bottom_pants: '',
            high_wear_pants: '',
            year_born: '',
            shoe_size: ''
        },
        ss_answers_other: {
            size: '',
            size_name: '',
            collar: '',
            sleeve: '',
            tall: '',
            tall_feets: '',
            tall_inches: '',
            pants_waist: '',
            midsection_style: '',
            shirt_type: '',
            tucked: '',
            weight: '',
            shirt_tight: '',
            ethnicity: '',
            jacket_size: '',
            pants_inseam: '',
            best_chest_shoulders: '',
            best_buttocks_thighs: '',
            like_pants_to_fit: '',
            like_bottom_pants: '',
            high_wear_pants: '',
            year_born: '',
            shoe_size: ''
        },
        dimensions_cs: {},
        debug_dimensions_ja: {},
        debug_dimensions_pa: {}
    },
    methods: {
        changeUnits: function (unit) {
            if (this.unit == unit) return false;
            this.unit = unit;
            IntMetric = this.unit == 'us' ? 'in' : 'cm';
            $self = this;
            if (isAuth()) {
                $.ajax({
                    url: BASE_URL + "my_account.php",
                    type: "post",
                    dataType: "json",
                    data: {
                        action_a: "form_edit_units",
                        val: IntMetric == "in" ? 0 : 1
                    }
                });
            }
            $('.current-unit').text(unit == 'us' ? 'US' : 'Metric').removeClass('is-shown');
            $('#smart-sizes-grid .question[data-type="input"]').each(function (i, el) {
                if ($(el).find('a').not('.is-active').length > 0) {
                    if ($(el).find('input').data('what') == 'height') {
                        $(el).find('.answer').not('.block').each(function (i2, el2) {
                            if (unit == 'metric') {
                                $(el2).find('span').text($(el2).find('input').attr('cm-value'));
                            } else {
                                $(el2).find('span').text($(el2).find('input').attr('in-value'));
                            }
                        });
                        if (unit == 'metric') {
                            $('.height-ft').parent().hide();
                            $('.height-in').parent().find('.other-label').text('cm');
                        } else {
                            $('.height-ft').parent().show();
                            $('.height-in').parent().find('.other-label').text('in');
                        }
                        if ($(el).find('input[type="radio"]:checked').val() == 'other') {
                            if (unit == 'metric') {
                                val = parseInt($('.height-ft').val()) * 12 + parseFloat($('.height-in').val());
                                $self.ss_answers_other.tall_inches = ConvertMethod.InchesToCm(val);
                            } else {
                                val = parseFloat($('.height-in').val());
                                val = ConvertMethod.CmToFeetInches(val);
                                $self.ss_answers_other.tall_feets = val.feet;
                                $self.ss_answers_other.tall_inches = val.inches;
                            }
                            $(el).find('.other-input input').parent().click();
                        } else {
                            val = $(el).find('input[type="radio"]:checked');
                            if (val.val().length > 0) {
                                if (unit == 'metric') {
                                    val = val.val();
                                    val = val.split("_");
                                    val = parseInt(val[0]) * 12 + parseFloat(val[1]);
                                    $self.ss_answers_other.tall_inches = ConvertMethod.InchesToCm(val);
                                } else {
                                    val = val._cm();
                                    val = ConvertMethod.CmToFeetInches(val);
                                    $self.ss_answers_other.tall_feets = val.feet;
                                    $self.ss_answers_other.tall_inches = val.inches;
                                }
                                $(el).find('.other-input input').parent().click();
                            }
                        }
                    }
                    if ($(el).find('input').data('what') == 'weight' || $(el).find('input').data('what') == 'jacket_size' || $(el).find('input').data('what') == 'pants_waist' || $(el).find('input').data('what') == 'collar' || $(el).find('input').data('what') == 'sleeve' || $(el).find('input').data('what') == 'pants_inseam' || $(el).find('input').data('what') == 'shoe_size') {
                        $(el).find('.answer').not('.block').each(function (i2, el2) {
                            if (unit == 'metric') {
                                $(el2).find('span').text($(el2).find('input').attr('cm-value'));
                            } else {
                                $(el2).find('span').text($(el2).find('input').attr('in-value'));
                            }
                        });
                        $(el).find('.other-label').text($(el).find('.answers').attr('data-measure-' + unit));
                        if ($(el).find('input[type="radio"]:checked').val() == 'other') {
                            val = parseFloat($(el).find('.other-input input').val());
                            if ($(el).find('input').data('what') == 'weight') {
                                val = unit == 'metric' ? ConvertMethod.PoundsToKg(val) : ConvertMethod.KgToPounds(val);
                            }
                            if ($(el).find('input').data('what') == 'jacket_size') {
                                val = unit == 'metric' ? val + 10 : val - 10;
                            }
                            if ($(el).find('input').data('what') == 'pants_waist') {
                                val = unit == 'metric' ? ConvertMethod.InchesToCm(val) : ConvertMethod.CmToInches(val);
                            }
                            if ($(el).find('input').data('what') == 'collar') {
                                val = unit == 'metric' ? ConvertMethod.InchesToCm(val) : ConvertMethod.CmToInches(val);
                            }
                            if ($(el).find('input').data('what') == 'sleeve') {
                                val = unit == 'metric' ? ConvertMethod.InchesToCm(val) : ConvertMethod.CmToInches(val);
                            }
                            if ($(el).find('input').data('what') == 'shoe_size') {
                                val = unit == 'metric' ? val + 33 : val - 33;
                            }
                            $self.ss_answers_other[$(el).find('input').data('what')] = val;
                        } else {
                            val = $(el).find('input[type="radio"]:checked');
                            if ($(el).find('input').data('what') == 'weight') {
                                val = unit == 'metric' ? ConvertMethod.PoundsToKg(val._in()) : ConvertMethod.KgToPounds(val._cm());
                            }
                            if ($(el).find('input').data('what') == 'jacket_size') {
                                val = unit == 'metric' ? val._in() + 10 : val._cm() - 10;
                            }
                            if ($(el).find('input').data('what') == 'pants_waist') {
                                val = unit == 'metric' ? ConvertMethod.InchesToCm(val._in()) : ConvertMethod.CmToInches(val._cm());
                            }
                            if ($(el).find('input').data('what') == 'collar') {
                                val = unit == 'metric' ? ConvertMethod.InchesToCm(val._in()) : ConvertMethod.CmToInches(val._cm());
                            }
                            if ($(el).find('input').data('what') == 'sleeve') {
                                val = unit == 'metric' ? ConvertMethod.InchesToCm(val._in()) : ConvertMethod.CmToInches(val._cm());
                            }
                            if ($(el).find('input').data('what') == 'shoe_size') {
                                val = unit == 'metric' ? val._in() + 33 : val._cm() - 33;
                            }
                            $self.ss_answers_other[$(el).find('input').data('what')] = val;
                            $(el).find('.other-input input').parent().click();
                        }
                    }
                }
            })
        },
        nextQuestion: function () {
            this.getOutput();
            if (!this.validate(ss_questions_steps[this.current_question])) {
                return false;
            }
            $('html, body').animate({
                scrollTop: 0
            }, 0);
            this.updateMeasurements();
            $('.question').removeClass('is-current');
            if (this.current_question == this.total_questions - 1) {
                if ($('.survey-wrap').hasClass('survey-insider')) {
                    $('body').addClass('all-answered').addClass('is-best-fit-questions');
                    SSInsiderResearch.showQueTab1();
                    this.updateResults();
                    $('.survey-progress, .progress-bar, #smart-sizes-grid, #ss-results').hide();
                } else {
                    if (isAuth()) {
                        this.updateResults();
                        $body.removeClass('is-registering');
                        $body.addClass('is-reviewing');
                    } else {
                        $body.removeClass('is-reviewing');
                        $body.addClass('is-registering');
                        setTimeout(function () {
                            $('#email').focus();
                        }, 100);
                    }
                }
                return false;
            }
            this.current_question++;
            $('#smart_size_step_' + ss_questions_steps[this.current_question]).addClass('is-current');
            this.progressBarView();
        },
        prevQuestion: function () {
            $('.question').removeClass('is-current');
            this.current_question--;
            $('#smart_size_step_' + ss_questions_steps[this.current_question]).addClass('is-current');
            this.progressBarView();
        },
        jumpQuestion: function (question_id) {
            $body.removeClass('is-registering is-reviewing show-answers');
            $section.removeClass('is-current');
            $('.question').removeClass('is-current');
            $section.addClass('is-visible');
            $('#smart_size_step_' + ss_questions_steps[question_id]).addClass('is-current');
            this.current_question = question_id;
            this.progressBarView();
        },
        backReview: function () {
            this.updateResults();
            $body.addClass('is-reviewing');
            $body.removeClass('is-registering');
            $body.addClass('show-answers');
        },
        backChange: function () {
            $body.removeClass('is-reviewing');
            $body.removeClass('is-registering');
            $body.removeClass('show-answers');
        },
        backDimensions: function () {
            if ($body.hasClass('show-answers')) {
                $body.removeClass('is-registering');
                $body.removeClass('show-answers');
            } else {
                $body.addClass('is-reviewing');
                $body.removeClass('is-registering');
                $body.removeClass('show-answers');
            }
        },
        showDimensions: function (tc_type, event) {
            $('#dimensions-ja, #dimensions-pa, #dimensions-cs-1, #dimensions-cs-2, #dimensions-cs-3').hide();
            $('#ss-dimensions a[href="#results"]').removeClass('is-active');
            $('#ss-dimensions a[href="#results"][ss-type="' + tc_type + '"]').addClass("is-active");
            this.updateResults();
            $('#dimensions-' + tc_type).show();
        },
        progressBarView: function () {
            segment_length = 100 / this.total_questions;
            if (this.current_question != this.total_questions) {
                progress = this.current_question * segment_length;
            } else {
                progress = 100;
            }
            document.querySelector('.progress-bar-progress').style.width = progress + '%';
        },
        getOutput: function () {
            var size = $("#smart_size_step_1 .answer input:checked").val();
            var size_name = $("#smart_size_step_1 .answer input:checked").parent().text();
            var shirt_tight = '';
            var tall = '';
            var tall_feets = '';
            var tall_inches = '';
            value = $('#smart_size_step_3 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    tall_feets = this.ss_answers_other.tall_feets;
                    tall_inches = this.ss_answers_other.tall_inches;
                } else {
                    value = ConvertMethod.CmToFeetInches(this.ss_answers_other.tall_inches)
                    tall_feets = value.feet;
                    tall_inches = value.inches;
                }
            } else {
                if (value != '') {
                    if (this.unit == 'us') {
                        value = $('#smart_size_step_3 input[type="radio"]:checked').val();
                        value = value.split("_");
                        tall_feets = value[0];
                        tall_inches = value[1];
                    } else {
                        value = $('#smart_size_step_3 input[type="radio"]:checked')._cm();
                        value = ConvertMethod.CmToFeetInches(value);
                        tall_feets = value.feet;
                        tall_inches = value.inches;
                    }
                }
            }
            var weight = '';
            value = $('#smart_size_step_4 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    weight = this.ss_answers_other.weight;
                } else {
                    weight = ConvertMethod.KgToPounds(this.ss_answers_other.weight);
                }
            } else {
                if (value != '') {
                    value = this.unit == 'us' ? $('#smart_size_step_4 input[type="radio"]:checked')._in() : ConvertMethod.KgToPounds($('#smart_size_step_4 input[type="radio"]:checked')._cm());
                    var weight = value;
                }
            }
            var ethnicity = $("#smart_size_step_5 .answer input:checked").val();
            var jacket_size = '';
            value = $('#smart_size_step_6 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    jacket_size = this.ss_answers_other.jacket_size;
                } else {
                    jacket_size = parseInt(this.ss_answers_other.jacket_size) - 10;
                }
            } else {
                if (value != '') {
                    value = $('#smart_size_step_6 input[type="radio"]:checked').val();
                    jacket_size = value;
                }
            }
            var pants_waist = '';
            value = $('#smart_size_step_7 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    pants_waist = this.ss_answers_other.pants_waist;
                } else {
                    pants_waist = ConvertMethod.CmToInches(this.ss_answers_other.pants_waist);
                }
            } else {
                if (value != '') {
                    pants_waist = this.unit == 'us' ? value : ConvertMethod.CmToInches($('#smart_size_step_7 input[type="radio"]:checked')._cm());
                }
            }
            var midsection_style = $("#smart_size_step_8 .answer input:checked").val();
            var collar = '';
            value = $('#smart_size_step_9 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    collar = this.ss_answers_other.collar;
                } else {
                    collar = ConvertMethod.CmToInches(this.ss_answers_other.collar);
                }
            } else {
                if (value != '') {
                    collar = this.unit == 'us' ? value : ConvertMethod.CmToInches($('#smart_size_step_9 input[type="radio"]:checked')._cm());
                }
            }
            var sleeve = '';
            value = $('#smart_size_step_10 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    sleeve = this.ss_answers_other.sleeve;
                } else {
                    sleeve = ConvertMethod.CmToInches(this.ss_answers_other.sleeve);
                }
            } else {
                if (value != '') {
                    sleeve = this.unit == 'us' ? value : ConvertMethod.CmToInches($('#smart_size_step_10 input[type="radio"]:checked')._cm());
                }
            }
            var tucked = $("#smart_size_step_11 .answer input:checked").val();
            var shirt_type = $("#smart_size_step_12 .answer input:checked").val();
            var pants_inseam = '';
            value = $('#smart_size_step_13 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    pants_inseam = this.ss_answers_other.pants_inseam;
                } else {
                    pants_inseam = ConvertMethod.CmToInches(this.ss_answers_other.pants_inseam);
                }
            } else {
                if (value != '') {
                    pants_inseam = this.unit == 'us' ? value : ConvertMethod.CmToInches($('#smart_size_step_13 input[type="radio"]:checked')._cm());
                }
            }
            var best_chest_shoulders = $("#smart_size_step_14 .answer input:checked").val();
            var best_buttocks_thighs = $("#smart_size_step_15 .answer input:checked").val();
            var like_pants_to_fit = $("#smart_size_step_16 .answer input:checked").val();
            var like_bottom_pants = $("#smart_size_step_17 .answer input:checked").val();
            var high_wear_pants = $("#smart_size_step_18 .answer input:checked").val();
            var high_wear_pants = $("#smart_size_step_18 .answer input:checked").val();
            var year_born = $('#smart_size_step_19 input[type="radio"][value=""]').is(':checked') ? '' : $("#smart_size_step_19 select").val();
            var shoe_size = '';
            value = $('#smart_size_step_20 input[type="radio"]:checked').val();
            if (value == 'other') {
                if (this.unit == 'us') {
                    shoe_size = this.ss_answers_other.shoe_size;
                } else {
                    shoe_size = this.ss_answers_other.shoe_size - 33;
                }
            } else {
                if (value != '') {
                    shoe_size = $('#smart_size_step_20 input[type="radio"]:checked').val();
                }
            }
            this.ss_answers = {
                size: size,
                size_name: size_name,
                collar: collar,
                sleeve: sleeve,
                tall: tall,
                tall_feets: tall_feets,
                tall_inches: tall_inches,
                pants_waist: pants_waist,
                midsection_style: midsection_style,
                shirt_type: shirt_type,
                tucked: tucked,
                weight: weight,
                shirt_tight: shirt_tight,
                ethnicity: ethnicity,
                jacket_size: jacket_size,
                pants_inseam: pants_inseam,
                best_chest_shoulders: best_chest_shoulders,
                best_buttocks_thighs: best_buttocks_thighs,
                like_pants_to_fit: like_pants_to_fit,
                like_bottom_pants: like_bottom_pants,
                high_wear_pants: high_wear_pants,
                year_born: year_born,
                shoe_size: shoe_size
            };
            return this.ss_answers;
        },
        validate: function (question_id) {
            question_id = parseInt(question_id);
            var smartSizeAnswers = this.getOutput();
            if (question_id == 1) {
                if (smartSizeAnswers.size == undefined) {
                    alert('Please answer at least the first question so that we can generate a size for you.');
                    return false;
                }
            }
            var obj = $('#smart_size_step_' + question_id);
            if (obj.find('input[type="radio"]:checked').val() == 'other') {
                switch (question_id) {
                    case 3:
                        if (this.unit == 'us') {
                            val = parseInt(smartSizeAnswers.tall_feets) * 12 + parseFloat(smartSizeAnswers.tall_inches);
                            msg = 'Enter a height between 4–8 ft and 0–12 inches.';
                        } else {
                            val = ConvertMethod.CmToInches(parseFloat($('.height-in').val()));
                            msg = 'Enter a height between 122–243 cm.';
                        }
                        if (smartSizeAnswers.tall_inches.length == 0 || isNaN(smartSizeAnswers.tall_feets) || (smartSizeAnswers.tall_inches.length > 0 && isNaN(smartSizeAnswers.tall_inches)) || (val < 48 || val > 96 || (this.unit == 'us' && (parseFloat(smartSizeAnswers.tall_inches) < 0 || parseFloat(smartSizeAnswers.tall_inches) > 12)))) {
                            obj.find('.answers').find('.invalid-msg').text(msg);
                            obj.find('.other-input').addClass('is-invalid');
                            return false;
                        } else {
                            obj.find('.other-input').removeClass('is-invalid');
                        }
                        break;
                    case 4:
                        val = smartSizeAnswers.weight;
                        if (this.unit == 'us') {
                            msg = 'Enter a weight between 85–600 lbs.';
                        } else {
                            msg = 'Enter a weight between 39–272 kg.';
                        }
                        if (isNaN(val) || (val < 85 || val > 600)) {
                            obj.find('.answers').find('.invalid-msg').text(msg);
                            obj.find('.other-input').addClass('is-invalid');
                            return false;
                        } else {
                            obj.find('.other-input').removeClass('is-invalid');
                        }
                        break;
                    case 7:
                        val = smartSizeAnswers.pants_waist;
                        if (this.unit == 'us') {
                            msg = 'Enter a waist between 24–74 inches.';
                        } else {
                            msg = 'Enter a waist between 61–187 cm.';
                        }
                        if (isNaN(val) || (val < 24 || val > 74)) {
                            obj.find('.answers').find('.invalid-msg').text(msg);
                            obj.find('.other-input').addClass('is-invalid');
                            return false;
                        } else {
                            obj.find('.other-input').removeClass('is-invalid');
                        }
                        break;
                    case 9:
                        val = smartSizeAnswers.collar;
                        if (this.unit == 'us') {
                            msg = 'Enter a collar size between 11–26 inches.';
                        } else {
                            msg = 'Enter a collar size between 28–66 cm.';
                        }
                        if (isNaN(val) || (val < 11 || val > 26)) {
                            obj.find('.answers').find('.invalid-msg').text(msg);
                            obj.find('.other-input').addClass('is-invalid');
                            return false;
                        } else {
                            obj.find('.other-input').removeClass('is-invalid');
                        }
                        break;
                    case 10:
                        val = smartSizeAnswers.sleeve;
                        if (this.unit == 'us') {
                            msg = 'Enter a sleeve length between 28–42 inches.';
                        } else {
                            msg = 'Enter a sleeve length between 72–106 cm.';
                        }
                        if (isNaN(val) || (val < 28 || val > 42)) {
                            obj.find('.answers').find('.invalid-msg').text(msg);
                            obj.find('.other-input').addClass('is-invalid');
                            return false;
                        } else {
                            obj.find('.other-input').removeClass('is-invalid');
                        }
                        break;
                    case 6:
                        val = smartSizeAnswers.jacket_size;
                        if (this.unit == 'us') {
                            msg = 'Enter a jacket size between 32-70.';
                        } else {
                            msg = 'Enter a jacket size between 32-70.';
                        }
                        if (isNaN(val) || (val < 32 || val > 70)) {
                            obj.find('.answers').find('.invalid-msg').text(msg);
                            obj.find('.other-input').addClass('is-invalid');
                            return false;
                        } else {
                            obj.find('.survey-input').removeClass('is-invalid');
                        }
                        break;
                    case 20:
                        val = smartSizeAnswers.shoe_size;
                        if (this.unit == 'us') {
                            msg = 'Enter a shoe size between 1-25.';
                        } else {
                            msg = 'Enter a shoe size between 34-58.';
                        }
                        if (isNaN(val) || (val < 1 || val > 25)) {
                            obj.find('.answers').find('.invalid-msg').text(msg);
                            obj.find('.other-input').addClass('is-invalid');
                            return false;
                        } else {
                            obj.find('.survey-input').removeClass('is-invalid');
                        }
                        break;
                }
            }
            return true;
        },
        updateSummary1: function (question_id) {
            $('#ss-answers [data-what="smart_size_step_' + question_id + '"]').find('answer').html('<i>Skipped</i>');
            if ($('#smart_size_step_' + question_id + ' input:checked').val() !== undefined) {
                if ($('#smart_size_step_' + question_id + ' input:checked').val().length > 0) {
                    $('#ss-answers [data-what="smart_size_step_' + question_id + '"]').find('answer').text($('#smart_size_step_' + question_id + ' input:checked').attr('short-v'));
                }
            }
        },
        updateResults: function () {
            $('#ss-answers [data-what="smart_size_step_1"]').find('answer').text($('#smart_size_step_1 input:checked').data('fname'));
            var smartSizeAnswers = this.getOutput();
            var smartSizeTC = new SmartSizeTC(smartSizeAnswers);
            if (smartSizeAnswers.tall_feets != '' || smartSizeAnswers.tall_inches != '') {
                if (this.validate(3)) {
                    if (this.unit == 'us') {
                        $('#ss-answers [data-what="smart_size_step_3"]').find('answer').html(smartSizeAnswers.tall_feets + ' <i>ft</i> ' + smartSizeAnswers.tall_inches + ' <i>in</i>');
                    } else {
                        $('#ss-answers [data-what="smart_size_step_3"]').find('answer').html(ConvertMethod.TallInchesToCm(smartSizeAnswers.tall_feets, smartSizeAnswers.tall_inches) + ' <i>cm</i>');
                    }
                }
            } else {
                $('#ss-answers [data-what="smart_size_step_3"]').find('answer').html('<i>Skipped</i>');
            }
            $('#ss-answers [data-what="smart_size_step_4"]').find('answer').html('<i>Skipped</i>');
            if (smartSizeAnswers.weight > 0) {
                if (this.validate(4)) {
                    if (this.unit == 'us') {
                        $('#ss-answers [data-what="smart_size_step_4"]').find('answer').html(smartSizeAnswers.weight + ' <i>lbs</i>');
                    } else {
                        $('#ss-answers [data-what="smart_size_step_4"]').find('answer').html(ConvertMethod.PoundsToKg(smartSizeAnswers.weight) + ' <i>kg</i>');
                    }
                }
            }
            this.updateSummary1(5);
            $('#ss-answers [data-what="smart_size_step_6"]').find('answer').html('<i>Skipped</i>');
            if ($('#smart_size_step_6 input:checked').val() !== undefined) {
                if (!isNaN(smartSizeAnswers.jacket_size)) {
                    if (this.unit == 'us') {
                        $('#ss-answers [data-what="smart_size_step_6"]').find('answer').html(smartSizeAnswers.jacket_size + ' <i>us</i>');
                    } else {
                        $('#ss-answers [data-what="smart_size_step_6"]').find('answer').html(ConvertMethod.UsToEu(smartSizeAnswers.jacket_size) + ' <i>eu</i>');
                    }
                }
            }
            if (smartSizeAnswers.pants_waist != '') {
                if (this.validate(7)) {
                    if (this.unit == 'us') {
                        $('#ss-answers [data-what="smart_size_step_7"]').find('answer').html(smartSizeAnswers.pants_waist + ' <i>in</i>');
                    } else {
                        $('#ss-answers [data-what="smart_size_step_7"]').find('answer').html(ConvertMethod.InchesToCm(smartSizeAnswers.pants_waist) + ' <i>cm</i>');
                    }
                }
            } else {
                $('#ss-answers [data-what="smart_size_step_7"]').find('answer').html('<i>Skipped</i>');
            }
            this.updateSummary1(8);
            if (smartSizeAnswers.collar != '') {
                if (this.validate(9)) {
                    if (this.unit == 'us') {
                        $('#ss-answers [data-what="smart_size_step_9"]').find('answer').html(smartSizeAnswers.collar + ' <i>in</i>');
                    } else {
                        $('#ss-answers [data-what="smart_size_step_9"]').find('answer').html(ConvertMethod.InchesToCm(smartSizeAnswers.collar) + ' <i>cm</i>');
                    }
                }
            } else {
                $('#ss-answers [data-what="smart_size_step_9"]').find('answer').html('<i>Skipped</i>');
            }
            if (smartSizeAnswers.sleeve != '') {
                if (this.validate(10)) {
                    if (this.unit == 'us') {
                        $('#ss-answers [data-what="smart_size_step_10"]').find('answer').html(smartSizeAnswers.sleeve + ' <i>in</i>');
                    } else {
                        $('#ss-answers [data-what="smart_size_step_10"]').find('answer').html(ConvertMethod.InchesToCm(smartSizeAnswers.sleeve) + ' <i>cm</i>');
                    }
                }
            } else {
                $('#ss-answers [data-what="smart_size_step_10"]').find('answer').html('<i>Skipped</i>');
            }
            this.updateSummary1(11);
            this.updateSummary1(12);
            if (smartSizeAnswers.pants_inseam != '') {
                if (this.validate(13)) {
                    if (this.unit == 'us') {
                        $('#ss-answers [data-what="smart_size_step_13"]').find('answer').html(smartSizeAnswers.pants_inseam + ' <i>in</i>');
                    } else {
                        $('#ss-answers [data-what="smart_size_step_13"]').find('answer').html(ConvertMethod.InchesToCm(smartSizeAnswers.pants_inseam) + ' <i>cm</i>');
                    }
                }
            } else {
                $('#ss-answers [data-what="smart_size_step_13"]').find('answer').html('<i>Skipped</i>');
            }
            this.updateSummary1(14);
            this.updateSummary1(15);
            this.updateSummary1(16);
            this.updateSummary1(17);
            this.updateSummary1(18);
            if (smartSizeAnswers.year_born != '') {
                $('#ss-answers [data-what="smart_size_step_19"]').find('answer').html(smartSizeAnswers.year_born);
            } else {
                $('#ss-answers [data-what="smart_size_step_19"]').find('answer').html('<i>Skipped</i>');
            }
            $('#ss-answers [data-what="smart_size_step_20"]').find('answer').html('<i>Skipped</i>');
            if ($('#smart_size_step_20 input:checked').val() !== undefined) {
                if (!isNaN(smartSizeAnswers.shoe_size)) {
                    if (this.validate(20)) {
                        if (this.unit == 'us') {
                            $('#ss-answers [data-what="smart_size_step_20"]').find('answer').html(smartSizeAnswers.shoe_size + ' <i>us</i>');
                        } else {
                            $('#ss-answers [data-what="smart_size_step_20"]').find('answer').html((parseFloat(smartSizeAnswers.shoe_size) + 33) + ' <i>eu</i>');
                        }
                    }
                }
            }
            $sctn = $('#ss-dimensions');
            if ($('#ss-dimensions a.is-active[href="#results"]').attr('ss-type') == 'ja') {
                $sctn.find('span[data-what="shoulder_width"]').text(smartSizeTC.ja.shoulder_width);
                $sctn.find('span[data-what="chest_width"]').text(smartSizeTC.ja.chest_width);
                $sctn.find('span[data-what="midsection_width"]').text(smartSizeTC.ja.midsection_width);
                $sctn.find('span[data-what="ja_hip_width"]').text(smartSizeTC.ja.hip_width);
                $sctn.find('span[data-what="center_back_length"]').text(smartSizeTC.ja.center_back_length);
                $sctn.find('span[data-what="sleeve_length"]').text(smartSizeTC.ja.sleeve_length);
                $sctn.find('span[data-what="sleeve_bicep_width"]').text(smartSizeTC.ja.sleeve_bicep_width);
                $sctn.find('span[data-what="sleeve_opening_width"]').text(smartSizeTC.ja.sleeve_opening_width);
            }
            if ($('#ss-dimensions a.is-active[href="#results"]').attr('ss-type') == 'ja') {
                $sctn.find('span[data-what="waist_width"]').text(smartSizeTC.pa.waist_width);
                $sctn.find('span[data-what="pa_hip_width"]').text(smartSizeTC.pa.hip_width);
                $sctn.find('span[data-what="thigh_width"]').text(smartSizeTC.pa.thigh_width);
                $sctn.find('span[data-what="knee_width"]').text(smartSizeTC.pa.knee_width);
                $sctn.find('span[data-what="leg_opening_width"]').text(smartSizeTC.pa.leg_opening_width);
                $sctn.find('span[data-what="front_rise"]').text(smartSizeTC.pa.front_rise);
                $sctn.find('span[data-what="back_rise"]').text(smartSizeTC.pa.back_rise);
                $sctn.find('span[data-what="inseam_length"]').text(smartSizeTC.pa.inseam_length);
                $sctn.find('span[data-what="total_rise"]').text(smartSizeTC.pa.total_rise);
                $sctn.find('span[data-what="total_length"]').text(smartSizeTC.pa.total_length);
            }
            if ($('#ss-dimensions a.is-active[href="#results"]').attr('ss-type') == 'cs-1' || $('#ss-dimensions a.is-active[href="#results"]').attr('ss-type') == 'cs-2' || $('#ss-dimensions a.is-active[href="#results"]').attr('ss-type') == 'cs-3') {
                cs_j = $('#ss-dimensions a.is-active[href="#results"]').attr('ss-type').replace(/\D/g, '');
                if (this.unit == 'us') {
                    $('.unit-note span').text('inches');
                    $sctn.find('span[data-what="collar"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjCollar']);
                    $sctn.find('span[data-what="sleeve"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjSleeve']);
                    $sctn.find('span[data-what="short_sleeve_length"]').text(this.dimensions_cs['smart_size_' + cs_j]['short_sleeve_length']);
                    $sctn.find('span[data-what="yoke"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjShoulder']);
                    $sctn.find('span[data-what="chest"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjChest']);
                    $sctn.find('span[data-what="midsection"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjMiddle']);
                    $sctn.find('span[data-what="length"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjBack']);
                    $sctn.find('span[data-what="sleeve_width"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjSleeveWidth']);
                    $sctn.find('span[data-what="cuff"]').text(this.dimensions_cs['smart_size_' + cs_j]['sAdjWrist']);
                    $sctn.find('span[data-what="short_sleeve_width"]').text(this.dimensions_cs['smart_size_' + cs_j]['short_sleeve_width']);
                    $sctn.find('span[data-what="short_sleeve_opening_width"]').text(this.dimensions_cs['smart_size_' + cs_j]['short_sleeve_opening_width']);
                } else {
                    $('.unit-note span').text('centimeters');
                    $sctn.find('span[data-what="collar"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjCollar']));
                    $sctn.find('span[data-what="sleeve"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjSleeve']));
                    $sctn.find('span[data-what="short_sleeve_length"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['short_sleeve_length']));
                    $sctn.find('span[data-what="yoke"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjShoulder']));
                    $sctn.find('span[data-what="chest"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjChest']));
                    $sctn.find('span[data-what="midsection"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjMiddle']));
                    $sctn.find('span[data-what="length"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjBack']));
                    $sctn.find('span[data-what="sleeve_width"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjSleeveWidth']));
                    $sctn.find('span[data-what="cuff"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['sAdjWrist']));
                    $sctn.find('span[data-what="short_sleeve_width"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['short_sleeve_width']));
                    $sctn.find('span[data-what="short_sleeve_opening_width"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['short_sleeve_opening_width']));
                }
                if (cs_j == 3) {
                    $sctn.find('span[data-what="sleeve"], span[data-what="sleeve_width"], span[data-what="cuff"], span[data-what="cuff_watch_allowance"], span[data-what="forearm"], span[data-what="shoulder_fit"]').parent().addClass('hide');
                    $sctn.find('span[data-what="short_sleeve_length"], span[data-what="short_sleeve_width"], span[data-what="short_sleeve_opening_width"]').parent().removeClass('hide');
                } else {
                    $sctn.find('span[data-what="short_sleeve_length"], span[data-what="short_sleeve_width"], span[data-what="short_sleeve_opening_width"]').parent().addClass('hide');
                    $sctn.find('span[data-what="sleeve"], span[data-what="sleeve_width"], span[data-what="cuff"], span[data-what="cuff_watch_allowance"], span[data-what="forearm"], span[data-what="shoulder_fit"]').parent().removeClass('hide');
                }
                cuff_watch_allowance_arr = this.unit == 'us' ? {
                    'none': 'None (default)',
                    '+25leftcuff': '+0.25" Left Cuff',
                    '+5leftcuff': '+0.5" Left Cuff',
                    '+75leftcuff': '+0.75" Left Cuff',
                    '+25rightcuff': '+0.25" Right Cuff',
                    '+5rightcuff': '+0.5" Right Cuff',
                    '+75rightcuff': '+0.75" Right Cuff'
                } : {
                        'none': 'None (default)',
                        '+25leftcuff': '+0.6cm Left Cuff',
                        '+5leftcuff': '+1.3cm Left Cuff',
                        '+75leftcuff': '+1.9cm Left Cuff',
                        '+25rightcuff': '+0.6cm Right Cuff',
                        '+5rightcuff': '+1.3cm Right Cuff',
                        '+75rightcuff': '+1.9cm Right Cuff'
                    };
                shulders_slope_arr = {
                    'normal': 'Normal',
                    'square': 'Square Shoulders',
                    'sloping': 'Sloping Shoulders',
                    'verysloping': 'Very Sloping Shoulders',
                    'veryverysloping': 'Very Very Sloping Shoulders',
                    'verysquare': 'Very Square Shoulders',
                    'veryverysquare': 'Very Very Square Shoulders'
                };
                forearm_arr = {
                    'slim': 'One Pleat',
                    'traditional': 'Two Pleats',
                    'three': 'Three Pleats'
                };
                shoulder_fit_arr = {
                    'full': 'Full',
                    'tailored': 'Tailored'
                };
                rear_pleats_arr = {
                    'none': 'None',
                    'side_pleats': 'Side Pleats',
                    'center_box_pleat': 'Center Box Pleat'
                };
                back_darts_arr = {
                    'none': 'None',
                    'yes': 'Yes'
                };
                posture_arr = this.unit == 'us' ? {
                    'standard': 'Normal (default)',
                    'back_1_2': 'Neck Back 1/2"',
                    'back_1': 'Neck Back 1"',
                    'forward_1_2': 'Neck Forward 1/2"',
                    'forward_1': 'Neck Forward 1"'
                } : {
                        'standard': 'Normal (default)',
                        'back_1_2': 'Neck Back 1.3cm',
                        'back_1': 'Neck Back 2.5cm',
                        'forward_1_2': 'Neck Forward 1.3cm',
                        'forward_1': 'Neck Forward 2.5cm'
                    };
                top_button_placement_arr = this.unit == 'us' ? {
                    'raised_1': 'Raised 1"',
                    'raised_1_2': 'Raised 1/2"',
                    'standard': 'Standard',
                    'lowered_1_2': 'Lowered 1/2"'
                } : {
                        'raised_1': 'Raised 2.5cm',
                        'raised_1_2': 'Raised 1.3cm',
                        'standard': 'Standard',
                        'lowered_1_2': 'Lowered 1.3cm'
                    };
                if (this.unit == 'us') {
                    $sctn.find('span[data-what="bottom_width_value"]').text(this.dimensions_cs['smart_size_' + cs_j]['bottom_width_value']);
                } else {
                    $sctn.find('span[data-what="bottom_width_value"]').text(ConvertMethod.InchesToCm(this.dimensions_cs['smart_size_' + cs_j]['bottom_width_value']));
                }
                $sctn.find('span[data-what="cuff_watch_allowance"]').text(cuff_watch_allowance_arr[this.dimensions_cs['smart_size_' + cs_j]['cuff_watch_allowance']]);
                $sctn.find('span[data-what="shulders_slope"]').text(shulders_slope_arr[this.dimensions_cs['smart_size_' + cs_j]['shulders_slope']]);
                $sctn.find('span[data-what="forearm"]').text(forearm_arr[this.dimensions_cs['smart_size_' + cs_j]['forearm']]);
                $sctn.find('span[data-what="shoulder_fit"]').text(shoulder_fit_arr[this.dimensions_cs['smart_size_' + cs_j]['shoulder_fit']]);
                $sctn.find('span[data-what="rear_pleats"]').text(rear_pleats_arr[this.dimensions_cs['smart_size_' + cs_j]['rear_pleats']]);
                $sctn.find('span[data-what="back_darts"]').text(back_darts_arr[this.dimensions_cs['smart_size_' + cs_j]['back_darts']]);
                $sctn.find('span[data-what="posture"]').text(posture_arr[this.dimensions_cs['smart_size_' + cs_j]['posture']]);
            }
        },
        updateMeasurements: function () {
            if ($("#smart_size_step_1 .answer input:checked").length == 0) {
                return false;
            }
            if (!isAuth()) {
                return false;
            }
            var smartSizeAnswers = this.getOutput();
            var smartSize = new SmartSize(smartSizeAnswers);
            var smartSizeTC = new SmartSizeTC(smartSizeAnswers);
            var additional_dimensions;
            var list_to_server = {};
            list_to_server['ss_size'] = smartSizeAnswers.size;
            list_to_server['ss_collar'] = smartSizeAnswers.collar;
            list_to_server['ss_sleeve'] = smartSizeAnswers.sleeve;
            list_to_server['ss_tall_feets'] = smartSizeAnswers.tall_feets;
            list_to_server['ss_tall_inches'] = smartSizeAnswers.tall_inches;
            list_to_server['ss_pants_waist'] = smartSizeAnswers.pants_waist;
            list_to_server['ss_midsection'] = smartSizeAnswers.midsection_style;
            list_to_server['ss_type'] = smartSizeAnswers.shirt_type;
            list_to_server['ss_tucked'] = smartSizeAnswers.tucked;
            list_to_server['ss_weight'] = smartSizeAnswers.weight;
            list_to_server['ss_shirt_tight'] = smartSizeAnswers.shirt_tight;
            list_to_server['ss_ethnicity'] = smartSizeAnswers.ethnicity;
            list_to_server['ss_jacket_size'] = smartSizeAnswers.jacket_size;
            list_to_server['ss_pants_inseam'] = smartSizeAnswers.pants_inseam;
            list_to_server['ss_best_chest_shoulders'] = smartSizeAnswers.best_chest_shoulders;
            list_to_server['ss_best_buttocks_thighs'] = smartSizeAnswers.best_buttocks_thighs;
            list_to_server['ss_like_pants_to_fit'] = smartSizeAnswers.like_pants_to_fit;
            list_to_server['ss_like_bottom_pants'] = smartSizeAnswers.like_bottom_pants;
            list_to_server['ss_high_wear_pants'] = smartSizeAnswers.high_wear_pants;
            list_to_server['ss_year_born'] = smartSizeAnswers.year_born;
            list_to_server['ss_shoe_size'] = smartSizeAnswers.shoe_size;
            list_to_server['dimensions_ja'] = JSON.stringify(smartSizeTC.ja);
            list_to_server['dimensions_pa'] = JSON.stringify(smartSizeTC.pa);
            $("#collar_field")._val(smartSize.collar.toFixed(2));
            $("#sleeve_field")._val(smartSize.sleeve.toFixed(2));
            $("#yoke_field")._val(smartSize.yoke.toFixed(2));
            $("#chest_field")._val(smartSize.chest.toFixed(2));
            $("#midsection_field")._val(smartSize.midsection.toFixed(2));
            $("#length_field")._val(smartSize.length.toFixed(2));
            $("#sleeve_w_field")._val(smartSize.sleeve_width.toFixed(2));
            $("#cuff_field")._val(smartSize.cuff.toFixed(2));
            $("#collar_field").val(smartSize.collar.toFixed(2));
            $("#sleeve_field").val(smartSize.sleeve.toFixed(2));
            $("#yoke_field").val(smartSize.yoke.toFixed(2));
            $("#chest_field").val(smartSize.chest.toFixed(2));
            $("#midsection_field").val(smartSize.midsection.toFixed(2));
            $("#length_field").val(smartSize.length.toFixed(2));
            $("#sleeve_w_field").val(smartSize.sleeve_width.toFixed(2));
            $("#cuff_field").val(smartSize.cuff.toFixed(2));
            get_measurements(1);
            get_measurements(2);
            get_measurements(3);
            this.dimensions_cs = list_to_server;
            this.debug_dimensions_ja = smartSizeTC.ja;
            this.debug_dimensions_pa = smartSizeTC.pa;
            $.post("exec/ajax_size_save_user_smart.html", list_to_server, function (data) { });

            function get_measurements(ss_type) {
                list_to_server['smart_size_' + ss_type] = {};
                var adjSizes = getAdjSizesCommon();
                var show_limit = function (value, min_value, max_value, step) {
                    var num = parseInt(1 / step);
                    if (value > max_value) {
                        return Math.round(max_value * num) / num;
                    } else if (value < min_value) {
                        return Math.round(min_value * num) / num;
                    } else {
                        return Math.round(value * num) / num;
                    }
                }
                list_to_server['smart_size_' + ss_type]['sAdjCollar'] = show_limit(smartSize['collar_' + ss_type], adjSizes.min_collar, adjSizes.max_collar, 0.25);
                list_to_server['smart_size_' + ss_type]['sAdjSleeve'] = show_limit(smartSize['sleeve_' + ss_type], adjSizes.min_sleeve, adjSizes.max_sleeve, 0.25);
                list_to_server['smart_size_' + ss_type]['sAdjShoulder'] = show_limit(smartSize['yoke_' + ss_type], adjSizes.min_yoke, adjSizes.max_yoke, 0.25);
                list_to_server['smart_size_' + ss_type]['sAdjBack'] = show_limit(smartSize['length_' + ss_type], adjSizes.min_length, adjSizes.max_length, 0.25);
                list_to_server['smart_size_' + ss_type]['sAdjWrist'] = show_limit(smartSize['cuff_' + ss_type], adjSizes.min_cuff, adjSizes.max_cuff, 0.25);
                list_to_server['smart_size_' + ss_type]['sAdjChest'] = show_limit(smartSize['chest_' + ss_type], adjSizes.min_chest, adjSizes.max_chest, 0.25);
                list_to_server['smart_size_' + ss_type]['sAdjMiddle'] = show_limit(smartSize['midsection_' + ss_type], adjSizes.min_midsection, adjSizes.max_midsection, 0.25);
                list_to_server['smart_size_' + ss_type]['sAdjSleeveWidth'] = show_limit(smartSize['sleeve_width_' + ss_type], adjSizes.min_sleeve_w, adjSizes.max_sleeve_w, 0.25);
                list_to_server['smart_size_' + ss_type]['short_sleeve_length'] = show_limit(smartSize['short_sleeve_length_' + ss_type], adjSizes.get_limit('short_sleeve_length', 'min'), adjSizes.get_limit('short_sleeve_length', 'max'), 0.25);
                list_to_server['smart_size_' + ss_type]['short_sleeve_opening_width'] = show_limit(smartSize['short_sleeve_opening_width_' + ss_type], adjSizes.get_limit('short_sleeve_opening_width', 'min'), adjSizes.get_limit('short_sleeve_opening_width', 'max'), 0.25);
                list_to_server['smart_size_' + ss_type]['short_sleeve_width'] = show_limit(smartSize['short_sleeve_width_' + ss_type], adjSizes.get_limit('short_sleeve_width', 'min'), adjSizes.get_limit('short_sleeve_width', 'max'), 0.25);
                list_to_server['smart_size_' + ss_type]['xml_body'] = adjSizes.xml_vars.body_size;
                list_to_server['smart_size_' + ss_type]['xml_collar'] = adjSizes.xml_vars.adj_collar;
                list_to_server['smart_size_' + ss_type]['xml_chest'] = adjSizes.xml_vars.adj_chest;
                list_to_server['smart_size_' + ss_type]['xml_midsection'] = adjSizes.xml_vars.adj_midsection;
                list_to_server['smart_size_' + ss_type]['xml_bottom'] = adjSizes.xml_vars.adj_bottom;
                list_to_server['smart_size_' + ss_type]['xml_yoke'] = adjSizes.xml_vars.adj_yoke;
                list_to_server['smart_size_' + ss_type]['xml_length'] = adjSizes.xml_vars.adj_length;
                list_to_server['smart_size_' + ss_type]['xml_sleeve_w'] = adjSizes.xml_vars.adj_sleeve_w;
                list_to_server['smart_size_' + ss_type]['xml_cuff'] = adjSizes.xml_vars.adj_cuff;
                list_to_server['smart_size_' + ss_type]['xml_sleeve'] = adjSizes.xml_vars.adj_sleeve;
                set_additional_dimensions_values({
                    bottom_width_method: "default",
                    bottom_width_value: 0,
                    cuff_watch_allowance: "none",
                    shulders_slope: "normal",
                    forearm: "slim",
                    shoulder_fit: "full",
                    rear_pleats: "none",
                    back_darts: "none",
                    posture: "standard",
                    top_button_placement: "standard",
                    buttons_on_shirt_front: 8
                });
                additional_dimensions = get_additional_dimensions();
                list_to_server['smart_size_' + ss_type]['bottom_width_method'] = additional_dimensions.bottom_width_method;
                list_to_server['smart_size_' + ss_type]['bottom_width_value'] = additional_dimensions.bottom_width_value;
                list_to_server['smart_size_' + ss_type]['cuff_watch_allowance'] = additional_dimensions.cuff_watch_allowance;
                list_to_server['smart_size_' + ss_type]['shulders_slope'] = additional_dimensions.shulders_slope;
                list_to_server['smart_size_' + ss_type]['rear_pleats'] = additional_dimensions.rear_pleats;
                list_to_server['smart_size_' + ss_type]['back_darts'] = additional_dimensions.back_darts;
                list_to_server['smart_size_' + ss_type]['posture'] = additional_dimensions.posture;
                list_to_server['smart_size_' + ss_type]['top_button_placement'] = additional_dimensions.top_button_placement;
                list_to_server['smart_size_' + ss_type]['buttons_on_shirt_front'] = additional_dimensions.buttons_on_shirt_front;
                list_to_server['smart_size_' + ss_type]['forearm'] = smartSize.forearm;
                list_to_server['smart_size_' + ss_type]['shoulder_fit'] = smartSize.armpit;
            }
        },
        sectionVisible: function (section) {
            $('.ss-app').removeClass('is-registering is-reviewing show-answers');
            $('section').removeClass('is-current');
            $('section').addClass('is-visible');
            $('#' + section).addClass('is-current');
        },
        revealJump: function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        },
        closeInsiderModal: function () {
            document.querySelector('.insider-overlay').classList.remove('is-visible');
        },
        openThanksModal: function () {
            document.querySelector('.insider-thanks').classList.add('is-visible');
        },
        openThanksModal2: function () {
            document.querySelector('.insider-thanks2').classList.add('is-visible');
        },
        closeThanksModal: function () {
            document.querySelector('.insider-thanks').classList.remove('is-visible');
            $body.addClass('is-reviewing');
        }
    },
    created: function () {
        $self = this;
        this.changeUnits(IntMetric == 'in' ? 'us' : 'metric');
        if (isAuth()) $('.reveal-jump').hide();
        setTimeout(function () {
            $('.init-loading').remove();
        }, 2500);
        setTimeout(function () {
            $('#smart_size_step_19 .answer input[value=""]').click();
            if (ss_answers_init !== false) {
                if (ss_answers_init.ss_tall_feets == '' && ss_answers_init.ss_tall_inches == '') {
                    $('#smart_size_step_3 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.tall_feets = ss_answers_init.ss_tall_feets;
                    $self.ss_answers_other.tall_inches = ss_answers_init.ss_tall_inches;
                    if (IntMetric == 'cm') {
                        val = parseInt(ss_answers_init.ss_tall_feets) * 12 + parseFloat(ss_answers_init.ss_tall_inches);
                        $self.ss_answers_other.tall_inches = ConvertMethod.InchesToCm(val);
                    }
                    $("#smart_size_step_3 .answer input[value='other']").click();
                }
                if (ss_answers_init.ss_weight == '') {
                    $('#smart_size_step_4 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.weight = ss_answers_init.ss_weight;
                    if (IntMetric == 'cm') {
                        $self.ss_answers_other.weight = ConvertMethod.PoundsToKg(ss_answers_init.ss_weight);
                    }
                    $("#smart_size_step_4 .answer input[value='other']").click();
                }
                if (ss_answers_init.ss_ethnicity == '') {
                    $('#smart_size_step_5 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_5 .answer input[value="' + ss_answers_init.ss_ethnicity + '"]').click();
                }
                if (ss_answers_init.ss_jacket_size == '') {
                    $('#smart_size_step_6 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.jacket_size = ss_answers_init.ss_jacket_size;
                    if (IntMetric == 'cm') {
                        $self.ss_answers_other.jacket_size = parseFloat(ss_answers_init.ss_jacket_size) + 10;
                    }
                    $("#smart_size_step_6 .answer input[value='other']").click();
                }
                if (ss_answers_init.ss_pants_waist == '') {
                    $('#smart_size_step_7 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.pants_waist = ss_answers_init.ss_pants_waist;
                    if (IntMetric == 'cm') {
                        $self.ss_answers_other.pants_waist = ConvertMethod.InchesToCm(ss_answers_init.ss_pants_waist);
                    }
                    $("#smart_size_step_7 .answer input[value='other']").click();
                }
                if (ss_answers_init.ss_midsection == '') {
                    $('#smart_size_step_8 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_8 .answer input[value="' + ss_answers_init.ss_midsection + '"]').click();
                }
                if (ss_answers_init.ss_collar == '') {
                    $('#smart_size_step_9 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.collar = ss_answers_init.ss_collar;
                    if (IntMetric == 'cm') {
                        $self.ss_answers_other.collar = ConvertMethod.InchesToCm(ss_answers_init.ss_collar);
                    }
                    $("#smart_size_step_9 .answer input[value='other']").click();
                }
                if (ss_answers_init.ss_sleeve == '') {
                    $('#smart_size_step_10 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.sleeve = ss_answers_init.ss_sleeve;
                    if (IntMetric == 'cm') {
                        $self.ss_answers_other.sleeve = ConvertMethod.InchesToCm(ss_answers_init.ss_sleeve);
                    }
                    $("#smart_size_step_10 .answer input[value='other']").click();
                }
                if (ss_answers_init.ss_tucked == '') {
                    $('#smart_size_step_11 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_11 .answer input[value="' + ss_answers_init.ss_tucked + '"]').click();
                }
                if (ss_answers_init.ss_type == '') {
                    $('#smart_size_step_12 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_12 .answer input[value="' + ss_answers_init.ss_type + '"]').click();
                }
                if (ss_answers_init.ss_pants_inseam == '') {
                    $('#smart_size_step_13 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.pants_inseam = parseFloat(ss_answers_init.ss_pants_inseam);
                    if (IntMetric == 'cm') {
                        $('#smart_size_step_13 .other-input input').val(ConvertMethod.InchesToCm(ss_answers_init.ss_pants_inseam));
                    }
                    $("#smart_size_step_13 .answer input[value='other']").click();
                }
                if (ss_answers_init.ss_best_chest_shoulders == '') {
                    $('#smart_size_step_14 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_14 .answer input[value="' + ss_answers_init.ss_best_chest_shoulders + '"]').click();
                }
                if (ss_answers_init.ss_best_buttocks_thighs == '') {
                    $('#smart_size_step_15 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_15 .answer input[value="' + ss_answers_init.ss_best_buttocks_thighs + '"]').click();
                }
                if (ss_answers_init.ss_like_pants_to_fit == '') {
                    $('#smart_size_step_16 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_16 .answer input[value="' + ss_answers_init.ss_like_pants_to_fit + '"]').click();
                }
                if (ss_answers_init.ss_like_bottom_pants == '') {
                    $('#smart_size_step_17 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_17 .answer input[value="' + ss_answers_init.ss_like_bottom_pants + '"]').click();
                }
                if (ss_answers_init.ss_high_wear_pants == '') {
                    $('#smart_size_step_18 .answer input[value=""]').click();
                } else {
                    $('#smart_size_step_18 .answer input[value="' + ss_answers_init.ss_high_wear_pants + '"]').click();
                }
                if (ss_answers_init.ss_year_born == '') {
                    $('#smart_size_step_19 .answer input[value=""]').click();
                    $('#smart_size_step_19 select').css('opacity', 0.3);
                } else {
                    $('#smart_size_step_19 select').val(ss_answers_init.ss_year_born);
                    $('#smart_size_step_19 input[type="radio"][value=""]').prop('checked', false);
                    $('#smart_size_step_19 select').css('opacity', '');
                }
                if (ss_answers_init.ss_shoe_size == '') {
                    $('#smart_size_step_20 .answer input[value=""]').click();
                } else {
                    $self.ss_answers_other.shoe_size = ss_answers_init.ss_shoe_size;
                    if (IntMetric == 'cm') {
                        $self.ss_answers_other.shoe_size = parseFloat(ss_answers_init.ss_shoe_size) + 33;
                    }
                    $("#smart_size_step_20 .answer input[value='other']").click();
                }
                $('#smart_size_step_1 .answer input[value="' + ss_answers_init.ss_size + '"]').click();
                $body.addClass('all-answered');
                $self.updateMeasurements();
                $self.updateResults();
            }
        }, 300);
    }
})
$ssApp.addClass('is-ready');
$(document).ready(function () {
    $('.help, .help-panel .close').on('click', function (e) {
        e.preventDefault();
        $('.help-panel').toggleClass('is-visible');
    }); {
        $(document.body).on('click', '#but_already_account', function () {
            $('.block-create-account, .block-already-account').slideUp(200);
            $('.block-sign-in').slideDown(200);
            $message = $('.message-danger');
            $message.text('').hide();
            return false;
        });
        $(document.body).on('click', '#but_create_new_account', function () {
            $('.block-sign-in').slideUp(200);
            $('.block-create-account, .block-already-account').slideDown(200);
            $message = $('.message-danger');
            $message.text('').hide();
            return false;
        });
        $(document.body).on('click', '#buttonCreateAccountConfirmSS', function () {
            $this = $(this);
            $('.btn').addClass('disabled');
            $message = $this.parent().parent().parent().find('.message-danger');
            $message.text('').hide();
            if (!isEmail($("#email").val())) {
                $message.text('Please enter your email address to register a new account.').slideToggle(300);
                $("#email").focus();
                $('.btn').removeClass('disabled');
                return;
            }
            if ($("#password").val().length == 0) {
                $message.text('The password you entered does not match our records.').slideToggle(300);
                $("#password").focus();
                $('.btn').removeClass('disabled');
                return;
            }
            // $.ajax({
            //     url: "/exec/ajax_create_account.php", dataType: "json", data: { email: $("#email").val(), password: $("#password").val(), inp_sp: $("#inp_sp").val(), intro_code_page: 1 }, type: "post", success: function (data) {
            //         if (data.result == 0) { $message.text(data.message).slideToggle(300); $('.btn').removeClass('disabled'); }
            //         else {
            //             $('.btn').removeClass('disabled'); isAuth_flag = true; ss_completed = true; SmartGrid.updateMeasurements(); SmartGrid.updateResults(); $body.removeClass('is-registering'); $body.addClass('is-reviewing'); if ($('.question').eq($('.question').length - 2).hasClass('is-answered')) { $body.addClass('all-answered'); }
            //             $('.reveal-jump').hide(); header_menu_content = '<a class="nav-link" href="' + BASE_URL + 'account/basics">' + data.login_name + '</a><div class="dropdown-menu account"><div><ul><li><a href="' + BASE_URL + 'account/orders">Order History</a></li><li><a href="' + BASE_URL + 'wishlist">Wishlist</a></li><li><a href="' + BASE_URL + 'sizes">Custom Sizes</a></li><li><a href="' + BASE_URL + 'account/credit">Store Credit</a></li><li><a href="' + BASE_URL + 'account/basics">Account Details</a></li><li><a href="' + BASE_URL + 'invite">Give $20, Get $20</a></li><li role="separator" class="divider"></li><li class="logout"><a href="' + BASE_URL + 'propercloth.php?action=logout">Sign Out</a></li></ul</div></div>'; $('.nav_sign_in').parent().html(header_menu_content); $('.auth-no').hide(); $('.auth-yes').show(); $('.breadcrumb a').attr('href', '#'); $body.append('<iframe src="/facebook-account-creation-pixel.php?situation=4" width="0" height="0" style="visibility:hidden;"></iframe>'); try { __adroll.record_user({ "adroll_segments": 'register' }) } catch (err) { }
            //         }
            //     }
            // });
            $('.btn').removeClass('disabled');
            isAuth_flag = true;
            ss_completed = true;
            SmartGrid.updateMeasurements();
            SmartGrid.updateResults();
            $body.removeClass('is-registering');
            $body.addClass('is-reviewing');
            if ($('.question').eq($('.question').length - 2).hasClass('is-answered')) {
                $body.addClass('all-answered');
            }
            $('.reveal-jump').hide();
            header_menu_content = '<a class="nav-link" href="' + BASE_URL + 'account/basics">' + data.login_name + '</a><div class="dropdown-menu account"><div><ul><li><a href="' + BASE_URL + 'account/orders">Order History</a></li><li><a href="' + BASE_URL + 'wishlist">Wishlist</a></li><li><a href="' + BASE_URL + 'sizes">Custom Sizes</a></li><li><a href="' + BASE_URL + 'account/credit">Store Credit</a></li><li><a href="' + BASE_URL + 'account/basics">Account Details</a></li><li><a href="' + BASE_URL + 'invite">Give $20, Get $20</a></li><li role="separator" class="divider"></li><li class="logout"><a href="' + BASE_URL + 'propercloth.php?action=logout">Sign Out</a></li></ul</div></div>';
            $('.nav_sign_in').parent().html(header_menu_content);
            $('.auth-no').hide();
            $('.auth-yes').show();
            $('.breadcrumb a').attr('href', '#');
            $body.append('<iframe src="/facebook-account-creation-pixel.php?situation=4" width="0" height="0" style="visibility:hidden;"></iframe>');
            try {
                __adroll.record_user({
                    "adroll_segments": 'register'
                })
            } catch (err) { }


        });
        $(document.body).on('click', '#buttonSignInConfirmSS', function () {
            $this = $(this);
            if (window.location.href.indexOf("/design-a-shirt") != -1) $('#buttonSignInConfirmSS, #buttonCreateAccountConfirmSS').addClass('disabled');
            else $('.btn').addClass('disabled');
            $message = $this.parent().parent().parent().find('.message-danger');
            $message.text('').hide();
            if (!isEmail($("#email").val())) {
                $message.text('Please enter your email address to sign in.').slideToggle(300);
                $("#email").focus();
                $('.btn').removeClass('disabled');
                return;
            }
            if ($("#password").val().length == 0) {
                $message.text('The password you entered does not match our records.').slideToggle(300);
                $("#password").focus();
                $('.btn').removeClass('disabled');
                return;
            }
            if (captchaContainer != null) {
                g_recaptcha_response = grecaptcha.getResponse();
            } else {
                g_recaptcha_response = '';
            }
            $.ajax({
                url: "/exec/ajax_sign_in.php",
                dataType: "json",
                data: {
                    email: $("#email").val(),
                    password: $("#password").val(),
                    inp_sp: $("#inp_sp").val(),
                    'g-recaptcha-response': g_recaptcha_response
                },
                type: "post",
                success: function (data) {
                    if (data.result == 0) {
                        $message.text(data.message).slideToggle(300);
                        $('.btn').removeClass('disabled');
                        if (data.show_recaptcha == 1 && captchaContainer == null) {
                            loadCaptcha();
                        }
                        if (data.show_recaptcha == -1 && captchaContainer != null) {
                            captchaContainer == null;
                            $('captcha_container').html('');
                        }
                    } else {
                        $('.btn').removeClass('disabled');
                        isAuth_flag = true;
                        ss_completed = true;
                        SmartGrid.updateMeasurements();
                        SmartGrid.updateResults();
                        $body.removeClass('is-registering');
                        $body.addClass('is-reviewing');
                        if ($('.question').eq($('.question').length - 2).hasClass('is-answered')) {
                            $body.addClass('all-answered');
                        }
                        $('.reveal-jump').hide();
                        header_menu_content = '<a class="nav-link" href="' + BASE_URL + 'account/basics">' + data.login_name + '</a><div class="dropdown-menu account"><div><ul><li><a href="' + BASE_URL + 'account/orders">Order History</a></li><li><a href="' + BASE_URL + 'wishlist">Wishlist</a></li><li><a href="' + BASE_URL + 'sizes">Custom Sizes</a></li><li><a href="' + BASE_URL + 'account/credit">Store Credit</a></li><li><a href="' + BASE_URL + 'account/basics">Account Details</a></li><li><a href="' + BASE_URL + 'invite">Give $20, Get $20</a></li><li role="separator" class="divider"></li><li class="logout"><a href="' + BASE_URL + 'propercloth.php?action=logout">Sign Out</a></li></ul</div></div>';
                        $('.nav_sign_in').parent().html(header_menu_content);
                        $('.auth-no').hide();
                        $('.auth-yes').show();
                    }
                }
            });
        });
    }
    $(document.body).on('click', 'section .answer.center', function () {
        what = $(this).closest('section').attr('data-what');
        if (what == 'height') {
            SmartGrid.ss_answers_other['tall_feets'] = '';
            SmartGrid.ss_answers_other['tall_inches'] = '';
        } else {
            SmartGrid.ss_answers_other[$(this).find('input').attr('data-what')] = '';
        }
    });
    $('.show-all').on('click', function (e) {
        e.preventDefault();
        if ($(this).closest('.list').hasClass('is-expanded')) {
            $(this).text('More Size Details');
            $(this).closest('.list').removeClass('is-expanded');
        } else {
            $(this).text('Show Less');
            $(this).closest('.list').addClass('is-expanded');
        }
    });
    $(document.body).on('click', 'section .answer.que-skip', function () {
        $(this).closest('section').find('input[type="number"]').val('');
    });
    $(document.body).on('click', 'section .answer.other', function () {
        $(this).closest('section').find('input[type="radio"][value="other"]').prop('checked', true);
    });
    $(document.body).on('click', '#smart_size_step_19 .answer.skip-wrap', function () {
        $('#smart_size_step_19 input[type="radio"][value=""]').prop('checked', true);
        $('#smart_size_step_19 select').css('opacity', 0.3);
    });
    $(document.body).on('change', '#smart_size_step_19 select', function () {
        $('#smart_size_step_19 input[type="radio"][value=""]').prop('checked', false);
        if ($(this).val() == '') {
            $('#smart_size_step_19 select').css('opacity', 0.3);
        } else {
            $('#smart_size_step_19 select').css('opacity', '');
        }
    });
    $('#smart_size_step_19 select').css('opacity', 0.3);
})

function getAdjSizesCommon() {
    if ($("input[type=radio][name=adddim_method_field]:checked").val() == 'default') {
        var $adddim_bottom_width_field = parseFloat($("#adddim_default_value")._in());
    } else {
        var $adddim_bottom_width_field = parseFloat($("#adddim_bottom_width_field")._in());
    }
    return new AdjSizes({
        collar: $("#collar_field")._in(),
        sleeve: $("#sleeve_field")._in(),
        yoke: $("#yoke_field")._in(),
        chest: $("#chest_field")._in(),
        midsection: $("#midsection_field")._in(),
        shirt_length: $("#length_field")._in(),
        sleeve_w: $("#sleeve_w_field")._in(),
        cuff: $("#cuff_field")._in(),
        short_sleeve_length: $("#short_sleeve_length_field")._in(),
        short_sleeve_opening_width: $("#short_sleeve_opening_width_field")._in(),
        short_sleeve_width: $("#short_sleeve_width_field")._in(),
        adddim_method: $("input[type=radio][name=adddim_method_field]:checked").val(),
        adddim_bottom_width: $adddim_bottom_width_field,
        adddim_cuff_watch_allowance: $("#adddim_cuff_watch_allowance_field").val(),
        adddim_shulders_slope: $("#adddim_shulders_slope_field").val(),
        adddim_forearm: $("#adddim_forearm_field").val(),
        adddim_shoulder_fit: $("#adddim_shoulder_fit_field").val(),
        adddim_rear_pleats: $("#adddim_rear_pleats_field").val(),
        adddim_back_darts: $("#adddim_back_darts_field").val(),
        adddim_posture: $("#adddim_posture_field").val(),
        adddim_top_button_placement: $("#adddim_top_button_placement_field").val()
    });
}

function show_limits_ss() {
    var adjSizes = new AdjSizes({
        collar: parseFloat($("#collar_field").val()),
        sleeve: parseFloat($("#sleeve_field").val()),
        yoke: parseFloat($("#yoke_field").val()),
        chest: parseFloat($("#chest_field").val()),
        midsection: parseFloat($("#midsection_field").val()),
        shirt_length: parseFloat($("#length_field").val()),
        sleeve_w: parseFloat($("#sleeve_w_field").val()),
        cuff: parseFloat($("#cuff_field").val()),
        short_sleeve_length: parseFloat($("#short_sleeve_length_field").val()),
        short_sleeve_opening_width: parseFloat($("#short_sleeve_opening_width_field").val()),
        short_sleeve_width: parseFloat($("#short_sleeve_width_field").val()),
        adddim_method: $("input[type=radio][name=adddim_method_field]:checked").val(),
        adddim_bottom_width: parseFloat($("#adddim_bottom_width_field").val()),
        adddim_cuff_watch_allowance: $("#adddim_cuff_watch_allowance_field").val(),
        adddim_shulders_slope: $("#adddim_shulders_slope_field").val(),
        adddim_forearm: $("#adddim_forearm_field").val(),
        adddim_shoulder_fit: $("#adddim_shoulder_fit_field").val(),
        adddim_rear_pleats: $("#adddim_rear_pleats_field").val(),
        adddim_back_darts: $("#adddim_back_darts_field").val(),
        adddim_posture: $("#adddim_posture_field").val(),
        adddim_top_button_placement: $("#adddim_top_button_placement_field").val()
    });
    var collar_value = parseFloat($('#collar_field').val());
    var sleeve_value = parseFloat($('#sleeve_field').val());
    var yoke_value = parseFloat($('#yoke_field').val());
    var chest_value = parseFloat($('#chest_field').val());
    var midsection_value = parseFloat($('#midsection_field').val());
    var length_value = parseFloat($('#length_field').val());
    var sleeve_w_value = parseFloat($('#sleeve_w_field').val());
    var cuff_value = parseFloat($('#cuff_field').val());
    var bottom_width_value = parseFloat($('#adddim_bottom_width_field').val());
    var short_sleeve_length = parseFloat($('#short_sleeve_length_field').val());
    var short_sleeve_opening_width = parseFloat($('#short_sleeve_opening_width_field').val());
    var short_sleeve_width = parseFloat($('#short_sleeve_width_field').val());
    var show_limit = function (field_name, value, min_value, max_value, step) {
        var num = parseInt(1 / step);
        value = Math.round(value * num) / num;
        min_value = Math.floor(min_value * num) / num;
        max_value = Math.ceil(max_value * num) / num;
        if (value > max_value) {
            displayed_max_value = Math.ceil(max_value * num) / num;
            $('#' + field_name + '_field').val(displayed_max_value.toFixed(2));
            value = max_value;
        } else if (value < min_value) {
            displayed_min_value = Math.floor(min_value * num) / num;
            $('#' + field_name + '_field').val(displayed_min_value.toFixed(2));
            value = min_value;
        }
        $('#' + field_name + '_field').val(value.toFixed(2));
        if (value <= min_value) {
            $('#' + field_name + '_minus').addClass('disabled');
        } else {
            $('#' + field_name + '_minus').removeClass('disabled');
        }
        if (value >= max_value) {
            $('#' + field_name + '_plus').addClass('disabled');
        } else {
            $('#' + field_name + '_plus').removeClass('disabled');
        }
    }
    show_limit('collar', collar_value, adjSizes.min_collar, adjSizes.max_collar, 0.25);
    show_limit('sleeve', sleeve_value, adjSizes.min_sleeve, adjSizes.max_sleeve, 0.25);
    show_limit('yoke', yoke_value, adjSizes.min_yoke, adjSizes.max_yoke, 0.25);
    show_limit('chest', chest_value, adjSizes.min_chest, adjSizes.max_chest, 0.25);
    show_limit('midsection', midsection_value, adjSizes.min_midsection, adjSizes.max_midsection, 0.25);
    show_limit('length', length_value, adjSizes.min_length, adjSizes.max_length, 0.25);
    show_limit('sleeve_w', sleeve_w_value, adjSizes.min_sleeve_w, adjSizes.max_sleeve_w, 0.25);
    show_limit('cuff', cuff_value, adjSizes.min_cuff, adjSizes.max_cuff, 0.25);
    show_limit('adddim_bottom_width', bottom_width_value, adjSizes.get_limit('adddim_bottom_width', 'min'), adjSizes.get_limit('adddim_bottom_width', 'max'), 0.25);
    show_limit('short_sleeve_length', short_sleeve_length, adjSizes.get_limit('short_sleeve_length', 'min'), adjSizes.get_limit('short_sleeve_length', 'max'), 0.25);
    show_limit('short_sleeve_width', short_sleeve_width, adjSizes.get_limit('short_sleeve_width', 'min'), adjSizes.get_limit('short_sleeve_width', 'max'), 0.25);
    show_limit('short_sleeve_opening_width', short_sleeve_opening_width, adjSizes.get_limit('short_sleeve_opening_width', 'min'), adjSizes.get_limit('short_sleeve_opening_width', 'max'), 0.25);
}

function get_default_bottom_width_ss() {
    var adjSizes = new AdjSizes({
        collar: parseFloat($("#collar_field").val()),
        sleeve: parseFloat($("#sleeve_field").val()),
        yoke: parseFloat($("#yoke_field").val()),
        chest: parseFloat($("#chest_field").val()),
        midsection: parseFloat($("#midsection_field").val()),
        shirt_length: parseFloat($("#length_field").val()),
        sleeve_w: parseFloat($("#sleeve_w_field").val()),
        cuff: parseFloat($("#cuff_field").val()),
        short_sleeve_length: parseFloat($("#short_sleeve_length_field").val()),
        short_sleeve_opening_width: parseFloat($("#short_sleeve_opening_width_field").val()),
        short_sleeve_width: parseFloat($("#short_sleeve_width_field").val()),
        adddim_method: $("input[type=radio][name=adddim_method_field]:checked").val(),
        adddim_bottom_width: parseFloat($("#adddim_bottom_width_field").val()),
        adddim_cuff_watch_allowance: $("#adddim_cuff_watch_allowance_field").val(),
        adddim_shulders_slope: $("#adddim_shulders_slope_field").val(),
        adddim_forearm: $("#adddim_forearm_field").val(),
        adddim_shoulder_fit: $("#adddim_shoulder_fit_field").val(),
        adddim_rear_pleats: $("#adddim_rear_pleats_field").val(),
        adddim_back_darts: $("#adddim_back_darts_field").val(),
        adddim_posture: $("#adddim_posture_field").val(),
        adddim_top_button_placement: $("#adddim_top_button_placement_field").val()
    });
    return Math.round(adjSizes.get_default_bottom_width() * 4) / 4;
}

function set_additional_dimensions_values(obj) {
    show_limits_ss();
    var default_value = get_default_bottom_width_ss();
    default_value = parseFloat(default_value).toFixed(2);
    if ("default" == obj.bottom_width_method) {
        $("#adddim_method_field_default").attr("checked", true);
        var $this = $("#adddim_method_field_default").parent().parent().find('.adddim_method_field');
        var $radio_name = $this.attr('radioname');
        $('.' + $radio_name).removeClass('radio_custom_active').addClass('radio_custom');
        $('.' + $radio_name).find('img').not('.img_not').attr('src', '<?=BASE_GALLERY_URL?>images/white/box_unselected.jpg');
        $this.removeClass('radio_custom').addClass('radio_custom_active');
        $this.find('img').not('.img_not').attr('src', '<?=BASE_GALLERY_URL?>images/white/box_selected.jpg');
        $('.adddim_method_field_change').text('(automatic)').attr('rel', 'default');
        $("#adddim_default_value").val(default_value);
    }
    if ("override" == obj.bottom_width_method) {
        $("#adddim_method_field_override").attr("checked", true);
        var $this = $("#adddim_method_field_override").parent().parent().find('.adddim_method_field');
        var $radio_name = $this.attr('radioname');
        $('.' + $radio_name).removeClass('radio_custom_active').addClass('radio_custom');
        $('.' + $radio_name).find('img').not('.img_not').attr('src', '<?=BASE_GALLERY_URL?>images/white/box_unselected.jpg');
        $this.removeClass('radio_custom').addClass('radio_custom_active');
        $this.find('img').not('.img_not').attr('src', '<?=BASE_GALLERY_URL?>images/white/box_selected.jpg');
        $('.adddim_method_field_change').text('(specified)').attr('rel', 'override');
        $("#adddim_default_value").val(parseFloat(obj.bottom_width_value).toFixed(2));
    }
    var bottom_width_value = parseFloat(obj.bottom_width_value);
    var is_bottom_value_default = "default" == $("input[name=adddim_method_field]:checked").val()
    $("#adddim_bottom_width_field").val((0 == bottom_width_value || is_bottom_value_default) ? default_value : bottom_width_value.toFixed(2));
    $("#adddim_cuff_watch_allowance_field option").attr("selected", "");
    $("#adddim_cuff_watch_allowance_field option[value='" + obj.cuff_watch_allowance + "']").attr("selected", "selected");
    $("#adddim_cuff_watch_allowance_field").val(obj.cuff_watch_allowance).change();
    $("#adddim_cuff_watch_allowance_field option[value='" + obj.cuff_watch_allowance + "']").get(0).selected = true;
    $("#adddim_shulders_slope_field option").attr("selected", "");
    $("#adddim_shulders_slope_field option[value=" + obj.shulders_slope + "]").attr("selected", "selected");
    $("#adddim_shulders_slope_field").val(obj.shulders_slope).change();
    $("#adddim_shulders_slope_field option[value=" + obj.shulders_slope + "]").get(0).selected = true;
    $("#adddim_forearm_field option").attr("selected", "");
    $("#adddim_forearm_field option[value=" + obj.forearm + "]").attr("selected", "selected");
    $("#adddim_forearm_field").val(obj.forearm).change();
    $("#adddim_forearm_field option[value=" + obj.forearm + "]").get(0).selected = true;
    $("#adddim_shoulder_fit_field option").attr("selected", "");
    $("#adddim_shoulder_fit_field option[value=" + obj.shoulder_fit + "]").attr("selected", "selected");
    $("#adddim_shoulder_fit_field").val(obj.shoulder_fit).change();
    $("#adddim_shoulder_fit_field option[value=" + obj.shoulder_fit + "]").get(0).selected = true;
    $("#adddim_rear_pleats_field option").attr("selected", "");
    $("#adddim_rear_pleats_field option[value=" + obj.rear_pleats + "]").attr("selected", "selected");
    $("#adddim_rear_pleats_field").val(obj.rear_pleats).change();
    $("#adddim_rear_pleats_field option[value=" + obj.rear_pleats + "]").get(0).selected = true;
    $("#adddim_back_darts_field option").attr("selected", "");
    $("#adddim_back_darts_field option[value=" + obj.back_darts + "]").attr("selected", "selected");
    $("#adddim_back_darts_field").val(obj.back_darts).change();
    if ($("#adddim_back_darts_field").length > 0) {
        $("#adddim_back_darts_field option[value=" + obj.back_darts + "]").get(0).selected = true;
    }
    $("#adddim_posture_field option").attr("selected", "");
    $("#adddim_posture_field option[value=" + obj.posture + "]").attr("selected", "selected");
    $("#adddim_posture_field").val(obj.posture).change();
    if ($("#adddim_posture_field").length > 0) {
        $("#adddim_posture_field option[value=" + obj.posture + "]").get(0).selected = true;
    }
    if (obj.top_button_placement == undefined) {
        obj.top_button_placement = 'standard';
    }
    $("#adddim_top_button_placement_field option").attr("selected", "");
    $("#adddim_top_button_placement_field option[value=" + obj.top_button_placement + "]").attr("selected", "selected");
    $("#adddim_top_button_placement_field").val(obj.top_button_placement).change();
    if ($("#adddim_top_button_placement_field").length > 0) {
        $("#adddim_top_button_placement_field option[value=" + obj.top_button_placement + "]").get(0).selected = true;
    }
    show_limits_ss();
}

function get_additional_dimensions() {
    var $bottom_width_method = $("input[name=adddim_method_field]:checked").val();
    if (undefined == $bottom_width_method) {
        $bottom_width_method = 'default';
    }
    if ($bottom_width_method == 'default') {
        var $adddim_bottom_width_field = parseFloat($("#adddim_default_value")._in());
    } else {
        var $adddim_bottom_width_field = parseFloat($("#adddim_bottom_width_field")._in());
    }
    if (isNaN($adddim_bottom_width_field)) {
        var adjSizes = getAdjSizesCommon();
        $adddim_bottom_width_field = Math.round(adjSizes.get_default_bottom_width() * 4) / 4;
        $bottom_width_method = 'default';
        $("#adddim_default_value")._val($adddim_bottom_width_field);
    }
    return {
        bottom_width_method: $bottom_width_method,
        bottom_width_value: $adddim_bottom_width_field,
        cuff_watch_allowance: $("#adddim_cuff_watch_allowance_field option:selected").val(),
        shulders_slope: $("#adddim_shulders_slope_field option:selected").val(),
        forearm: $("#adddim_forearm_field option:selected").val(),
        shoulder_fit: $("#adddim_shoulder_fit_field option:selected").val(),
        rear_pleats: $("#adddim_rear_pleats_field option:selected").val(),
        back_darts: $("#adddim_back_darts_field option:selected").val(),
        posture: $("#adddim_posture_field option:selected").val(),
        top_button_placement: $("#adddim_top_button_placement_field option:selected").val(),
        buttons_on_shirt_front: $("#adddim_buttons_on_shirt_front_field").val()
    }
}
if (Number.isInteger(parseInt(getURLParamByName('question')))) {
    SmartGrid.current_question = parseInt(getURLParamByName('question')) - 1;
}

function getURLParamByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}