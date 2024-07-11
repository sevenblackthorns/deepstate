class Matrix {
    constructor(Data) {
        this.Data = Data;
        this.Shape = ArrayShape(Data);
    }
}

function ArrayRank(ArrayA) {
    if (!Array.isArray(ArrayA)) {
        return 0;
    }
    if (ArrayA.length > 0) {
        return ArrayRank(ArrayA[0]) + 1
    }
    else {
        return 0;
    }
}

function ArrayShape(ArrayA) {
    for (let Index = 0; Index < ArrayA.length; Index++) {
        
    }
}
