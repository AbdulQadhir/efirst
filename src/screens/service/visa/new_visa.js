export default visa_options ={
	"title": "Service Type",
	"options": [
		"Entry Permit",
		"Change Status",
		"Visa Stamping",
		"Visa Full Pack"
	],
	"Entry Permit": {
		"title": "Visa Type",
		"options": [
			"Partner/Investor Visa",
			"Family Visa"
		],
		"Partner/Investor Visa": {
			"title": "Location",
			"options": [
				"Inside Country",
				"Outside Country"
			],
			//new visa > Entry Permit > Partnerinvestor > Inside country
			"Inside Country": {
				"docs": [
					"Trade License",
					"Immigration card",
					"Memorandum of association (MOA)",
					"Passport",
					"Photo (White background)"
				],
				"PriceDetails": [{
					"Text": "Gov. fees",
					"Value": 1175.90
				}, {
					"Text": "Service charge",
					"Value": 105
				}],
				"IBAN number": "",
				"ibanRequired": "true",
				"Notes": {
					"Text": "Notes",
					"Name": "Notes",
					"Options": [
						"This visa is for those who have a valid Dubai trade license and has a share of more than AED 72000 duly signed by all the parties and attested in Notary Public of any emirates."
					]
				},
				"OriginalDocumentRequired": {
					"Text": "Original Document Required",
					"Name": "OriginalDocumentRequired",
					"Options": [
						"Sponsor's Emirates ID"
					]
				}
			},
			//new visa > Entry Permit > Partnerinvestor > Outside country
			"Outside Country": {
				"docs": [
					"Trade License",
					"Immigration card",
					"Memorandum of association (MOA)",
					"Passport",
					"Photo (White background)"
				],
				"PriceDetails": [{
					"Text": "Gov. fees",
					"Value": 525.65
				}, {
					"Text": "Service charge",
					"Value": 105
				}],
				"IBAN number": "",
				"Notes": {
					"Text": "Notes",
					"Name": "Notes",
					"Options": [
						"This visa is for those who have a valid Dubai trade license and has a share of more than AED 72000 duly signed by all the parties and attested in Notary Public of any emirates.  "
					]
				},
				"OriginalDocumentRequired": {
					"Text": "Original Document Required",
					"Name": "OriginalDocumentRequired",
					"Options": [
						"Sponsor's Emirates ID"
					]
				}
			}
		},
		"Family Visa": {
			"title": "Who is the Sponsor?",
			"options": [
				"Partner/Investor",
				"Employee"
			],
			"Partner/Investor": {
				"title": "Whom to Sponsor?",
				"options": [
					"Husband",
					"Wife",
					"Parents",
					"Child"
				],
				//new visa > Entry Permit > family > Partnerinvestor > husband
				"Husband": {
					"title": "Select Location",
					"options": [
						"Inside Country",
						"Outside Country"
					],
					//new visa > Entry Permit > family > Partnerinvestor > husband > inside country
					"Inside Country": {
						"docs": [
							"Trade License (Including Partner page)",
							"Memorandum of association ( M O A )",
							"Sponsor’s passport",
							"Sponsor’s visa",
							"Residential Ejari ( under sponsor’s name )",
							"Last 3 months bank statement (Optional)",
							"Husband’s passport ",
							"Husband’s photo (white background)",
							"Marriage Certificate attested",
							"Marriage Certificate Legally Translated"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Sponsor File Opening",
							"Value": 320
						}, {
							"Text": "Security Deposit",
							"Value": 3060
						}, {
							"Text": "Gov. fees",
							"Value": 1139.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"ibanRequired": "true",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					//new visa > Entry Permit > family > Partnerinvestor > husband > outside country
					"Outside Country": {
						"docs": [
							"Trade License (Including Partner page)",
							"Memorandum of association ( M O A )",
							"Sponsor’s passport",
							"Sponsor’s visa",
							"Residential Ejari ( under sponsor’s name )",
							"Last 3 months bank statement (Optional)",
							"Husband’s passport ",
							"Husband’s photo (white background)",
							"Marriage Certificate attested",
							"Marriage Certificate Legally Translated"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Sponsor File Opening",
							"Value": 320
						}, {
							"Text": "Security Deposit",
							"Value": 3060
						}, {
							"Text": "Gov. fees",
							"Value": 489.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"ibanRequired": "true",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				},
				//new visa > Entry Permit > family > Partnerinvestor > wife
				"Wife": {
					"title": "Select Location",
					"options": [
						"Inside Country",
						"Outside Country"
					],
					//new visa > Entry Permit > family > Partnerinvestor > wife > inside country
					"Inside Country": {
						"docs": [
							"Trade License (Including Partner page)",
							"Memorandum of association ( M O A )",
							"Sponsor’s passport",
							"Sponsor’s visa",
							"Residential Ejari ( under sponsor’s name )",
							"Last 3 months bank statement (Optional)",
							"Wife’s passport ",
							"Wife’s photo (white background)",
							"Marriage Certificate attested",
							"Marriage Certificate Legally Translated"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Sponsor File Opening",
							"Value": 320
						}, {
							"Text": "Security Deposit",
							"Value": 3060
						}, {
							"Text": "Gov. fees",
							"Value": 1139.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"ibanRequired": "true",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					//new visa > Entry Permit > family > Partnerinvestor > wife > outside country
					"Outside Country": {
						"docs": [
							"Trade License (Including Partner page)",
							"Memorandum of association ( M O A )",
							"Sponsor’s passport",
							"Sponsor’s visa",
							"Residential Ejari ( under sponsor’s name )",
							"Last 3 months bank statement (Optional)",
							"Wife’s passport ",
							"Wife’s photo (white background)",
							"Marriage Certificate attested",
							"Marriage Certificate Legally Translated"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Sponsor File Opening",
							"Value": 320
						}, {
							"Text": "Security Deposit",
							"Value": 3060
						}, {
							"Text": "Gov. fees",
							"Value": 489.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"ibanRequired": "true",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				},
				//new visa > Entry Permit > family > Partnerinvestor > Parents
				"Parents": {
					"title": "Select Parents",
					"options": [
						"Mother",
						"Father",
						"Mother & Father"
					],
					//new visa > Entry Permit > family > Partnerinvestor > parents > mother
					"Mother": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under sponsor's name, 2 bedroom and hall)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (white background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Father's Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under sponsor's name, 2 bedroom and hall)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (white background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Father's Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					//new visa > Entry Permit > family > Partnerinvestor > parents > father
					"Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under sponsor's name, 2 bedroom and hall)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Father’s Passport",
								"Father’s Photo (white background",
								"Relationship certiﬁcate from embassy (Attested)",
								"Mother's Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under sponsor's name, 2 bedroom and hall)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Father’s Passport",
								"Father’s Photo (white background",
								"Relationship certiﬁcate from embassy (Attested)",
								"Mother's Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					//new visa > Entry Permit > family > Partnerinvestor > parents > motherfather
					"Mother & Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under sponsor's name, 2 bedroom and hall)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (White background)",
								"Father’s Passport",
								"Father’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 6120
							}, {
								"Text": "Gov. fees",
								"Value": 2279.50
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under sponsor's name, 2 bedroom and hall)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (White background)",
								"Father’s Passport",
								"Father’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 6120
							}, {
								"Text": "Gov. fees",
								"Value": 979.50
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					}
				},
				//new visa > Entry Permit > family > Partnerinvestor > parents > child
				"Child": {
					"title": "Select Child Age",
					"options": [
						"Below 18",
						"Girl Above 18",
						"Boy 18 - 21",
						"Boy Above 21"
					],
					"Below 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					"Girl Above 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"Undertaking Letter from sponsor showing that she is not married"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"Undertaking Letter from sponsor showing that she is not married"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					"Boy 18 - 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"College certiﬁcate or continuity certiﬁcate of UAE"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) who doesn’t have school or college certificate of uae and has other country college certificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"College certiﬁcate or continuity certiﬁcate of UAE"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) who doesn’t have school or college certificate of uae and has other country college certificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					"Boy Above 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"College certiﬁcate or continuity certiﬁcate of UAE"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) who doesn’t have school or college certificate of uae and has other country college certificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Birth certiﬁcate attested",
								"Child’s Passport",
								"Child’s Photo (White background)",
								"Last 3 months bank statement (Optional)",
								"College certiﬁcate or continuity certiﬁcate of UAE",
								"Birth certifcate legally translated"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"ibanRequired": "true",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) who doesn’t have school or college certificate of uae and has other country college certificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					}
				}
			},
			"Employee": {
				"title": "Whom to Sponsor?",
				"options": [
					"Husband",
					"Wife",
					"Parents",
					"Child"
				],
				//new visa > Entry Permit > family > employee > husband
				"Husband": {
					"title": "Select Location",
					"options": [
						"Inside Country",
						"Outside Country"
					],
					"Inside Country": {
						"docs": [

							"Sponsor's Passport",
							"Sponsor's Visa",
							"Residential ejari (under Sponsor's name)",
							"Labour contract",
							"Marriage certificate attested",
							"Marriage certificate legally translated",
							"Husband’s Passport",
							"Husband’s Photo (White background)",
							"Last 3 months bank statement (Optional)"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 1139.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"Outside Country": {
						"docs": [

							"Sponsor's Passport",
							"Sponsor's Visa",
							"Residential ejari (under Sponsor's name)",
							"Labour contract",
							"Marriage certificate attested",
							"Marriage certificate legally translated",
							"Husband’s Passport",
							"Husband’s Photo (White background)",
							"Last 3 months bank statement (Optional)"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 489.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				},
				//new visa > Entry Permit > family > employee > wife
				"Wife": {
					"title": "Select Location",
					"options": [
						"Inside Country",
						"Outside Country"
					],
					"Inside Country": {
						"docs": [

							"Sponsor's Passport",
							"Sponsor's Visa",
							"Residential ejari (under Sponsor's name)",
							"Labour contract",
							"Marriage certificate attested",
							"Marriage certificate legally translated",
							"Wife’s Passport",
							"Wife’s Photo (White background)",
							"Last 3 months bank statement (Optional)"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 1139.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"Outside Country": {
						"docs": [

							"Sponsor's Passport",
							"Sponsor's Visa",
							"Residential ejari (under Sponsor's name)",
							"Labour contract",
							"Marriage certificate attested",
							"Marriage certificate legally translated",
							"Wife’s Passport",
							"Wife’s Photo (White background)",
							"Last 3 months bank statement (Optional)"
						],
						"docsNotRequired": [
							"Last 3 months bank statement"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 489.75
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"IBAN number": "",
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				},
				//new visa > Entry Permit > family > employee > parents
				"Parents": {
					"title": "Select Parents",
					"options": [
						"Mother",
						"Father",
						"Mother & Father"
					],
					//new visa > Entry Permit > family > employee > parents > mother
					"Mother": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name, 2 bedroom and hall)",
								"Labour Contract",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Father's Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 5060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name, 2 bedroom and hall)",
								"Labour Contract",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Father's Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 5060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					//new visa > Entry Permit > family > employee > parents > father
					"Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name, 2 bedroom and hall)",
								"Labour Contract",
								"Last 3 months bank statement (Optional)",
								"Father’s Passport",
								"Father’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Mother's Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 5060
							}, {
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name, 2 bedroom and hall)",
								"Labour Contract",
								"Last 3 months bank statement (Optional)",
								"Father’s Passport",
								"Father’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Death certificate/ Divorce certificate",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 5060
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					//new visa > Entry Permit > family > employee > parents > motherfather
					"Mother & Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name, 2 bedroom and hall)",
								"Labour Contract",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (White background)",
								"Father’s Passport",
								"Father’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 10120
							}, {
								"Text": "Gov. fees",
								"Value": 2279.50
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name, 2 bedroom and hall)",
								"Labour Contract",
								"Last 3 months bank statement (Optional)",
								"Mother’s Passport",
								"Mother’s Photo (White background)",
								"Father’s Passport",
								"Father’s Photo (White background)",
								"Relationship certiﬁcate from embassy (Attested)",
								"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 10120
							}, {
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					}
				},
				//new visa > Entry Permit > family > employee > child
				"Child": {
					"title": "Select Child Age",
					"options": [
						"Below 18",
						"Girl Above 18",
						"Boy 18 - 21",
						"Boy Above 21"
					],
					"Below 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					"Girl Above 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"Undertaking Letter from sponsor showing that she is not married"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"Undertaking Letter from sponsor showing that she is not married"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					"Boy 18 - 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [

								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"College certiﬁcate or continuity certiﬁcate of UAE"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) who doesn’t have school or college certificate of uae and has other country college certificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"College certiﬁcate or continuity certiﬁcate of UAE"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) who doesn’t have school or college certificate of uae and has other country college certificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					"Boy Above 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"College certiﬁcate or continuity certiﬁcate of uae"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 1139.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) who doesn’t have school or college certificate of uae and has other country college certificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Outside Country": {
							"docs": [
								"Sponsor's Passport",
								"Sponsor's Visa",
								"Residential ejari (under Sponsor's name)",
								"Labour contract",
								"Last 3 months bank statement (Optional)",
								"Child’s Passport",
								"Birth certiﬁcate attested",
								"Birth certifcate legally translated",
								"Child’s Photo (White background)",
								"College certiﬁcate or continuity certiﬁcate of UAE"
							],
							"docsNotRequired": [
								"Last 3 months bank statement"
							],
							"PriceDetails": [{
								"Text": "Gov. fees",
								"Value": 489.75
							}, {
								"Text": "Service charge",
								"Value": 105
							}],
							"IBAN number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									"For those students ( boys above 18 ) whodoesn’t have school or college certificate of uae and has other country collegecertificate will have an extra deposit of AED 5060."
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					}
				}
			}
		}
	},
	"Change Status": {
		"title": "Visa Type",
		"options": [
			"Partner/Investor Visa",
			"Family Visa"
		],
		//new visa > Change Status > Partnerinvestor
		"Partner/Investor Visa": {
			"docs": [
				"New Visa",
				"Old visa/Visit visa",
				"Immigration Card",
				"Trade License",
				"Passport "
			],
			"PriceDetails": [{
				"Text": "Gov. fees",
				"Value": 675.65
			}, {
				"Text": "Service charge",
				"Value": 105
			}],
			"Notes": {
				"Text": "Notes",
				"Name": "Notes",
				"Options": [
					"This process is done for those who have taken the inside country visa. To take the inside country visa, either the person has to have an visit visa or might be under the cancellation period. Fine payment for change status: If a person exceeds the final day of change status, fine payment will be as follows If under visit visa, a person gets 90days time to do the change status. If not the very next day onwards the fine will be 100 aed for one day and goes on. If a person is under cancelled visa and exceeds the last day of change status, fine starts from aed 25 for 180 days. If  not the next 180 days will be of 50 days fine and then the fine increases to 100 aed per day. The service charge will be 105 in addition to the fine."
				]
			},
			"OriginalDocumentRequired": {
				"Text": "Original Document Required",
				"Name": "OriginalDocumentRequired",
				"Options": [
					"Sponsor's Emirates ID"
				]
			}
		},
		//new visa > Change Status > family
		"Family Visa": {
			"docs": [
				"New Visa",
				"Old visa/Visit visa",
				"Sponsored Passport",
				"Sponsor’s Passport",
				"Sponsor’s Visa"
			],
			"PriceDetails": [{
				"Text": "Gov. fees",
				"Value": 638.65
			}, {
				"Text": "Service charge",
				"Value": 105
			}],
			"Notes": {
				"Text": "Notes",
				"Name": "Notes",
				"Options": [
					" This process is done for those who have  taken the inside country visa. To take the inside country visa, either the  person has to have an visit visa or might be under the cancellation period.        Fine payment for change status:         If  a person exceeds the final day of change status, fine payment will be as  follows        If under visit visa, a person gets 90days  time to do the change status. If not the very next day onwards the fine will be  100 aed for one day and goes on.        If a person is under cancelled visa and  exceeds the last day of change status, fine starts from aed 25 for 180 days. If  not the next 180 days will be of 50 days fine and then the fine increases to  100 aed per day.      The service charge will be 105 in  addition to the fine.     "
				]
			},
			"OriginalDocumentRequired": {
				"Text": "Original Document Required",
				"Name": "OriginalDocumentRequired",
				"Options": [
					"Sponsor's Emirates ID"
				]
			}
		}
	},
	"Visa Stamping": {
		"title": "Visa Type",
		"options": [
			"Partner/Investor Visa",
			"Family Visa",
			"New Born"
		],
		//new visa > Visa Stamping > partnerinvestor
		"Partner/Investor Visa": {
			"title": "Stamping Speed",
			"options": [
				"Normal",
				"Urgent"
			],
			"Normal": {
				"docs": [
					"Trade License (Including Partner page)",
					"Medical result",
					"Emirates ID application",
					"Insurance",
					"Visa page",
					"Immigration card"
				],
				"PriceDetails": [{
					"Text": "Gov. fees",
					"Value": 609.90
				}, {
					"Text": "Service charge",
					"Value": 105
				}],
				"IBAN number": "",
				"Notes": {
					"Text": "Notes",
					"Name": "Notes",
					"Options": [
						"This is the ﬁnal stage of visa process. In this the application will have to be posted and then after the approval the original passport has to be submitted to the immigration with the application paper to get the visa stamping on the passport."
					]
				},
				"OriginalDocumentRequired": {
					"Text": "Original Document Required",
					"Name": "OriginalDocumentRequired",
					"Options": [
						"Sponsor's Emirates, ID Sponsored Passport"
					]
				}
			},
			"Urgent": {
				"docs": [
					"Trade License (Including Partner page)",
					"Medical result",
					"Emirates ID application",
					"Insurance",
					"Visa page",
					"Immigration card"
				],
				"PriceDetails": [{
					"Text": "Gov. fees",
					"Value": 689.90
				}, {
					"Text": "Service charge",
					"Value": 105
				}],
				"IBAN number": "",
				"Notes": {
					"Text": "Notes",
					"Name": "Notes",
					"Options": [
						"This is the ﬁnal stage of visa process. In this the application will have to be posted and then after the approval the original passport has to be submitted to the immigration with the application paper to get the visa stamping on the passport."
					]
				},
				"OriginalDocumentRequired": {
					"Text": "Original Document Required",
					"Name": "OriginalDocumentRequired",
					"Options": [
						"Sponsor's Emirates, ID Sponsored Passport"
					]
				}
			}
		},
		//new visa > Visa Stamping > family
		"Family Visa": {
			"title": "Who is the Sponsor?",
			"options": [
				"Partner/Investor",
				"Employee"
			],
			//new visa > Visa Stamping > family > partnerinvestor
			"Partner/Investor": {
				"title": "Stamping Speed",
				"options": [
					"Normal",
					"Urgent"
				],
				"Normal": {
					"docs": [
						"Medical result",
						"Emirates ID application",
						"Insurance",
						"Visa page",
						"Immigration card",
						"Sponsor's visa"
					],
					"PriceDetails": [{
						"Text": "Gov. fees (3 yrs visa)",
						"Value": 671.75
					}, {
						"Text": "Service charge",
						"Value": 105
					}],
					"Notes": {
						"Text": "Notes",
						"Name": "Notes",
						"Options": [
							"This is the ﬁnal stage of visa process. In this the application will have to be posted and then after the approval the original passport has to be submitted to the immigration with the application paper to get the visa stamping on the passport."
						]
					},
					"OriginalDocumentRequired": {
						"Text": "Original Document Required",
						"Name": "OriginalDocumentRequired",
						"Options": [
							"Sponsor's Emirates ID, Sponsored Passport"
						]
					}
				},
				"Urgent": {
					"docs": [
						"Medical result",
						"Emirates ID application",
						"Insurance",
						"Visa page",
						"Immigration card",
						"Sponsor's visa"
					],
					"PriceDetails": [{
						"Text": "Gov. fees (3 yrs visa)",
						"Value": 751.75
					}, {
						"Text": "Service charge",
						"Value": 105
					}],
					"Notes": {
						"Text": "Notes",
						"Name": "Notes",
						"Options": [
							"This is the ﬁnal stage of visa process. In this the application will have to be posted and then after the approval the original passport has to be submitted to the immigration with the application paper to get the visa stamping on the passport."
						]
					},
					"OriginalDocumentRequired": {
						"Text": "Original Document Required",
						"Name": "OriginalDocumentRequired",
						"Options": [
							"Sponsor's Emirates ID, Sponsored Passport"
						]
					}
				}
			},
			//new visa > Visa Stamping > family > employee
			"Employee": {
				"title": "Visa Duration",
				"options": [
					"3 Years",
					"2 Years"
				],
				"3 Years": {
					"title": "Stamping Speed",
					"options": [
						"Normal",
						"Urgent"
					],
					"Normal": {
						"docs": [
							"Medical result",
							"Emirates ID application",
							"Insurance",
							"Visa page",
							"Immigration card",
							"Sponsor's visa"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 544.05
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Fine payment for all the stamping procedure will be 25 AED for the ﬁrst 180 days. The next 180 days will be of 50 AED and then 100 AED each day. Fine for stamping comes only when the stamping application is not posted till the sixtieth day of the change status or the date of entry."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Sponsored Passport"
							]
						}
					},
					"Urgent": {
						"docs": [
							"Medical result",
							"Emirates ID application",
							"Insurance",
							"Visa page",
							"Immigration card",
							"Sponsor's visa"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 624.05
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Fine payment for all the stamping procedure will be 25 AED for the ﬁrst 180 days. The next 180 days will be of 50 AED and then 100 AED each day. Fine for stamping comes only when the stamping application is not posted till the sixtieth day of the change status or the date of entry."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Sponsored Passport"
							]
						}
					}
				},
				"2 Years": {
					"title": "Stamping Speed",
					"options": [
						"Normal",
						"Urgent"
					],
					"Normal": {
						"docs": [
							"Medical result",
							"Emirates ID application",
							"Insurance",
							"Visa page",
							"Immigration card",
							"Sponsor's visa"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 459.90
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Fine payment for all the stamping procedure will be 25 AED for the ﬁrst 180 days. The next 180 days will be of 50 AED and then 100 AED each day. Fine for stamping comes only when the stamping application is not posted till the sixtieth day of the change status or the date of entry."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Sponsored Passport"
							]
						}
					},
					"Urgent": {
						"docs": [
							"Medical result",
							"Emirates ID application",
							"Insurance",
							"Visa page",
							"Immigration card",
							"Sponsor's visa"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 539.90
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Fine payment for all the stamping procedure will be 25 AED for the ﬁrst 180 days. The next 180 days will be of 50 AED and then 100 AED each day. Fine for stamping comes only when the stamping application is not posted till the sixtieth day of the change status or the date of entry."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Sponsored Passport"
							]
						}
					}
				}
			}
		},
		//new visa > Visa Stamping > new born
		"New Born": {
			"title": "Who is the Sponsor?",
			"options": [
				"Partner/Investor",
				"Employee"
			],
			"Partner/Investor": {
				"title": "Stamping Speed",
				"options": [
					"Normal",
					"Urgent"
				],
				"Normal": {
					"docs": [
						"Child’s passport",
						"Child’s photo (White Background)",
						"Emirates ID application",
						"Insurance",
						"Birth certificate attested",
						"Birth certificate translated",
						"Trade License",
						"Memorandum of Association (MOA)",
						"Sponsor's passport",
						"Sponsor's visa",
						"Residential Ejari under sponsor’s name"
					],
					"PriceDetails": [{
						"Text": "Security Deposit",
						"Value": 3060
					}, {
						"Text": "Gov. fees",
						"Value": 671.75
					}, {
						"Text": "Stamping",
						"Value": 609.90
					}, {
						"Text": "Insurance",
						"Value": 695.10
					}, {
						"Text": "Service charge",
						"Value": 105
					}],
					"Notes": {
						"Text": "Notes",
						"Name": "Notes",
						"Options": [
							"Kids passport has to be made within 60 days of birth.  New born visa has to be stamped within 120 days or else ﬁne will be imposed for each day."
						]
					},
					"OriginalDocumentRequired": {
						"Text": "Original Document Required",
						"Name": "OriginalDocumentRequired",
						"Options": [
							"Sponsor's Emirates ID, Child Passport, Sponsored Passport"
						]
					}
				},
				"Urgent": {
					"docs": [
						"Child’s passport",
						"Child’s photo (White Background)",
						"Emirates ID application",
						"Insurance",
						"Birth certificate attested",
						"Birth certificate translated",
						"Trade License",
						"Memorandum of Association (MOA)",
						"Sponsor's passport",
						"Sponsor's visa",
						"Residential Ejari under sponsor’s name"
					],
					"PriceDetails": [{
						"Text": "Security Deposit",
						"Value": 3060
					}, {
						"Text": "Gov. fees",
						"Value": 751.75
					}, {
						"Text": "Stamping",
						"Value": 689.90
					}, {
						"Text": "Insurance",
						"Value": 695.10
					}, {
						"Text": "Service charge",
						"Value": 105
					}],
					"Notes": {
						"Text": "Notes",
						"Name": "Notes",
						"Options": [
							"Kids passport has to be made within 60 days of birth.  New born visa has to be stamped within 120 days or else ﬁne will be imposed for each day."
						]
					},
					"OriginalDocumentRequired": {
						"Text": "Original Document Required",
						"Name": "OriginalDocumentRequired",
						"Options": [
							"Sponsor's Emirates ID, Child Passport, Sponsored Passport"
						]
					}
				}
			},
			"Employee": {
				"title": "Visa Duration",
				"options": [
					"2 years",
					"3 years"
				],
				"2 years": {
					"title": "Stamping Speed",
					"options": [
						"Normal",
						"Urgent"
					],
					"Normal": {
						"docs": [
							"Child passport",
							"Child’s photo (white background)",
							"Emirates ID application",
							"Insurance",
							"Birth certificate attested",
							"Birth certificate translated",
							"Labour contract",
							"Child's passport",
							"Child's visa",
							"Residential Ejari under sponsor’s name"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 460
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Kids passport has to be made within 60 days of birth.  New born visa has to be stamped within 120 days or else ﬁne will be imposed for each day."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Child Passport, Sponsored Passport"
							]
						}
					},
					"Urgent": {
						"docs": [
							"Child passport",
							"Child’s photo (white background)",
							"Emirates ID application",
							"Insurance",
							"Birth certificate attested",
							"Birth certificate translated",
							"Labour Contract",
							"Child's passport",
							"Child's visa",
							"Residential Ejari under sponsor’s name"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 540
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Kids passport has to be made within 60 days of birth.  New born visa has to be stamped within 120 days or else ﬁne will be imposed for each day."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Child Passport, Sponsored Passport"
							]
						}
					}
				},
				"3 years": {
					"title": "Stamping Speed",
					"options": [
						"Normal",
						"Urgent"
					],
					"Normal": {
						"docs": [
							"Child passport",
							"Child’s photo (white background)",
							"Emirates ID application",
							"Insurance",
							"Birth certificate attested",
							"Birth certificate translated",
							"Labour contract",
							"Child's passport",
							"Child's visa",
							"Residential Ejari under sponsor’s name"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 460
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Kids passport has to be made within 60 days of birth.  New born visa has to be stamped within 120 days or else ﬁne will be imposed for each day."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Child Passport, Sponsored Passport"
							]
						}
					},
					"Urgent": {
						"docs": [
							"Child passport",
							"Child’s photo (white background)",
							"Emirates ID application",
							"Insurance",
							"Birth certificate attested",
							"Birth certificate translated",
							"Labour Contract",
							"Child’s passport",
							"Child’s visa",
							"Residential Ejari under sponsor’s name"
						],
						"PriceDetails": [{
							"Text": "Gov. fees",
							"Value": 540
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								"Kids passport has to be made within 60 days of birth.  New born visa has to be stamped within 120 days or else ﬁne will be imposed for each day."
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID, Child Passport, Sponsored Passport"
							]
						}
					}
				}
			}
		}
	},
	"Visa Full Pack": {
		"title": "Visa Type",
		"options": [
			"Partner/Investor Visa",
			"Family Visa"
		],
		//new visa > Visa Full Pack > Partnerinvestor
		"Partner/Investor Visa": {
			"title": "Select Location",
			"options": [
				"Inside Country",
				"Outside Country"
			],
			"Inside Country": {
				"title": "Visa Stamping Speed",
				"options": [
					"Normal",
					"Urgent"
				],
				"Normal": {
					"title": "Medical Certificate Process Speed",
					"options": [
						"Normal",
						"48 Hours",
						"24  Hours",
						"5 Hours",
						"2 Hours"
					],
					"Normal": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges",
							"Value": 320
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"48 Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Passport",
							"Photo (White background)",
							"Memmorandum of association (MOA)"
						],
						"PriceDetails": [{
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Entry Permit",
							"Value": 1175.65
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges",
							"Value": 430
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"24  Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges",
							"Value": 530
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"5 Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charge - VIP",
							"Value": 750
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price (3 yrs)",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"2 Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charge - VVIP",
							"Value": 1070
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price (3 yrs)",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				},
				"Urgent": {
					"title": "Medical Certificate Process Speed",
					"options": [
						"Normal",
						"48 Hours",
						"24  Hours",
						"5 Hours",
						"2 Hours"
					],
					"Normal": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges",
							"Value": 320
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}, {
							"Text": "Service charge",
							"Value": 105
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"48 Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Passport",
							"Photo (White background)",
							"Memmorandum of association (MOA)"
						],
						"PriceDetails": [{
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Entry Permit",
							"Value": 1175.65
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges",
							"Value": 430
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"24  Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges",
							"Value": 530
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"5 Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charge - VIP",
							"Value": 750
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price (3 yrs)",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"2 Hours": {
						"docs": [
							"Old Visa/Visit Visa",
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 1175.90
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Change Status",
							"Value": 675.65
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charge - VVIP",
							"Value": 1070
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price (3 yrs)",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				}
			},
			"Outside Country": {
				"title": "Visa Stamping Speed",
				"options": [
					"Normal",
					"Urgent"
				],
				"Normal": {
					"title": "Medical Certificate Process Speed",
					"options": [
						"Normal",
						"48 Hours",
						"24  Hours",
						"5 Hours",
						"2 Hours"
					],
					"Normal": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges",
							"Value": 320
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"48 Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges",
							"Value": 430
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"24  Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges",
							"Value": 530
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"5 Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges - VIP",
							"Value": 750
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"2 Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 846.65
						}, {
							"Text": "Medical Charges - VVIP",
							"Value": 1070
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				},
				"Urgent": {
					"title": "Medical Certificate Process Speed",
					"options": [
						"Normal",
						"48 Hours",
						"24  Hours",
						"5 Hours",
						"2 Hours"
					],
					"Normal": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges",
							"Value": 320
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"48 Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges",
							"Value": 430
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"24  Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges",
							"Value": 530
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"5 Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges - VIP",
							"Value": 750
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					},
					"2 Hours": {
						"docs": [
							"Trade License (Including Partner page)",
							"Immigration card",
							"Memorandum of association (MOA)",
							"Passport",
							"Photo (White background)"
						],
						"PriceDetails": [{
							"Text": "Entry Permit",
							"Value": 525.65
						}, {
							"Text": "Service Charge",
							"Value": 105
						}, {
							"Text": "Stamping",
							"Value": 925.65
						}, {
							"Text": "Medical Charges - VVIP",
							"Value": 1070
						}, {
							"Text": "Insurance (Basic)",
							"Value": 788.85
						}, {
							"Text": "Emirates ID Price - 3 years",
							"Value": 370
						}],
						"Notes": {
							"Text": "Notes",
							"Name": "Notes",
							"Options": [
								""
							]
						},
						"OriginalDocumentRequired": {
							"Text": "Original Document Required",
							"Name": "OriginalDocumentRequired",
							"Options": [
								"Sponsor's Emirates ID"
							]
						}
					}
				}
			}
		},
		//new visa > Visa Full Pack > Family
		"Family Visa": {
			"title": "Who is the Sponsor?",
			"options": [
				"Partner/Investor",
				"Employee"
			],
			//new visa > Visa Full Pack > Family > partnerinvestor
			"Partner/Investor": {
				"title": "Whom to Sponsor?",
				"options": [
					"Husband",
					"Wife",
					"Parents",
					"Child"
				],
				//new visa > Visa Full Pack > Family > partnerinvestor > Husband
				"Husband": {
					"title" : "_Duration",
					"options": [
						"2 Years",
						"3 years"
					],
					"2 Years" : {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					},
					"3 Years" : {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Marriage certificate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					}
				} ,
				//new visa > Visa Full Pack > Family > partnerinvestor > Wife
				"Wife": {
					"title" : "_Duration",
					"options": [
						"2 Years",
						"3 years"
					],
					"2 Years" : {
						"title": "Select Age",
						"options": [
							"Below 45",
							"Above 45"
						],
						"Below 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						},
						"Above 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24 Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						}
					},
					"3 Years" : {
						"title": "Select Age",
						"options": [
							"Below 45",
							"Above 45"
						],
						"Below 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor’s visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						},
						"Above 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24 Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Marriage certificate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						}
					}
				} ,
				//new visa > Visa Full Pack > Family > partnerinvestor > Parents
				"Parents": {
					"title": "Select Parents",
					"options": [
						"Mother",
						"Father",
						"Mother & Father"
					],
					"Mother": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					},
					"Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the father"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 174
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					},
					"Mother & Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1277.30
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24 Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 719.80
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24 Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under sponsors name, 2 bedroom and hall) ",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 6120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 879.80
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service Charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					}
				},
				//new visa > Visa Full Pack > Family > partnerinvestor > Child
				"Child": {
					"title": "Select Child Age",
					"options": [
						"Below 18",
						"Girl Above 18",
						"Boy 18 - 21",
						"Boy Above 21"
					],
					"Below 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
					"title" : "_Duration",
					"options": [
						"2 Years",
						"3 years"
					],
					"2 Years" : {
						"title": "Visa Stamping Speed",
						"options": [
							"Normal",
							"Urgent"
						],
						"Normal": {
							"docs": [
								"Sponsor's passport",
								"Sponsor's visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Birth certiﬁcate attested",
								"Birth certiﬁcate legally translated",
								"Child’s passport",
								"Child’s Photo (White background)",
								"Last 3 months bank statement (Optional)"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Entry Permit",
								"Value": 1139.75
							}, {
								"Text": "Change Status",
								"Value": 638.65
							}, {
								"Text": "Stamping",
								"Value": 609.90
							}, {
								"Text": "Insurance",
								"Value": 695.10
							}, {
								"Text": "Emirates ID Price - 3 years",
								"Value": 370
							}, {
								"Text": "Service Charge",
								"Value": 105
							}],
							"IBAN Number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Urgent": {
							"docs": [
								"Sponsor's passport",
								"Sponsor's visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Birth certiﬁcate attested",
								"Birth certiﬁcate legally translated",
								"Child’s passport",
								"Child’s Photo (White background)",
								"Last 3 months bank statement (Optional)"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Entry Permit",
								"Value": 1139.75
							}, {
								"Text": "Change Status",
								"Value": 638.65
							}, {
								"Text": "Stamping",
								"Value": 689.90
							}, {
								"Text": "Insurance",
								"Value": 695.10
							}, {
								"Text": "Emirates ID Price - 3 years",
								"Value": 370
							}, {
								"Text": "Service Charge",
								"Value": 105
							}],
							"IBAN Number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					},
					"3 Years" : {
						"title": "Visa Stamping Speed",
						"options": [
							"Normal",
							"Urgent"
						],
						"Normal": {
							"docs": [
								"Sponsor's passport",
								"Sponsor's visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Birth certiﬁcate attested",
								"Birth certiﬁcate legally translated",
								"Child’s passport",
								"Child’s Photo (White background)",
								"Last 3 months bank statement (Optional)"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Entry Permit",
								"Value": 1139.75
							}, {
								"Text": "Change Status",
								"Value": 638.65
							}, {
								"Text": "Stamping",
								"Value": 609.90
							}, {
								"Text": "Insurance",
								"Value": 695.10
							}, {
								"Text": "Emirates ID Price - 3 years",
								"Value": 370
							}, {
								"Text": "Service Charge",
								"Value": 105
							}],
							"IBAN Number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						},
						"Urgent": {
							"docs": [
								"Sponsor's passport",
								"Sponsor's visa",
								"Residential ejari (under Sponsor's name)",
								"Memorandum of association (MOA)",
								"Trade License (Including Partner page)",
								"Birth certiﬁcate attested",
								"Birth certiﬁcate legally translated",
								"Child’s passport",
								"Child’s Photo (White background)",
								"Last 3 months bank statement (Optional)"
							],
							"PriceDetails": [{
								"Text": "Security Deposit",
								"Value": 3060
							}, {
								"Text": "Entry Permit",
								"Value": 1139.75
							}, {
								"Text": "Change Status",
								"Value": 638.65
							}, {
								"Text": "Stamping",
								"Value": 689.90
							}, {
								"Text": "Insurance",
								"Value": 695.10
							}, {
								"Text": "Emirates ID Price - 3 years",
								"Value": 370
							}, {
								"Text": "Service Charge",
								"Value": 105
							}],
							"IBAN Number": "",
							"Notes": {
								"Text": "Notes",
								"Name": "Notes",
								"Options": [
									""
								]
							},
							"OriginalDocumentRequired": {
								"Text": "Original Document Required",
								"Name": "OriginalDocumentRequired",
								"Options": [
									"Sponsor's Emirates ID"
								]
							}
						}
					}
				} ,
						"Outside Country": {
							"title" : "_Duration",
							"options": [
								"2 Years",
								"3 years"
							],
							"2 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"Urgent": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"3 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 609.90
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"Urgent": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 689.90
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						} 
					},
					"Girl Above 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title" : "_Duration",
							"options": [
								"2 Years",
								"3 years"
							],
							"2 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"3 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 638.65
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						} ,
						"Outside Country": {
							"title" : "_Duration",
							"options": [
								"2 Years",
								"3 years"
							],
							"2 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 424
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 424
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"3 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 424
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 609.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 424
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Memorandum of association (MOA)",
											"Trade License (Including Partner page)",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Security Deposit",
											"Value": 3060
										}, {
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 689.90
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						} 
					},
					"Boy 18 - 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					},
					"Boy Above 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 638.65
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 359.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Memorandum of association (MOA)",
										"Trade License (Including Partner page)",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of UAE"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 3060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 439.90
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 1 year",
										"Value": 170
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					}
				}
			},
			//new visa > Visa Full Pack > Family > employee
			"Employee": {
				"title": "Whom to Sponsor?",
				"options": [
					"Husband",
					"Wife",
					"Parents",
					"Child"
				],
				//new visa > Visa Full Pack > Family > employee > husband
				"Husband": {
					"title" : "_Duration",
					"options": [
						"2 Years",
						"3 years"
					],
					"2 Years" : {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 424
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 424
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					},
					"3 Years" : {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 424
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 424
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Marriage certiﬁcate attested",
										"Marriage certificate legally translated",
										"Husband’s passport",
										"Husband’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					}
				} ,
				//new visa > Visa Full Pack > Family > employee > wife
				"Wife": {
					"title" : "_Duration",
					"options": [
						"2 Years",
						"3 years"
					],
					"2 Years" : {
						"title": "Select Age",
						"options": [
							"Below 45",
							"Above 45"
						],
						"Below 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [

											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [

											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						},
						"Above 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						}
					},
					"3 Years" : {
						"title": "Select Age",
						"options": [
							"Below 45",
							"Above 45"
						],
						"Below 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [

											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [

											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 740
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 1771.35
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						},
						"Above 45": {
							"title": "Select Location",
							"options": [
								"Inside Country",
								"Outside Country"
							],
							"Inside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"Outside Country": {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour Contract",
											"Marriage certiﬁcate attested",
											"Marriage certificate legally translated",
											"Wife’s passport",
											"Wife’s Photo (White background)",
											"Last 3 months bank statement (Optional)"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						}
					}
				} ,
				//new visa > Visa Full Pack > Family > employee > parents
				"Parents": {
					"title": "Select Parents",
					"options": [
						"Mother",
						"Father",
						"Mother & Father"
					],
					"Mother": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Trade License",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Father’s Death certificate/ Divorce certificate",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Mother"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 5060
									}, {
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					},
					"Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Medical Certificate Process Speed",
							"options": [
								"Normal",
								"48 Hours",
								"24  Hours",
								"5 Hours",
								"2 Hours"
							],
							"Normal": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 1139.75
								}, {
									"Text": "Change Status",
									"Value": 640
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges",
									"Value": 320
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"48 Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 1139.75
								}, {
									"Text": "Change Status",
									"Value": 640
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges",
									"Value": 430
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"24  Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 1139.75
								}, {
									"Text": "Change Status",
									"Value": 640
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges",
									"Value": 530
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"5 Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 1139.75
								}, {
									"Text": "Change Status",
									"Value": 640
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges - VIP",
									"Value": 750
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"2 Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 1139.75
								}, {
									"Text": "Change Status",
									"Value": 640
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges - VVIP",
									"Value": 1070
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							}
						},
						"Outside Country": {
							"title": "Medical Certificate Process Speed",
							"options": [
								"Normal",
								"48 Hours",
								"24  Hours",
								"5 Hours",
								"2 Hours"
							],
							"Normal": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 489.75
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges",
									"Value": 320
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"48 Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 489.75
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges",
									"Value": 430
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"24  Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 489.75
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges",
									"Value": 530
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"5 Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 489.75
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges - VIP",
									"Value": 750
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							},
							"2 Hours": {
								"docs": [
									"Sponsor's passport",
									"Sponsor's visa",
									"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
									"Trade License",
									"Relationship certiﬁcate from embassy (Attested)",
									"Father’s passport",
									"Father’s Photo (White background)",
									"Last 3 months bank statement (Optional)",
									"Father’s Death certificate/ Divorce certificate",
									"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the Father"
								],
								"PriceDetails": [{
									"Text": "Security Deposit",
									"Value": 5060
								}, {
									"Text": "Entry Permit",
									"Value": 489.75
								}, {
									"Text": "Stamping",
									"Value": 460
								}, {
									"Text": "Medical Charges - VVIP",
									"Value": 1070
								}, {
									"Text": "Insurance",
									"Value": 695.10
								}, {
									"Text": "Emirates ID Price - 3 years",
									"Value": 370
								}, {
									"Text": "Service charge",
									"Value": 105
								}],
								"IBAN Number": "",
								"Notes": {
									"Text": "Notes",
									"Name": "Notes",
									"Options": [
										""
									]
								},
								"OriginalDocumentRequired": {
									"Text": "Original Document Required",
									"Name": "OriginalDocumentRequired",
									"Options": [
										"Sponsor's Emirates ID"
									]
								}
							}
						}
					},
					"Mother & Father": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 2279.50
									}, {
										"Text": "Change Status",
										"Value": 1280
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 640
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 860
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges",
										"Value": 1060
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 1500
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential Ejari ( under sponsors name, 2 bedroom and hall )",
										"Labor Contract",
										"Relationship certiﬁcate from embassy (Attested)",
										"Mother’s passport",
										"Mother’s Photo (White background)",
										"Father’s passport",
										"Father’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"Aﬃdavit from the embassy to prove that other siblings are not capable to look after the parents"
									],
									"PriceDetails": [{
										"Text": "Security Deposit",
										"Value": 10120
									}, {
										"Text": "Entry Permit",
										"Value": 979.50
									}, {
										"Text": "Stamping",
										"Value": 920
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 2140
									}, {
										"Text": "Insurance",
										"Value": 1390.20
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 740
									}, {
										"Text": "Service charge",
										"Value": 210
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					}
				},
				//new visa > Visa Full Pack > Family > employee > child
				"Child": {
					"title": "Select Child Age",
					"options": [
						"Below 18",
						"Girl Above 18",
						"Boy 18 - 21",
						"Boy Above 21"
					],
					"Below 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title" : "_Duration",
							"options": [
								"2 Years",
								"3 years"
							],
							"2 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"d.	Birth Certificate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"Urgent": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"3 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"d.	Birth Certificate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"Urgent": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						} ,
						"Outside Country": {
							"title" : "_Duration",
							"options": [
								"2 Years",
								"3 years"
							],
							"2 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"Urgent": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"3 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"Urgent": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour Contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						} 
					},
					"Girl Above 18": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title" : "_Duration",
							"options": [
								"2 Years",
								"3 years"
							],
							"2 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"3 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 1139.75
										}, {
											"Text": "Change Status",
											"Value": 640
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						} ,
						"Outside Country": {
							"title" : "_Duration",
							"options": [
								"2 Years",
								"3 years"
							],
							"2 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							},
							"3 Years" : {
								"title": "Visa Stamping Speed",
								"options": [
									"Normal",
									"Urgent"
								],
								"Normal": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								},
								"Urgent": {
									"title": "Medical Certificate Process Speed",
									"options": [
										"Normal",
										"48 Hours",
										"24  Hours",
										"5 Hours",
										"2 Hours"
									],
									"Normal": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 320
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"48 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 430
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"24  Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges",
											"Value": 530
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"5 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VIP",
											"Value": 750
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									},
									"2 Hours": {
										"docs": [
											"Sponsor's passport",
											"Sponsor's visa",
											"Residential ejari (under Sponsor's name)",
											"Labour contract",
											"Birth certiﬁcate attested",
											"Birth certiﬁcate legally translated",
											"Child’s passport",
											"Child’s Photo (White background)",
											"Last 3 months bank statement (Optional)",
											"Undertaking Letter from sponsor showing that she is not married"
										],
										"PriceDetails": [{
											"Text": "Entry Permit",
											"Value": 489.75
										}, {
											"Text": "Stamping",
											"Value": 460
										}, {
											"Text": "Medical Charges - VVIP",
											"Value": 1070
										}, {
											"Text": "Insurance",
											"Value": 695.10
										}, {
											"Text": "Emirates ID Price - 3 years",
											"Value": 370
										}, {
											"Text": "Service Charge",
											"Value": 105
										}],
										"IBAN Number": "",
										"Notes": {
											"Text": "Notes",
											"Name": "Notes",
											"Options": [
												""
											]
										},
										"OriginalDocumentRequired": {
											"Text": "Original Document Required",
											"Name": "OriginalDocumentRequired",
											"Options": [
												"Sponsor's Emirates ID"
											]
										}
									}
								}
							}
						} 
					},
					"Boy 18 - 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					},
					"Boy Above 21": {
						"title": "Select Location",
						"options": [
							"Inside Country",
							"Outside Country"
						],
						"Inside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor's visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 1139.75
									}, {
										"Text": "Change Status",
										"Value": 640
									}, {
										"Text": "Stamping",
										"Value": 460
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						},
						"Outside Country": {
							"title": "Visa Stamping Speed",
							"options": [
								"Normal",
								"Urgent"
							],
							"Normal": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							},
							"Urgent": {
								"title": "Medical Certificate Process Speed",
								"options": [
									"Normal",
									"48 Hours",
									"24  Hours",
									"5 Hours",
									"2 Hours"
								],
								"Normal": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges",
										"Value": 320
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"48 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges",
										"Value": 430
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"24  Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges",
										"Value": 530
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"5 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges - VIP",
										"Value": 750
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								},
								"2 Hours": {
									"docs": [
										"Sponsor's passport",
										"Sponsor visa",
										"Residential ejari (under Sponsor's name)",
										"Labour contract",
										"Birth certiﬁcate attested",
										"Birth certiﬁcate legally translated",
										"Child’s passport",
										"Child’s Photo (White background)",
										"Last 3 months bank statement (Optional)",
										"College certiﬁcate or continuity certiﬁcate of uae"
									],
									"PriceDetails": [{
										"Text": "Entry Permit",
										"Value": 489.75
									}, {
										"Text": "Stamping",
										"Value": 640
									}, {
										"Text": "Medical Charges - VVIP",
										"Value": 1070
									}, {
										"Text": "Insurance",
										"Value": 695.10
									}, {
										"Text": "Emirates ID Price - 3 years",
										"Value": 370
									}, {
										"Text": "Service Charge",
										"Value": 105
									}],
									"IBAN Number": "",
									"Notes": {
										"Text": "Notes",
										"Name": "Notes",
										"Options": [
											""
										]
									},
									"OriginalDocumentRequired": {
										"Text": "Original Document Required",
										"Name": "OriginalDocumentRequired",
										"Options": [
											"Sponsor's Emirates ID"
										]
									}
								}
							}
						}
					}
				}
			}
		}
	}
};