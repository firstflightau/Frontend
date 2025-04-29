export const data = {
  oneward: {
    flights: [
      {
        "@type": "FlightDetail",
        distance: 465,
        duration: "PT1H30M",
        carrier: "JQ",
        number: "820",
        equipment: "32N",
        id: "s4",
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
        distance: 7445,
        duration: "PT14H35M",
        carrier: "QF",
        number: "8435",
        operatingCarrier: "EK",
        operatingCarrierName: "EMIRATES AIRLINES",
        equipment: "388",
        operatingCarrierNumber: "435",
        id: "s5",
        Departure: {
          "@type": "DepartureDetail",
          terminal: "I",
          location: "BNE",
          date: "2025-01-20",
          time: "20:55:00",
        },
        Arrival: {
          "@type": "ArrivalDetail",
          terminal: "3",
          location: "DXB",
          date: "2025-01-21",
          time: "05:30:00",
        },
        AvailabilitySourceCode: "S",
      },
    ],
    productsoption: [
      {
        "@type": "ProductBrandOffering",
        Price: {
          "@type": "PriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 5324,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 5845.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1508,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1673.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1154,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1249.38,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Economy Saver",
          tier: 2,
          shelfNumbers: [],
          code: "ECSV",
          id: "b0",
          Identifier: {
            value: "1672600",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p8",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T5",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p8", "p9"],
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
              validatingAirlineCode: "JQ",
              ProductRef: ["p8", "p9"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["ADT"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p8", "p9"],
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
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p8", "p9"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "JQ",
              ProductRef: ["p8", "p9"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p8", "p9"],
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
          PaymentTimeLimit: "2025-01-17T18:59:00Z",
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
        CombinabilityCode: ["j6"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 5324,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 5845.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1508,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1673.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1154,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1249.38,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT18H5M",
          id: "p8",
          Quantity: 9,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT2H",
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
              passengerQuantity: 2,
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
                    BrandRef: "b7",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "S",
                  cabin: "Economy",
                  fareBasisCode: "SLOME",
                  fareType: "PublicFare",
                  fareTypeCode: "SIP",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
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
                    BrandRef: "b7",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "S",
                  cabin: "Economy",
                  fareBasisCode: "SLOME",
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
      },
      {
        "@type": "ProductBrandOffering",
        Price: {
          "@type": "PriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 5440,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 5961.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1537,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1702.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1183,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1278.38,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Economy Saver",
          tier: 2,
          shelfNumbers: [],
          code: "ECSV",
          id: "b0",
          Identifier: {
            value: "1672600",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p10",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T6",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p10", "p11"],
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
              validatingAirlineCode: "JQ",
              ProductRef: ["p10", "p11"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["ADT"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p10", "p11"],
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
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p10", "p11"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "JQ",
              ProductRef: ["p10", "p11"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p10", "p11"],
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
          PaymentTimeLimit: "2025-01-17T18:59:00Z",
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
        CombinabilityCode: ["j7"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 5440,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 5961.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1537,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1702.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1183,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1278.38,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT18H5M",
          id: "p10",
          Quantity: 9,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT2H",
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
              passengerQuantity: 2,
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
                    BrandRef: "b9",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "S",
                  cabin: "Economy",
                  fareBasisCode: "SLOME",
                  fareType: "PublicFare",
                  fareTypeCode: "SIP",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
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
                    BrandRef: "b9",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "S",
                  cabin: "Economy",
                  fareBasisCode: "SLOME",
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
      },
      {
        "@type": "ProductBrandOffering",
        Price: {
          "@type": "PriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 8402,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 8923.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 2378,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 2543.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1823,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1918.38,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Economy Flex",
          tier: 3,
          shelfNumbers: [],
          code: "ECFL",
          id: "b3",
          Identifier: {
            value: "1672599",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p12",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T7",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p12", "p13"],
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
              validatingAirlineCode: "JQ",
              ProductRef: ["p12", "p13"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["ADT"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p12", "p13"],
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
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p12", "p13"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "JQ",
              ProductRef: ["p12", "p13"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p12", "p13"],
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
          PaymentTimeLimit: "2025-01-17T18:59:00Z",
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
        CombinabilityCode: ["j8"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 8402,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 8923.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 2378,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 2543.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1823,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1918.38,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT18H5M",
          id: "p12",
          Quantity: 9,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT2H",
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
              passengerQuantity: 2,
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
                    BrandRef: "b10",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "H",
                  cabin: "Economy",
                  fareBasisCode: "HLOME",
                  fareType: "PublicFare",
                  fareTypeCode: "SIP",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
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
                    BrandRef: "b10",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "H",
                  cabin: "Economy",
                  fareBasisCode: "HLOME",
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
      },
      {
        "@type": "ProductBrandOffering",
        Price: {
          "@type": "PriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 6260,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 6781.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1742,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1907.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1388,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1483.38,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Economy Saver",
          tier: 2,
          shelfNumbers: [],
          code: "ECSV",
          id: "b0",
          Identifier: {
            value: "1672600",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p14",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T8",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p14", "p15"],
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
              validatingAirlineCode: "JQ",
              ProductRef: ["p14", "p15"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["ADT"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p14", "p15"],
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
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p14", "p15"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "JQ",
              ProductRef: ["p14", "p15"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p14", "p15"],
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
          PaymentTimeLimit: "2025-01-17T18:59:00Z",
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
        CombinabilityCode: ["j9"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 6260,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 6781.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1742,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1907.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1388,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1483.38,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT18H5M",
          id: "p14",
          Quantity: 9,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT2H",
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
              passengerQuantity: 2,
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
                    BrandRef: "b11",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "S",
                  cabin: "Economy",
                  fareBasisCode: "SLOME",
                  fareType: "PublicFare",
                  fareTypeCode: "SIP",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b0",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
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
                    BrandRef: "b11",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "S",
                  cabin: "Economy",
                  fareBasisCode: "SLOME",
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
      },
      {
        "@type": "ProductBrandOffering",
        Price: {
          "@type": "PriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 32026,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 32547.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 8423,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 8588.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 7590,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 7685.38,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Business Saver",
          tier: 8,
          shelfNumbers: [],
          code: "BUSV",
          id: "b6",
          Identifier: {
            value: "1672594",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p16",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T9",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p16", "p17"],
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
              validatingAirlineCode: "JQ",
              ProductRef: ["p16", "p17"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["ADT"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p16", "p17"],
              BaggageItem: [
                {
                  "@type": "BaggageItem",
                  quantity: 2,
                  BaggageFee: {
                    code: "AUD",
                    approximateInd: true,
                    value: 0,
                  },
                  Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                },
              ],
              SegmentSequenceList: [2],
              Text: ["2P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p16", "p17"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "JQ",
              ProductRef: ["p16", "p17"],
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
              SegmentSequenceList: [1],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p16", "p17"],
              BaggageItem: [
                {
                  "@type": "BaggageItem",
                  quantity: 2,
                  BaggageFee: {
                    code: "AUD",
                    approximateInd: true,
                    value: 0,
                  },
                  Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                },
              ],
              SegmentSequenceList: [2],
              Text: ["2P"],
            },
          ],
          ValidatingAirline: [
            {
              "@type": "ValidatingAirline",
              ValidatingAirline: "QF",
            },
          ],
          PaymentTimeLimit: "2025-01-17T18:59:00Z",
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
        CombinabilityCode: ["j10"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 32026,
          TotalTaxes: 521.52,
          TotalFees: 0,
          TotalPrice: 32547.52,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 8423,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 165.38,
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
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 8588.38,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 7590,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 95.38,
                  Tax: [
                    {
                      taxCode: "QR",
                      value: 21.79,
                    },
                    {
                      taxCode: "WG",
                      value: 9.11,
                    },
                    {
                      taxCode: "WY",
                      value: 41.88,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 7685.38,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT18H5M",
          id: "p16",
          Quantity: 7,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT2H",
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
              passengerQuantity: 2,
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
                    BrandRef: "b7",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "D",
                  cabin: "Business",
                  fareBasisCode: "DOME",
                  fareType: "PublicFare",
                  fareTypeCode: "SIP",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b6",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
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
                    BrandRef: "b7",
                  },
                },
                {
                  "@type": "FlightProduct",
                  segmentSequence: [2],
                  classOfService: "D",
                  cabin: "Business",
                  fareBasisCode: "DOME",
                  fareType: "PublicFare",
                  fareTypeCode: "SIP",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b6",
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
  return: {
    flights: [
      {
        "@type": "FlightDetail",
        distance: 4679,
        duration: "PT9H50M",
        carrier: "QF",
        number: "295",
        operatingCarrierName: "FINNAIR FOR QANTAS",
        equipment: "333",
        subjectToGovernmentApprovalInd: true,
        id: "s12",
        Departure: {
          "@type": "DepartureDetail",
          terminal: "1",
          location: "SYD",
          date: "2025-01-20",
          time: "10:20:00",
        },
        Arrival: {
          "@type": "ArrivalDetail",
          location: "BKK",
          date: "2025-01-20",
          time: "16:10:00",
        },
        AvailabilitySourceCode: "S",
      },
      {
        "@type": "FlightDetail",
        distance: 3046,
        duration: "PT7H15M",
        carrier: "QF",
        number: "8373",
        operatingCarrier: "EK",
        operatingCarrierName: "EMIRATES AIRLINES",
        equipment: "388",
        operatingCarrierNumber: "373",
        id: "s13",
        Departure: {
          "@type": "DepartureDetail",
          location: "BKK",
          date: "2025-01-20",
          time: "20:35:00",
        },
        Arrival: {
          "@type": "ArrivalDetail",
          terminal: "3",
          location: "DXB",
          date: "2025-01-21",
          time: "00:50:00",
        },
        AvailabilitySourceCode: "S",
      },
    ],
    productsoption: [
      {
        "@type": "ProductBrandOffering",
        Price: {
          "@type": "PriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 8884,
          TotalTaxes: 465.16,
          TotalFees: 0,
          TotalPrice: 9349.16,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 2538,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 151.29,
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
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 2689.29,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1904,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 81.29,
                  Tax: [
                    {
                      taxCode: "WY",
                      value: 41.89,
                    },
                    {
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1985.29,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Economy Flex",
          tier: 3,
          shelfNumbers: [],
          code: "ECFL",
          id: "b3",
          Identifier: {
            value: "1672599",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p48",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T35",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p48"],
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
              ProductRef: ["p48"],
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
              SegmentSequenceList: [1, 2],
              Text: ["1P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p48"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "QF",
              ProductRef: ["p48"],
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
          PaymentTimeLimit: "2025-01-17T23:59:00Z",
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
              PassengerTypeCodes: ["CHD"],
            },
          ],
        },
        CombinabilityCode: ["j36"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 8884,
          TotalTaxes: 465.16,
          TotalFees: 0,
          TotalPrice: 9349.16,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 2538,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 151.29,
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
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 2689.29,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 1904,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 81.29,
                  Tax: [
                    {
                      taxCode: "WY",
                      value: 41.89,
                    },
                    {
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 1985.29,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT21H30M",
          id: "p48",
          Quantity: 9,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT4H25M",
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
              passengerQuantity: 2,
              passengerTypeCode: "ADT",
              FlightProduct: [
                {
                  "@type": "FlightProduct",
                  segmentSequence: [1, 2],
                  classOfService: "B",
                  cabin: "Economy",
                  fareBasisCode: "BLOME",
                  fareType: "PublicFare",
                  fareTypeCode: "XOX",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
              passengerTypeCode: "CHD",
              FlightProduct: [
                {
                  "@type": "FlightProduct",
                  segmentSequence: [1, 2],
                  classOfService: "B",
                  cabin: "Economy",
                  fareBasisCode: "BLOME",
                  fareType: "PublicFare",
                  fareTypeCode: "XOX",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b3",
                  },
                },
              ],
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
          Base: 31662,
          TotalTaxes: 465.16,
          TotalFees: 0,
          TotalPrice: 32127.16,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 8332,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 151.29,
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
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 8483.29,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 7499,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 81.29,
                  Tax: [
                    {
                      taxCode: "WY",
                      value: 41.89,
                    },
                    {
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 7580.29,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Business Saver",
          tier: 8,
          shelfNumbers: [],
          code: "BUSV",
          id: "b6",
          Identifier: {
            value: "1672594",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p49",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T36",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p49"],
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
              ProductRef: ["p49"],
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
              validatingAirlineCode: "EK",
              ProductRef: ["p49"],
              BaggageItem: [
                {
                  "@type": "BaggageItem",
                  quantity: 2,
                  BaggageFee: {
                    code: "AUD",
                    approximateInd: true,
                    value: 0,
                  },
                  Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                },
              ],
              SegmentSequenceList: [2],
              Text: ["2P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p49"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "QF",
              ProductRef: ["p49"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p49"],
              BaggageItem: [
                {
                  "@type": "BaggageItem",
                  quantity: 2,
                  BaggageFee: {
                    code: "AUD",
                    approximateInd: true,
                    value: 0,
                  },
                  Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                },
              ],
              SegmentSequenceList: [2],
              Text: ["2P"],
            },
          ],
          ValidatingAirline: [
            {
              "@type": "ValidatingAirline",
              ValidatingAirline: "QF",
            },
          ],
          PaymentTimeLimit: "2025-01-20T23:59:00Z",
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
              PassengerTypeCodes: ["CHD"],
            },
          ],
        },
        CombinabilityCode: ["j37"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 31662,
          TotalTaxes: 465.16,
          TotalFees: 0,
          TotalPrice: 32127.16,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 8332,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 151.29,
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
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 8483.29,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 7499,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 81.29,
                  Tax: [
                    {
                      taxCode: "WY",
                      value: 41.89,
                    },
                    {
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 7580.29,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT21H30M",
          id: "p49",
          Quantity: 7,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT4H25M",
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
              passengerQuantity: 2,
              passengerTypeCode: "ADT",
              FlightProduct: [
                {
                  "@type": "FlightProduct",
                  segmentSequence: [1, 2],
                  classOfService: "D",
                  cabin: "Business",
                  fareBasisCode: "DOME",
                  fareType: "PublicFare",
                  fareTypeCode: "BOX",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b6",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
              passengerTypeCode: "CHD",
              FlightProduct: [
                {
                  "@type": "FlightProduct",
                  segmentSequence: [1, 2],
                  classOfService: "D",
                  cabin: "Business",
                  fareBasisCode: "DOME",
                  fareType: "PublicFare",
                  fareTypeCode: "BOX",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b6",
                  },
                },
              ],
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
          Base: 37008,
          TotalTaxes: 465.16,
          TotalFees: 0,
          TotalPrice: 37473.16,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 9739,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 151.29,
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
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 9890.29,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 8765,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 81.29,
                  Tax: [
                    {
                      taxCode: "WY",
                      value: 41.89,
                    },
                    {
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 8846.29,
              },
            },
          ],
        },
        Brand: {
          "@type": "Brand",
          name: "Business Flex",
          tier: 9,
          shelfNumbers: [],
          code: "BUFL",
          id: "b16",
          Identifier: {
            value: "1672593",
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
        Product: [
          {
            "@type": "ProductID",
            productRef: "p50",
          },
        ],
        TermsAndConditions: {
          "@type": "TermsAndConditionsAir",
          id: "T37",
          BaggageAllowance: [
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["ADT"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p50"],
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
              ProductRef: ["p50"],
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
              validatingAirlineCode: "EK",
              ProductRef: ["p50"],
              BaggageItem: [
                {
                  "@type": "BaggageItem",
                  quantity: 2,
                  BaggageFee: {
                    code: "AUD",
                    approximateInd: true,
                    value: 0,
                  },
                  Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                },
              ],
              SegmentSequenceList: [2],
              Text: ["2P"],
            },
            {
              "@type": "BaggageAllowanceDetail",
              url: "http://VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/QF",
              passengerTypeCodes: ["CHD"],
              baggageType: "FirstCheckedBag",
              validatingAirlineCode: "QF",
              ProductRef: ["p50"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "QF",
              ProductRef: ["p50"],
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
              passengerTypeCodes: ["CHD"],
              baggageType: "CarryOn",
              validatingAirlineCode: "EK",
              ProductRef: ["p50"],
              BaggageItem: [
                {
                  "@type": "BaggageItem",
                  quantity: 2,
                  BaggageFee: {
                    code: "AUD",
                    approximateInd: true,
                    value: 0,
                  },
                  Text: "UPTO15LB/7KG AND UPTO45LI/115LCM",
                },
              ],
              SegmentSequenceList: [2],
              Text: ["2P"],
            },
          ],
          ValidatingAirline: [
            {
              "@type": "ValidatingAirline",
              ValidatingAirline: "QF",
            },
          ],
          PaymentTimeLimit: "2025-01-17T23:59:00Z",
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
              PassengerTypeCodes: ["CHD"],
            },
          ],
        },
        CombinabilityCode: ["j38"],
        BestCombinablePrice: {
          "@type": "BestCombinablePriceDetail",
          CurrencyCode: {
            decimalPlace: 2,
            value: "AUD",
          },
          Base: 37008,
          TotalTaxes: 465.16,
          TotalFees: 0,
          TotalPrice: 37473.16,
          PriceBreakdown: [
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "ADT",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 9739,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 151.29,
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
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 9890.29,
              },
            },
            {
              "@type": "PriceBreakdownAir",
              quantity: 2,
              requestedPassengerType: "CHD",
              Amount: {
                "@type": "Amount",
                CurrencyCode: {
                  decimalPlace: 2,
                  value: "AUD",
                },
                Base: 8765,
                Taxes: {
                  "@type": "TaxesDetail",
                  TotalTaxes: 81.29,
                  Tax: [
                    {
                      taxCode: "WY",
                      value: 41.89,
                    },
                    {
                      taxCode: "E7",
                      value: 1.6,
                    },
                    {
                      taxCode: "G8",
                      value: 0.7,
                    },
                    {
                      taxCode: "ZR",
                      value: 2.1,
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
                Total: 8846.29,
              },
            },
          ],
        },
        fareType: {
          "@type": "ProductAir",
          totalDuration: "PT21H30M",
          id: "p50",
          Quantity: 7,
          FlightSegment: [
            {
              "@type": "FlightSegment",
              sequence: 1,
              connectionDuration: "PT4H25M",
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
              passengerQuantity: 2,
              passengerTypeCode: "ADT",
              FlightProduct: [
                {
                  "@type": "FlightProduct",
                  segmentSequence: [1, 2],
                  classOfService: "C",
                  cabin: "Business",
                  fareBasisCode: "COME",
                  fareType: "PublicFare",
                  fareTypeCode: "BOX",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b16",
                  },
                },
              ],
            },
            {
              "@type": "PassengerFlight",
              passengerQuantity: 2,
              passengerTypeCode: "CHD",
              FlightProduct: [
                {
                  "@type": "FlightProduct",
                  segmentSequence: [1, 2],
                  classOfService: "C",
                  cabin: "Business",
                  fareBasisCode: "COME",
                  fareType: "PublicFare",
                  fareTypeCode: "BOX",
                  Brand: {
                    "@type": "BrandID",
                    BrandRef: "b16",
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
