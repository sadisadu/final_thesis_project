// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


contract SupplyChain {
    
    struct Product {
        uint manufacturerId;
        uint productSerial;
        string productName;
        string productBrand;
        uint productPrice;
        bool isVerified;
    }
    
    struct Seller {
        string sellerName;
        string sellerBrand;
        uint sellerCode;
        uint phoneNumber;
        uint manufacturerId;
        string sellerAddress;
    }
    
    struct Transaction {
        uint productSerial;
        uint consumerCode;
        bool isSold;
    }

    mapping(uint => Product) public products;
    mapping(uint => Seller) public sellers;
    mapping(uint => Transaction) public transactions;

    uint public productCount;
    uint public sellerCount;
    uint public transactionCount;

    // Add product by manufacturer
    function addProduct(
        uint _manufacturerId,
        uint _productSerial,
        string memory _productName,
        string memory _productBrand,
        uint _productPrice
    ) public {
        products[_productSerial] = Product({
            manufacturerId: _manufacturerId,
            productSerial: _productSerial,
            productName: _productName,
            productBrand: _productBrand,
            productPrice: _productPrice,
            isVerified: false
        });
        productCount++;
    }

    // Add seller by manufacturer
    function addSeller(
        string memory _sellerName,
        string memory _sellerBrand,
        uint _sellerCode,
        uint _phoneNumber,
        uint _manufacturerId,
        string memory _sellerAddress
    ) public {
        sellers[_sellerCode] = Seller({
            sellerName: _sellerName,
            sellerBrand: _sellerBrand,
            sellerCode: _sellerCode,
            phoneNumber: _phoneNumber,
            manufacturerId: _manufacturerId,
            sellerAddress: _sellerAddress
        });
        sellerCount++;
    }

    // Sell to consumer by seller
    function sellToConsumer(uint _productSerial, uint _consumerCode) public {
        require(products[_productSerial].isVerified, "Product not verified");
        require(_consumerCode != 0, "Invalid consumer code");

        transactions[transactionCount] = Transaction({
            productSerial: _productSerial,
            consumerCode: _consumerCode,
            isSold: true
        });
        transactionCount++;
    }

    // Verify product by consumer
    function verifyProduct(uint _productSerial, uint _consumerCode) public view returns (string memory) {
        require(_consumerCode != 0, "Invalid consumer code");

        if (products[_productSerial].isVerified) {
            return "Product is real";
        } else {
            return "Product is fake";
        }
    }
}

