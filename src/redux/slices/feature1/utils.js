export const flightdata = {
  CatalogProductOfferingsQueryRequest: {
    CatalogProductOfferingsRequest: {
      "@type": "CatalogProductOfferingsRequestAir",
      offersPerPage: 15,
      maxNumberOfUpsellsToReturn: 4,
      contentSourceList: ["GDS"],
      PassengerCriteria: [
        {
          "@type": "PassengerCriteria",
          number: 1,
          passengerTypeCode: "ADT",
        },
      ],
      SearchCriteriaFlight: [
        {
          "@type": "SearchCriteriaFlight",
          departureDate: "2025-01-20",
          From: {
            value: "SYD",
          },
          To: {
            value: "HND",
          },
        },
      ],
    },
  },
  CatalogProductOfferingsResponse: {
    "@type": "CatalogProductOfferingsResponse",
    transactionId: "aeb990fd-4087-490e-91ab-9595c779d607",
    CatalogProductOfferings: {
      "@type": "CatalogProductOfferings",
      Identifier: {
        value: "b2819029-06b5-493f-a26e-72a9ed73b124",
      },
      CatalogProductOffering: [
        {
          "@type": "CatalogProductOffering",
          sequence: 1,
          id: "o1",
          Departure: "SYD",
          Arrival: "NRT",
          Brand: [
            {
              "@type": "BrandID",
              BrandRef: "b0",
            },
            {
              "@type": "BrandID",
              BrandRef: "b1",
            },
            {
              "@type": "BrandID",
              BrandRef: "b2",
            },
            {
              "@type": "BrandID",
              BrandRef: "b3",
            },
            {
              "@type": "BrandID",
              BrandRef: "b4",
            },
            {
              "@type": "BrandID",
              BrandRef: "b6",
            },
          ],
          ProductBrandOptions: [
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s6", "s7"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 541,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 637.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 541,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 637.97,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p0",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T0",
                  },
                  CombinabilityCode: ["j1"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 541,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 637.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 541,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 637.97,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 675,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 771.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 675,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 771.97,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b1",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p1",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T1",
                  },
                  CombinabilityCode: ["j2"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 675,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 771.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 675,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 771.97,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 827,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 923.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 827,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 923.97,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b2",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p2",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T2",
                  },
                  CombinabilityCode: ["j3"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 827,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 923.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 827,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 923.97,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1409,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 1505.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1409,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1505.97,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p3",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T3",
                  },
                  CombinabilityCode: ["j4"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1409,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 1505.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1409,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1505.97,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2012,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 2108.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2012,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2108.97,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b4",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p4",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T4",
                  },
                  CombinabilityCode: ["j5"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2012,
                    TotalTaxes: 96.97,
                    TotalFees: 0,
                    TotalPrice: 2108.97,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2012,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 96.97,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 10.42,
                              },
                              {
                                taxCode: "WG",
                                value: 1.81,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2108.97,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s10", "s11"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 541,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 657.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 541,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 657.04,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p5",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T5",
                  },
                  CombinabilityCode: ["j6"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 541,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 657.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 541,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 657.04,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 675,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 791.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 675,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 791.04,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b1",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p6",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T6",
                  },
                  CombinabilityCode: ["j7"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 675,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 791.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 675,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 791.04,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 827,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 943.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 827,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 943.04,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b2",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p7",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T7",
                  },
                  CombinabilityCode: ["j8"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 827,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 943.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 827,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 943.04,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1409,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 1525.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1409,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1525.04,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p8",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T8",
                  },
                  CombinabilityCode: ["j9"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1409,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 1525.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1409,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1525.04,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2012,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 2128.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2012,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2128.04,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b4",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p9",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T9",
                  },
                  CombinabilityCode: ["j10"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2012,
                    TotalTaxes: 116.04,
                    TotalFees: 0,
                    TotalPrice: 2128.04,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2012,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 116.04,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 22.99,
                              },
                              {
                                taxCode: "WG",
                                value: 8.31,
                              },
                              {
                                taxCode: "WY",
                                value: 11.74,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2128.04,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s8", "s9"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 527,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 658.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 527,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 658.06,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p10",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T10",
                  },
                  CombinabilityCode: ["j11"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 527,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 658.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 527,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 658.06,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 656,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 787.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 656,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 787.06,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b1",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p11",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T11",
                  },
                  CombinabilityCode: ["j12"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 656,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 787.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 656,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 787.06,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 804,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 935.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 804,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 935.06,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b2",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p12",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T12",
                  },
                  CombinabilityCode: ["j13"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 804,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 935.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 804,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 935.06,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1361,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 1492.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1361,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1492.06,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p13",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T13",
                  },
                  CombinabilityCode: ["j14"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1361,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 1492.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1361,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1492.06,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2087,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 2218.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2087,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2218.06,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b4",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p14",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T14",
                  },
                  CombinabilityCode: ["j15"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2087,
                    TotalTaxes: 131.06,
                    TotalFees: 0,
                    TotalPrice: 2218.06,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2087,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 131.06,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 7.87,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2218.06,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s14", "s15"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 527,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 659.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 527,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 659.81,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p15",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T15",
                  },
                  CombinabilityCode: ["j16"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 527,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 659.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 527,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 659.81,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 656,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 788.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 656,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 788.81,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b1",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p16",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T16",
                  },
                  CombinabilityCode: ["j17"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 656,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 788.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 656,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 788.81,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 804,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 936.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 804,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 936.81,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b2",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p17",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T17",
                  },
                  CombinabilityCode: ["j18"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 804,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 936.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 804,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 936.81,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1361,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 1493.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1361,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1493.81,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p18",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T18",
                  },
                  CombinabilityCode: ["j19"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1361,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 1493.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1361,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1493.81,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2087,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 2219.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2087,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2219.81,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b4",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p19",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T19",
                  },
                  CombinabilityCode: ["j20"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2087,
                    TotalTaxes: 132.81,
                    TotalFees: 0,
                    TotalPrice: 2219.81,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2087,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 132.81,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 21.79,
                              },
                              {
                                taxCode: "WG",
                                value: 9.62,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2219.81,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s4", "s5"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 914,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1068.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 914,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1068.36,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p20",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T20",
                  },
                  CombinabilityCode: ["j21"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 914,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1068.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 914,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1068.36,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1125,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1279.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1125,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1279.36,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b2",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p21",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T21",
                  },
                  CombinabilityCode: ["j22"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1125,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1279.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1125,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1279.36,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1514,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1668.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1514,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1668.36,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p22",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T22",
                  },
                  CombinabilityCode: ["j23"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1514,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1668.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1514,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1668.36,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2474,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 2628.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2474,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2628.36,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b4",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p23",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T23",
                  },
                  CombinabilityCode: ["j24"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 2474,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 2628.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 2474,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2628.36,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1625,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1779.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1625,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1779.36,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p24",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T24",
                  },
                  CombinabilityCode: ["j25"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1625,
                    TotalTaxes: 154.36,
                    TotalFees: 0,
                    TotalPrice: 1779.36,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1625,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 154.36,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YQ",
                                value: 3,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1779.36,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          "@type": "CatalogProductOffering",
          sequence: 1,
          id: "o2",
          Departure: "SYD",
          Arrival: "HND",
          Brand: [
            {
              "@type": "BrandID",
              BrandRef: "b8",
            },
            {
              "@type": "BrandID",
              BrandRef: "b9",
            },
            {
              "@type": "BrandID",
              BrandRef: "b10",
            },
            {
              "@type": "BrandID",
              BrandRef: "b11",
            },
            {
              "@type": "BrandID",
              BrandRef: "b12",
            },
            {
              "@type": "BrandID",
              BrandRef: "b13",
            },
            {
              "@type": "BrandID",
              BrandRef: "b14",
            },
            {
              "@type": "BrandID",
              BrandRef: "b15",
            },
          ],
          ProductBrandOptions: [
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s1"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 999,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 1128.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 999,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1128.39,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b8",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p25",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T25",
                  },
                  CombinabilityCode: ["j26"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 999,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 1128.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 999,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1128.39,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1864,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 1993.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1864,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1993.39,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b12",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p26",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T26",
                  },
                  CombinabilityCode: ["j27"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1864,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 1993.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1864,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1993.39,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 4897,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 5026.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 4897,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 5026.39,
                        },
                        Surcharges: {
                          "@type": "SurchargesDetail",
                          approximateInd: true,
                          TotalSurcharges: 600,
                          Surcharge: [
                            {
                              currencyCode: "AUD",
                              purpose: "Other",
                              decimalPlace: 2,
                              value: 600,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b13",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p27",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T27",
                  },
                  CombinabilityCode: ["j28"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 4897,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 5026.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 4897,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 5026.39,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 6227,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 6356.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 6227,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 6356.39,
                        },
                        Surcharges: {
                          "@type": "SurchargesDetail",
                          approximateInd: true,
                          TotalSurcharges: 600,
                          Surcharge: [
                            {
                              currencyCode: "AUD",
                              purpose: "Other",
                              decimalPlace: 2,
                              value: 600,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b14",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p28",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T28",
                  },
                  CombinabilityCode: ["j29"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 6227,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 6356.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 6227,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 6356.39,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 7333,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 7462.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 7333,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 7462.39,
                        },
                        Surcharges: {
                          "@type": "SurchargesDetail",
                          approximateInd: true,
                          TotalSurcharges: 600,
                          Surcharge: [
                            {
                              currencyCode: "AUD",
                              purpose: "Other",
                              decimalPlace: 2,
                              value: 600,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b15",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p29",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T29",
                  },
                  CombinabilityCode: ["j30"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 7333,
                    TotalTaxes: 129.39,
                    TotalFees: 0,
                    TotalPrice: 7462.39,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 7333,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 129.39,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "WY",
                                value: 41.89,
                              },
                              {
                                taxCode: "YR",
                                value: 17.5,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 7462.39,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          "@type": "CatalogProductOffering",
          sequence: 1,
          id: "o3",
          Departure: "SYD",
          Arrival: "NRT",
          Brand: [
            {
              "@type": "BrandID",
              BrandRef: "b8",
            },
            {
              "@type": "BrandID",
              BrandRef: "b9",
            },
            {
              "@type": "BrandID",
              BrandRef: "b10",
            },
            {
              "@type": "BrandID",
              BrandRef: "b11",
            },
            {
              "@type": "BrandID",
              BrandRef: "b12",
            },
            {
              "@type": "BrandID",
              BrandRef: "b13",
            },
            {
              "@type": "BrandID",
              BrandRef: "b14",
            },
            {
              "@type": "BrandID",
              BrandRef: "b15",
            },
          ],
          ProductBrandOptions: [
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s12", "s13"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 983,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 1150.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 983,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1150.8,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b8",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p30",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T30",
                  },
                  CombinabilityCode: ["j31"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 983,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 1150.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 983,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1150.8,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1949,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 2116.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1949,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2116.8,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b12",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p31",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T31",
                  },
                  CombinabilityCode: ["j32"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1949,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 2116.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1949,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2116.8,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 4136,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 4303.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 4136,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 4303.8,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b13",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p32",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T32",
                  },
                  CombinabilityCode: ["j33"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 4136,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 4303.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 4136,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 4303.8,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 5950,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 6117.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 5950,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 6117.8,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b14",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p33",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T33",
                  },
                  CombinabilityCode: ["j34"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 5950,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 6117.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 5950,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 6117.8,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 7000,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 7167.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 7000,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 7167.8,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b15",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p34",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T34",
                  },
                  CombinabilityCode: ["j35"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 7000,
                    TotalTaxes: 167.8,
                    TotalFees: 0,
                    TotalPrice: 7167.8,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 7000,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 167.8,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 17.89,
                              },
                              {
                                taxCode: "WG",
                                value: 18.9,
                              },
                              {
                                taxCode: "WY",
                                value: 26.01,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 7167.8,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              "@type": "ProductBrandOptions",
              flightRefs: ["s2", "s3"],
              ProductBrandOffering: [
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 995,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 1163.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 995,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1163.86,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b8",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p35",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T35",
                  },
                  CombinabilityCode: ["j36"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 995,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 1163.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 995,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 1163.86,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1834,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 2002.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1834,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2002.86,
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b12",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p36",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T36",
                  },
                  CombinabilityCode: ["j37"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 1834,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 2002.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 1834,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 2002.86,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 4515,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 4683.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 4515,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 4683.86,
                        },
                        Surcharges: {
                          "@type": "SurchargesDetail",
                          approximateInd: true,
                          TotalSurcharges: 400,
                          Surcharge: [
                            {
                              currencyCode: "AUD",
                              purpose: "Other",
                              decimalPlace: 2,
                              value: 400,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b13",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p37",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T37",
                  },
                  CombinabilityCode: ["j38"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 4515,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 4683.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 4515,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 4683.86,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 5663,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 5831.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 5663,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 5831.86,
                        },
                        Surcharges: {
                          "@type": "SurchargesDetail",
                          approximateInd: true,
                          TotalSurcharges: 400,
                          Surcharge: [
                            {
                              currencyCode: "AUD",
                              purpose: "Other",
                              decimalPlace: 2,
                              value: 400,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b14",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p38",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T38",
                  },
                  CombinabilityCode: ["j39"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 5663,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 5831.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 5663,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 5831.86,
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "ProductBrandOffering",
                  Price: {
                    "@type": "PriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 6629,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 6797.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 6629,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 6797.86,
                        },
                        Surcharges: {
                          "@type": "SurchargesDetail",
                          approximateInd: true,
                          TotalSurcharges: 400,
                          Surcharge: [
                            {
                              currencyCode: "AUD",
                              purpose: "Other",
                              decimalPlace: 2,
                              value: 400,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b15",
                  },
                  Product: [
                    {
                      "@type": "ProductID",
                      productRef: "p39",
                    },
                  ],
                  TermsAndConditions: {
                    "@type": "TermsAndConditionsID",
                    termsAndConditionsRef: "T39",
                  },
                  CombinabilityCode: ["j40"],
                  BestCombinablePrice: {
                    "@type": "BestCombinablePriceDetail",
                    CurrencyCode: {
                      decimalPlace: 2,
                      value: "AUD",
                    },
                    Base: 6629,
                    TotalTaxes: 168.86,
                    TotalFees: 0,
                    TotalPrice: 6797.86,
                    PriceBreakdown: [
                      {
                        "@type": "PriceBreakdownAir",
                        quantity: 1,
                        requestedPassengerType: "ADT",
                        Amount: {
                          "@type": "Amount",
                          CurrencyCode: {
                            decimalPlace: 2,
                            value: "AUD",
                          },
                          Base: 6629,
                          Taxes: {
                            "@type": "TaxesDetail",
                            TotalTaxes: 168.86,
                            Tax: [
                              {
                                taxCode: "AU",
                                value: 70,
                              },
                              {
                                taxCode: "QR",
                                value: 19.18,
                              },
                              {
                                taxCode: "WG",
                                value: 16.28,
                              },
                              {
                                taxCode: "WY",
                                value: 28.4,
                              },
                              {
                                taxCode: "YR",
                                value: 35,
                              },
                            ],
                          },
                          Fees: {
                            "@type": "FeesDetail",
                            TotalFees: 0,
                          },
                          Total: 6797.86,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    Result: {
      "@type": "Result",
    },
    ReferenceList: [
      {
        "@type": "ReferenceListFlight",
        Flight: [
          {
            "@type": "FlightDetail",
            distance: 4863,
            duration: "PT10H",
            carrier: "QF",
            number: "59",
            equipment: "333",
            id: "s1",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "1",
              location: "SYD",
              date: "2025-01-20",
              time: "12:00:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "3",
              location: "HND",
              date: "2025-01-20",
              time: "20:00:00",
            },
            AvailabilitySourceCode: "S",
          },
          {
            "@type": "FlightDetail",
            distance: 1226,
            duration: "PT3H5M",
            carrier: "JQ",
            number: "956",
            equipment: "32T",
            id: "s10",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "2",
              location: "SYD",
              date: "2025-01-20",
              time: "20:25:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "2",
              location: "CNS",
              date: "2025-01-20",
              time: "22:30:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 3651,
            duration: "PT7H20M",
            carrier: "JQ",
            number: "25",
            equipment: "787",
            id: "s11",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "1",
              location: "CNS",
              date: "2025-01-21",
              time: "11:25:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "3",
              location: "NRT",
              date: "2025-01-21",
              time: "17:45:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 456,
            duration: "PT1H35M",
            carrier: "QF",
            number: "491",
            equipment: "73H",
            id: "s12",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "3",
              location: "SYD",
              date: "2025-01-20",
              time: "19:30:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "1",
              location: "MEL",
              date: "2025-01-20",
              time: "21:05:00",
            },
            AvailabilitySourceCode: "S",
          },
          {
            "@type": "FlightDetail",
            distance: 5091,
            duration: "PT10H30M",
            carrier: "QF",
            number: "79",
            equipment: "333",
            id: "s13",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "2",
              location: "MEL",
              date: "2025-01-21",
              time: "09:25:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "2",
              location: "NRT",
              date: "2025-01-21",
              time: "17:55:00",
            },
            AvailabilitySourceCode: "S",
          },
          {
            "@type": "FlightDetail",
            distance: 465,
            duration: "PT1H30M",
            carrier: "JQ",
            number: "820",
            equipment: "32N",
            id: "s14",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "2",
              location: "SYD",
              date: "2025-01-20",
              time: "18:25:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "D",
              location: "BNE",
              date: "2025-01-20",
              time: "18:55:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 4441,
            duration: "PT8H55M",
            carrier: "JQ",
            number: "9",
            equipment: "787",
            id: "s15",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "I",
              location: "BNE",
              date: "2025-01-21",
              time: "10:30:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "3",
              location: "NRT",
              date: "2025-01-21",
              time: "18:25:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 465,
            duration: "PT1H30M",
            carrier: "QF",
            number: "506",
            equipment: "73H",
            id: "s2",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "3",
              location: "SYD",
              date: "2025-01-20",
              time: "07:30:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "D",
              location: "BNE",
              date: "2025-01-20",
              time: "08:00:00",
            },
            AvailabilitySourceCode: "S",
          },
          {
            "@type": "FlightDetail",
            distance: 4441,
            duration: "PT9H10M",
            carrier: "QF",
            number: "61",
            equipment: "333",
            id: "s3",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "I",
              location: "BNE",
              date: "2025-01-20",
              time: "09:20:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "2",
              location: "NRT",
              date: "2025-01-20",
              time: "17:30:00",
            },
            AvailabilitySourceCode: "S",
          },
          {
            "@type": "FlightDetail",
            distance: 465,
            duration: "PT1H30M",
            carrier: "QF",
            number: "506",
            equipment: "73H",
            id: "s4",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "3",
              location: "SYD",
              date: "2025-01-20",
              time: "07:30:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "D",
              location: "BNE",
              date: "2025-01-20",
              time: "08:00:00",
            },
            AvailabilitySourceCode: "S",
          },
          {
            "@type": "FlightDetail",
            distance: 4441,
            duration: "PT8H55M",
            carrier: "JQ",
            number: "9",
            equipment: "787",
            id: "s5",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "I",
              location: "BNE",
              date: "2025-01-20",
              time: "10:30:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "3",
              location: "NRT",
              date: "2025-01-20",
              time: "18:25:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 1226,
            duration: "PT3H",
            carrier: "JQ",
            number: "950",
            equipment: "32N",
            id: "s6",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "2",
              location: "SYD",
              date: "2025-01-20",
              time: "06:00:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "2",
              location: "CNS",
              date: "2025-01-20",
              time: "08:00:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 3651,
            duration: "PT7H20M",
            carrier: "JQ",
            number: "25",
            equipment: "787",
            id: "s7",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "1",
              location: "CNS",
              date: "2025-01-20",
              time: "11:25:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "3",
              location: "NRT",
              date: "2025-01-20",
              time: "17:45:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 465,
            duration: "PT1H30M",
            carrier: "JQ",
            number: "810",
            equipment: "32N",
            id: "s8",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "2",
              location: "SYD",
              date: "2025-01-20",
              time: "06:20:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "D",
              location: "BNE",
              date: "2025-01-20",
              time: "06:50:00",
            },
            AvailabilitySourceCode: "A",
          },
          {
            "@type": "FlightDetail",
            distance: 4441,
            duration: "PT8H55M",
            carrier: "JQ",
            number: "9",
            equipment: "787",
            id: "s9",
            Departure: {
              "@type": "DepartureDetail",
              terminal: "I",
              location: "BNE",
              date: "2025-01-20",
              time: "10:30:00",
            },
            Arrival: {
              "@type": "ArrivalDetail",
              terminal: "3",
              location: "NRT",
              date: "2025-01-20",
              time: "18:25:00",
            },
            AvailabilitySourceCode: "A",
          },
        ],
      },
      {
        "@type": "ReferenceListProduct",
        Product: [
          {
            "@type": "ProductAir",
            totalDuration: "PT13H45M",
            id: "p0",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H25M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s6",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s7",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT13H45M",
            id: "p1",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H25M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s6",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s7",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT14H5M",
            id: "p10",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H40M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s8",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s9",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT14H5M",
            id: "p11",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H40M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s8",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s9",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT14H5M",
            id: "p12",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H40M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s8",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s9",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT14H5M",
            id: "p13",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H40M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s8",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s9",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT14H5M",
            id: "p14",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H40M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s8",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s9",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "J",
                    cabin: "Business",
                    fareBasisCode: "JLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b4",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT26H",
            id: "p15",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT15H35M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s14",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s15",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT26H",
            id: "p16",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT15H35M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s14",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s15",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT26H",
            id: "p17",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT15H35M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s14",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s15",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT26H",
            id: "p18",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT15H35M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s14",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s15",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT26H",
            id: "p19",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT15H35M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s14",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s15",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "J",
                    cabin: "Business",
                    fareBasisCode: "JLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b4",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT13H45M",
            id: "p2",
            Quantity: 2,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H25M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s6",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s7",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H55M",
            id: "p20",
            Quantity: 7,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT2H30M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s4",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s5",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "I",
                    cabin: "Business",
                    fareBasisCode: "IBQ7W",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b5",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H55M",
            id: "p21",
            Quantity: 7,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT2H30M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s4",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s5",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "I",
                    cabin: "Business",
                    fareBasisCode: "IBQ7W",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b5",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H55M",
            id: "p22",
            Quantity: 7,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT2H30M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s4",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s5",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "I",
                    cabin: "Business",
                    fareBasisCode: "IBQ7W",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b5",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H55M",
            id: "p23",
            Quantity: 7,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT2H30M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s4",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s5",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "I",
                    cabin: "Business",
                    fareBasisCode: "IBQ7W",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b5",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "J",
                    cabin: "Business",
                    fareBasisCode: "JLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "BT",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b4",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H55M",
            id: "p24",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT2H30M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s4",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s5",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Business",
                    fareBasisCode: "CBQW",
                    fareType: "PublicFare",
                    fareTypeCode: "BOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b7",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "BOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT10H",
            id: "p25",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s1",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "S",
                    cabin: "Economy",
                    fareBasisCode: "SSJSO",
                    fareType: "PublicFare",
                    fareTypeCode: "XOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b8",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT10H",
            id: "p26",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s1",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HFJSO",
                    fareType: "PublicFare",
                    fareTypeCode: "ER",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b12",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT10H",
            id: "p27",
            Quantity: 3,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s1",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "I",
                    cabin: "Business",
                    fareBasisCode: "IJSO",
                    fareType: "PublicFare",
                    fareTypeCode: "BAP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b13",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT10H",
            id: "p28",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s1",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "D",
                    cabin: "Business",
                    fareBasisCode: "DSJSO",
                    fareType: "PublicFare",
                    fareTypeCode: "BOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b14",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT10H",
            id: "p29",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s1",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Business",
                    fareBasisCode: "CFJSO",
                    fareType: "PublicFare",
                    fareTypeCode: "BR",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b15",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT13H45M",
            id: "p3",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H25M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s6",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s7",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT24H25M",
            id: "p30",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s12",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s13",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "S",
                    cabin: "Economy",
                    fareBasisCode: "SSJMO",
                    fareType: "PublicFare",
                    fareTypeCode: "XOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b8",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT24H25M",
            id: "p31",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s12",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s13",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HFJMO",
                    fareType: "PublicFare",
                    fareTypeCode: "ER",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b12",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT24H25M",
            id: "p32",
            Quantity: 1,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s12",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s13",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "I",
                    cabin: "Business",
                    fareBasisCode: "IJMO",
                    fareType: "PublicFare",
                    fareTypeCode: "BAP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b13",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT24H25M",
            id: "p33",
            Quantity: 4,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s12",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s13",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "D",
                    cabin: "Business",
                    fareBasisCode: "DSJMO",
                    fareType: "PublicFare",
                    fareTypeCode: "BOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b14",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT24H25M",
            id: "p34",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s12",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s13",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "C",
                    cabin: "Business",
                    fareBasisCode: "CFJMO",
                    fareType: "PublicFare",
                    fareTypeCode: "BR",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b15",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H",
            id: "p35",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT1H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s2",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s3",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "S",
                    cabin: "Economy",
                    fareBasisCode: "SSJBO",
                    fareType: "PublicFare",
                    fareTypeCode: "XOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b8",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H",
            id: "p36",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT1H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s2",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s3",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HFJBO",
                    fareType: "PublicFare",
                    fareTypeCode: "ER",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b12",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H",
            id: "p37",
            Quantity: 1,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT1H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s2",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s3",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "I",
                    cabin: "Business",
                    fareBasisCode: "IJBO",
                    fareType: "PublicFare",
                    fareTypeCode: "BAP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b13",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H",
            id: "p38",
            Quantity: 7,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT1H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s2",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s3",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "D",
                    cabin: "Business",
                    fareBasisCode: "DSJBO",
                    fareType: "PublicFare",
                    fareTypeCode: "BOX",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b14",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT12H",
            id: "p39",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT1H20M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s2",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s3",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1, 2],
                    classOfService: "C",
                    cabin: "Business",
                    fareBasisCode: "CFJBO",
                    fareType: "PublicFare",
                    fareTypeCode: "BR",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b15",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT13H45M",
            id: "p4",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT3H25M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s6",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s7",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "J",
                    cabin: "Business",
                    fareBasisCode: "JLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b4",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT23H20M",
            id: "p5",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H55M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s10",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s11",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT23H20M",
            id: "p6",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H55M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s10",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s11",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "H",
                    cabin: "Economy",
                    fareBasisCode: "HLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b1",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT23H20M",
            id: "p7",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H55M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s10",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s11",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "K",
                    cabin: "Economy",
                    fareBasisCode: "KFXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b2",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT23H20M",
            id: "p8",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H55M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s10",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s11",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "Q",
                    cabin: "Economy",
                    fareBasisCode: "QMXL2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b3",
                    },
                  },
                ],
              },
            ],
          },
          {
            "@type": "ProductAir",
            totalDuration: "PT23H20M",
            id: "p9",
            Quantity: 9,
            FlightSegment: [
              {
                "@type": "FlightSegment",
                sequence: 1,
                connectionDuration: "PT12H55M",
                boundFlightsInd: true,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s10",
                },
              },
              {
                "@type": "FlightSegment",
                sequence: 2,
                Flight: {
                  "@type": "FlightID",
                  FlightRef: "s11",
                },
              },
            ],
            PassengerFlight: [
              {
                "@type": "PassengerFlight",
                passengerQuantity: 1,
                passengerTypeCode: "ADT",
                FlightProduct: [
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [1],
                    classOfService: "C",
                    cabin: "Economy",
                    fareBasisCode: "CLOW",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b0",
                    },
                  },
                  {
                    "@type": "FlightProduct",
                    segmentSequence: [2],
                    classOfService: "J",
                    cabin: "Business",
                    fareBasisCode: "JLOW2",
                    fareType: "PublicFare",
                    fareTypeCode: "SIP",
                    Brand: {
                      "@type": "BrandID",
                      BrandRef: "b4",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        "@type": "ReferenceListTermsAndConditions",
        TermsAndConditions: [
          {
            "@type": "TermsAndConditionsAir",
            id: "T0",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p0"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p0"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p0"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T1",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p1"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p1"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T10",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p10"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p10"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p10"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T11",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p11"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p11"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T12",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p12"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p12"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p12"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T13",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p13"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p13"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T14",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p14"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p14"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 77,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T15",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p15"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p15"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p15"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T16",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p16"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p16"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T17",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p17"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p17"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p17"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T18",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p18"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p18"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T19",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p19"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p19"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 77,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T2",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p2"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p2"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p2"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T20",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p20"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p20"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p20"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-06T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T21",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p21"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p21"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p21"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-06T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T22",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p22"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p22"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p22"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-06T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 39,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T23",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p23"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p23"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p23"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-06T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 39,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T24",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p24"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p24"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p24"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-06T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T25",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p25"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 30,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p25"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-09T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 125,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 200,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T26",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p26"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 30,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p26"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T27",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p27"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p27"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-13T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 400,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 600,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T28",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p28"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p28"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-21T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 250,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 300,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T29",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p29"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p29"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-21T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T3",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p3"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p3"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T30",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p30"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 30,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p30"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p30"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-09T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 125,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 200,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T31",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p31"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 30,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p31"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p31"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T32",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p32"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p32"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-13T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 400,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 600,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T33",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p33"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p33"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-21T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 250,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 300,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T34",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p34"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p34"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-21T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T35",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p35"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 30,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p35"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p35"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-09T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 125,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 200,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T36",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p36"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 30,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p36"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1],
                Text: ["2P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p36"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                  },
                ],
                SegmentSequenceList: [2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T37",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p37"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p37"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-13T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 400,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 600,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T38",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p38"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p38"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-21T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 250,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 300,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T39",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "QF",
                ProductRef: ["p39"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 40,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "QF",
                ProductRef: ["p39"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 2,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["2P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-21T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["Anytime"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T4",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p4"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p4"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 77,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T5",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p5"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p5"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p5"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T6",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p6"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p6"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["NoShow"],
                    ProductRefs: [],
                    SegmentSequence: [],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyPercent",
                        Percent: 100,
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T7",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p7"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "SecondCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p7"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    Text: "BAGGAGE CHARGES DATA NOT AVAILABLE",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["0P"],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p7"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T8",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p8"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p8"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          value: 0,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
          {
            "@type": "TermsAndConditionsAir",
            id: "T9",
            BaggageAllowance: [
              {
                "@type": "BaggageAllowanceDetail",
                url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/JQ",
                passengerTypeCodes: ["ADT"],
                baggageType: "FirstCheckedBag",
                validatingAirlineCode: "JQ",
                ProductRef: ["p9"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    Measurement: [
                      {
                        measurementType: "Weight",
                        unit: "Kilograms",
                        value: 20,
                      },
                    ],
                    Text: "CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE",
                  },
                ],
                SegmentSequenceList: [1, 2],
              },
              {
                "@type": "BaggageAllowanceDetail",
                passengerTypeCodes: ["ADT"],
                baggageType: "CarryOn",
                validatingAirlineCode: "JQ",
                ProductRef: ["p9"],
                BaggageItem: [
                  {
                    "@type": "BaggageItem",
                    quantity: 1,
                    BaggageFee: {
                      code: "AUD",
                      approximateInd: true,
                      value: 0,
                    },
                    Text: "UPTO15LB/7KG AND UPTO41LI/105LCM",
                  },
                ],
                SegmentSequenceList: [1, 2],
                Text: ["1P"],
              },
            ],
            ValidatingAirline: [
              {
                "@type": "ValidatingAirline",
                ValidatingAirline: "QF",
              },
            ],
            PaymentTimeLimit: "2024-12-11T23:59:00Z",
            Penalties: [
              {
                "@type": "Penalties",
                Change: [
                  {
                    "@type": "ChangePermitted",
                    penaltyTypes: ["BeforeDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 77,
                        },
                      },
                    ],
                  },
                ],
                Cancel: [
                  {
                    "@type": "CancelPermitted",
                    penaltyTypes: ["AfterDeparture"],
                    PenaltyAppliesTo: "PerTicket",
                    Penalty: [
                      {
                        "@type": "PenaltyAmount",
                        Amount: {
                          code: "AUD",
                          minorUnit: 2,
                          value: 50,
                        },
                      },
                    ],
                  },
                ],
                PassengerTypeCodes: ["ADT"],
              },
            ],
          },
        ],
      },
      {
        "@type": "ReferenceListBrand",
        Brand: [
          {
            "@type": "Brand",
            name: "Economy Starter no checked bag",
            tier: 1,
            shelfNumbers: [],
            code: "EconStrtno",
            id: "b0",
            Identifier: {
              value: "1240486",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Not Offered",
                groupCode: "RO",
                subGroupCode: "31",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Not Offered",
                groupCode: "RO",
                subGroupCode: "33",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
              },
              {
                "@type": "BrandAttribute",
                classification: "WiFi",
                inclusion: "Not Offered",
                groupCode: "IE",
                subGroupCode: "IT",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Not Offered",
                groupCode: "BG",
              },
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Chargeable",
                groupCode: "SA",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                Classification: "Priority Boarding",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                Classification: "In Flight Entertainment",
                Inclusion: "Chargeable",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "FF",
                Classification: "Mileage Accrual",
                Inclusion: "Not Offered",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/jetstar/JQ_general_large_101669.jpeg",
            ],
          },
          {
            "@type": "Brand",
            name: "Economy Starter with 20kg baggage",
            tier: 2,
            shelfNumbers: [],
            code: "EcoStarter",
            id: "b1",
            Identifier: {
              value: "1240483",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Not Offered",
                groupCode: "RO",
                subGroupCode: "31",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Not Offered",
                groupCode: "RO",
                subGroupCode: "33",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
              },
              {
                "@type": "BrandAttribute",
                classification: "WiFi",
                inclusion: "Not Offered",
                groupCode: "IE",
                subGroupCode: "IT",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
              },
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Chargeable",
                groupCode: "SA",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                Classification: "Priority Boarding",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                Classification: "In Flight Entertainment",
                Inclusion: "Chargeable",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "FF",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/jetstar/JQ_general_large_101669.jpeg",
            ],
          },
          {
            "@type": "Brand",
            name: "Premium Economy Saver",
            tier: 5,
            shelfNumbers: [],
            code: "PYSV",
            id: "b10",
            Identifier: {
              value: "1615137",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C8",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Not Offered",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_56233.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Premium Economy Sale",
            tier: 4,
            shelfNumbers: [],
            code: "PYSL",
            id: "b11",
            Identifier: {
              value: "1615138",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C8",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Not Offered",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_56232.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Economy Flex",
            tier: 3,
            shelfNumbers: [],
            code: "ECFL",
            id: "b12",
            Identifier: {
              value: "1615139",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C5",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Not Offered",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_56234.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Business Sale",
            tier: 7,
            shelfNumbers: [],
            code: "BUSL",
            id: "b13",
            Identifier: {
              value: "1615135",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C8",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Included",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_56231.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Business Saver",
            tier: 8,
            shelfNumbers: [],
            code: "BUSV",
            id: "b14",
            Identifier: {
              value: "1615134",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C8",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Included",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_56229.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Business Flex",
            tier: 9,
            shelfNumbers: [],
            code: "BUFL",
            id: "b15",
            Identifier: {
              value: "1615133",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C8",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Included",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_56231.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Economy Flex",
            tier: 3,
            shelfNumbers: [],
            code: "Flex",
            id: "b2",
            Identifier: {
              value: "1240484",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Included",
                groupCode: "RO",
                subGroupCode: "31",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Not Offered",
                groupCode: "RO",
                subGroupCode: "33",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
              },
              {
                "@type": "BrandAttribute",
                classification: "WiFi",
                inclusion: "Not Offered",
                groupCode: "IE",
                subGroupCode: "IT",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Not Offered",
                groupCode: "BG",
              },
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "SA",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                Classification: "Priority Boarding",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                Classification: "In Flight Entertainment",
                Inclusion: "Chargeable",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "FF",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/jetstar/JQ_general_large_101668.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Economy Starter Max",
            tier: 4,
            shelfNumbers: [],
            code: "Econ Max",
            id: "b3",
            Identifier: {
              value: "1240485",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Included",
                groupCode: "RO",
                subGroupCode: "31",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "RO",
                subGroupCode: "33",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
              },
              {
                "@type": "BrandAttribute",
                classification: "WiFi",
                inclusion: "Not Offered",
                groupCode: "IE",
                subGroupCode: "IT",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
              },
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "SA",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                Classification: "Priority Boarding",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                Classification: "In Flight Entertainment",
                Inclusion: "Chargeable",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                Classification: "Lounge Access",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "FF",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/jetstar/JQ_general_large_101667.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Business with Max bundle",
            tier: 5,
            shelfNumbers: [],
            code: "Biz Max",
            id: "b4",
            Identifier: {
              value: "1240487",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Included",
                groupCode: "RO",
                subGroupCode: "31",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "RO",
                subGroupCode: "33",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
              },
              {
                "@type": "BrandAttribute",
                classification: "WiFi",
                inclusion: "Not Offered",
                groupCode: "IE",
                subGroupCode: "IT",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
              },
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "SA",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                Classification: "Priority Boarding",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                Classification: "Lounge Access",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "FF",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/jetstar/JQ_general_large_101665.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Economy Flex",
            tier: 2,
            shelfNumbers: [],
            code: "FLEX",
            id: "b6",
            Identifier: {
              value: "1615120",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0CC",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Not Offered",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_65595.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Economy Saver",
            tier: 2,
            shelfNumbers: [],
            code: "ECSV",
            id: "b8",
            Identifier: {
              value: "1615140",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Chargeable",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C5",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Not Offered",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_65595.jpg",
            ],
          },
          {
            "@type": "Brand",
            name: "Premium Economy Flex",
            tier: 6,
            shelfNumbers: [],
            code: "PYFL",
            id: "b9",
            Identifier: {
              value: "1615136",
            },
            BrandAttribute: [
              {
                "@type": "BrandAttribute",
                classification: "SeatAssignment",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "SE",
                subCode: "050",
              },
              {
                "@type": "BrandAttribute",
                classification: "Rebooking",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "VC",
                subCode: "06I",
              },
              {
                "@type": "BrandAttribute",
                classification: "Refund",
                inclusion: "Included",
                groupCode: "BF",
                subGroupCode: "VR",
                subCode: "06K",
              },
              {
                "@type": "BrandAttribute",
                classification: "Meals",
                inclusion: "Included",
                groupCode: "ML",
                subGroupCode: "DR",
                subCode: "0AX",
              },
              {
                "@type": "BrandAttribute",
                classification: "CheckedBag",
                inclusion: "Included",
                groupCode: "BG",
                subCode: "0C8",
              },
              {
                "@type": "BrandAttribute",
                classification: "CarryOn",
                inclusion: "Included",
                groupCode: "BG",
                subGroupCode: "CY",
                subCode: "0L5",
              },
            ],
            AdditionalBrandAttribute: [
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PO",
                subCode: "03P",
                Classification: "Priority CheckIn",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "BF",
                subGroupCode: "FR",
                subCode: "057",
                Classification: "Mileage Accrual",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "IE",
                subCode: "0B1",
                Classification: "In Flight Entertainment",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "LG",
                subCode: "0BX",
                Classification: "Lounge Access",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PR",
                subCode: "0G6",
                Classification: "Priority Boarding",
                Inclusion: "Included",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "PY",
                subCode: "0LF",
                Classification: "Priority Baggage",
                Inclusion: "Not Offered",
              },
              {
                "@type": "AdditionalBrandAttribute",
                groupCode: "TS",
                subGroupCode: "SY",
                subCode: "0LW",
                Classification: "Priority Security",
                Inclusion: "Not Offered",
              },
            ],
            ImageURL: [
              "https://cdn.travelport.com/qantas/QF_general_large_56232.jpg",
            ],
          },
        ],
      },
    ],
  },
};
export const standrized_flightResponse = () => {
  const new_data = [];
  const CatalogProductOffering =
    flightdata?.CatalogProductOfferingsResponse?.CatalogProductOfferings
      ?.CatalogProductOffering;
  // console.log(CatalogProductOffering, "  flightdata?.CatalogProductOfferingsResponse?.CatalogProductOfferings?.CatalogProductOffering")
  CatalogProductOffering?.forEach((item) => {
    const flightRefs = item?.flightRefs;
    console.log(flightRefs, "flightRefs", item);

    item?.ProductBrandOptions?.forEach((item) => {
      const new_item = {
        ...item,
        //  flightRefs: flightRefs
      };
      new_data.push(new_item);
      return new_item;
    });
  });
  console.log(new_data, "new_data");
};
