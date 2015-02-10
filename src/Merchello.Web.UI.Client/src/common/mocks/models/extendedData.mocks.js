angular.module('merchello.mocks').factory('extendedDataMocks', ['mockHelper', function(mockHelper) {

    function getExtendedData() {
        return  [{"key":"merchShippingOriginAddress","value":"<Address xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\" z:Id=\"i1\" xmlns:z=\"http://schemas.microsoft.com/2003/10/Serialization/\" xmlns=\"http://schemas.datacontract.org/2004/07/Merchello.Core.Models\"><Address1>411 W. Magnolia</Address1><Address2 i:nil=\"true\" /><AddressType>Shipping</AddressType><CountryCode>US</CountryCode><Email i:nil=\"true\" /><IsCommercial>false</IsCommercial><Locality>Bellingham</Locality><Name>Default Warehouse</Name><Organization i:nil=\"true\" /><Phone i:nil=\"true\" /><PostalCode>98225</PostalCode><Region>WA</Region></Address>"},{"key":"merchCurrencyCode","value":"USD"},{"key":"merchLineItemCollection","value":"<merchLineItemCollection><merchLineItem><merchContainerKey>00000000-0000-0000-0000-000000000000</merchContainerKey><merchLineItemTfKey>d462c051-07f4-45f5-aad2-d5c844159f04</merchLineItemTfKey><merchSku>awww-flower-bean</merchSku><merchName>Awww Flower Bean</merchName><merchQuantity>1</merchQuantity><merchPrice>24.330000</merchPrice><merchExtendedData><extendedData><merchWarehouseCatalogKey>b25c2b00-578e-49b9-bea2-bf3712053c63</merchWarehouseCatalogKey><merchBarcode /><merchWeight>0.000000</merchWeight><merchManufacturerModelNumber /><merchDownload>False</merchDownload><merchSalePrice>0.000000</merchSalePrice><merchLength>0.000000</merchLength><merchPrice>24.330000</merchPrice><merchCostOfGoods>0.000000</merchCostOfGoods><merchOnSale>False</merchOnSale><merchProductVariantKey>fcef819d-a6dc-48be-a662-0df6a5684d94</merchProductVariantKey><merchHeight>0.000000</merchHeight><merchOutOfStockPurchase>False</merchOutOfStockPurchase><merchWidth>0.000000</merchWidth><merchProductKey>b33a4530-9c66-432c-9ceb-426939f327fd</merchProductKey><umbracoContentId>1096</umbracoContentId><merchTaxable>True</merchTaxable><merchShippable>True</merchShippable><merchTrackInventory>True</merchTrackInventory><merchDownloadMediaId>-1</merchDownloadMediaId><merchManufacturer /></extendedData></merchExtendedData></merchLineItem><merchLineItem><merchContainerKey>00000000-0000-0000-0000-000000000000</merchContainerKey><merchLineItemTfKey>d462c051-07f4-45f5-aad2-d5c844159f04</merchLineItemTfKey><merchSku>bean-with-box</merchSku><merchName>Bean With Box</merchName><merchQuantity>1</merchQuantity><merchPrice>29.990000</merchPrice><merchExtendedData><extendedData><merchWarehouseCatalogKey>b25c2b00-578e-49b9-bea2-bf3712053c63</merchWarehouseCatalogKey><merchBarcode /><merchWeight>0.000000</merchWeight><merchManufacturerModelNumber /><merchDownload>False</merchDownload><merchSalePrice>0.000000</merchSalePrice><merchLength>0.000000</merchLength><merchPrice>29.990000</merchPrice><merchCostOfGoods>0.000000</merchCostOfGoods><merchOnSale>False</merchOnSale><merchProductVariantKey>8e57d657-bbf4-43ee-997c-6eca7b83c825</merchProductVariantKey><merchHeight>0.000000</merchHeight><merchOutOfStockPurchase>False</merchOutOfStockPurchase><merchWidth>0.000000</merchWidth><merchProductKey>4c8897c0-3e06-4490-8c59-a88cb0530070</merchProductKey><umbracoContentId>1057</umbracoContentId><merchTaxable>True</merchTaxable><merchShippable>True</merchShippable><merchTrackInventory>True</merchTrackInventory><merchDownloadMediaId>-1</merchDownloadMediaId><merchManufacturer /></extendedData></merchExtendedData></merchLineItem><merchLineItem><merchContainerKey>00000000-0000-0000-0000-000000000000</merchContainerKey><merchLineItemTfKey>d462c051-07f4-45f5-aad2-d5c844159f04</merchLineItemTfKey><merchSku>dancing-beans</merchSku><merchName>Dancing Beans</merchName><merchQuantity>1</merchQuantity><merchPrice>2.320000</merchPrice><merchExtendedData><extendedData><merchWarehouseCatalogKey>b25c2b00-578e-49b9-bea2-bf3712053c63</merchWarehouseCatalogKey><merchBarcode /><merchWeight>2.000000</merchWeight><merchManufacturerModelNumber /><merchDownload>False</merchDownload><merchSalePrice>0.000000</merchSalePrice><merchLength>9.000000</merchLength><merchPrice>2.320000</merchPrice><merchCostOfGoods>0.000000</merchCostOfGoods><merchOnSale>False</merchOnSale><merchProductVariantKey>88632c83-2ffd-4df1-9f4f-2126fb466606</merchProductVariantKey><merchHeight>23.000000</merchHeight><merchOutOfStockPurchase>False</merchOutOfStockPurchase><merchWidth>31.000000</merchWidth><merchProductKey>8ed6454d-ba64-46dd-8602-cd3ff81db6a4</merchProductKey><umbracoContentId>1106</umbracoContentId><merchTaxable>True</merchTaxable><merchShippable>True</merchShippable><merchTrackInventory>True</merchTrackInventory><merchDownloadMediaId>-1</merchDownloadMediaId><merchManufacturer /></extendedData></merchExtendedData></merchLineItem></merchLineItemCollection>"},{"key":"merchShippingDestinationAddress","value":"<Address xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\" z:Id=\"i1\" xmlns:z=\"http://schemas.microsoft.com/2003/10/Serialization/\" xmlns=\"http://schemas.datacontract.org/2004/07/Merchello.Core.Models\"><Address1>114 W. Magnolia St</Address1><Address2>Suite 300</Address2><AddressType>Shipping</AddressType><CountryCode>US</CountryCode><Email>rusty@mindfly.com</Email><IsCommercial>false</IsCommercial><Locality>Bellingham</Locality><Name>Rusty Swayne</Name><Organization i:nil=\"true\" /><Phone i:nil=\"true\" /><PostalCode>98225</PostalCode><Region>WA</Region></Address>"},{"key":"merchShipMethodKey","value":"7f236971-4342-4515-96f2-d38045e6014b"}];
    }

    return {
        getExtendedData: getExtendedData
    };
}]);
