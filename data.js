const citiesData = [
  { id: 1, name: "Karachi" },
  { id: 2, name: "Lahore" },
  { id: 3, name: "Islamabad" },
  { id: 4, name: "Rawalpindi" },
  { id: 5, name: "Faisalabad" },
  { id: 6, name: "Multan" },
  { id: 7, name: "Gujranwala" },
  { id: 8, name: "Hyderabad" },
  { id: 9, name: "Peshawar" },
  { id: 10, name: "Quetta" },
  { id: 11, name: "Bahawalpur" },
  { id: 12, name: "Sargodha" },
  { id: 13, name: "Sialkot" },
  { id: 14, name: "Sukkur" },
  { id: 15, name: "Larkana" },
  { id: 16, name: "Sheikhupura" },
  { id: 17, name: "Rahim Yar Khan" },
  { id: 18, name: "Jhang" },
  { id: 19, name: "Dera Ghazi Khan" },
  { id: 20, name: "Gujrat" },
  { id: 21, name: "Sahiwal" },
  { id: 22, name: "Wah Cantonment" },
  { id: 23, name: "Mardan" },
  { id: 24, name: "Kasur" },
  { id: 25, name: "Okara" },
  { id: 26, name: "Mingora" },
  { id: 27, name: "Nawabshah" },
  { id: 28, name: "Chiniot" },
  { id: 29, name: "Kotri" },
  { id: 30, name: "Kāmoke" },
  { id: 31, name: "Hafizabad" },
  { id: 32, name: "Sadiqabad" },
  { id: 33, name: "Mirpur Khas" },
  { id: 34, name: "Burewala" },
  { id: 35, name: "Kohat" },
  { id: 36, name: "Khanewal" },
  { id: 37, name: "Murree" },
  { id: 38, name: "Swat" },
  { id: 39, name: "Skardu" },
  { id: 40, name: "Jhelum" },
  { id: 41, name: "Muzaffargarh" },
  { id: 42, name: "Naran" },
  { id: 43, name: "Hunza" },
  { id: 44, name: "Gwadar" },
  { id: 45, name: "Abbotabad" },
  { id: 46, name: "Dadu" },
  { id: 47, name: "Turbat" },
  { id: 48, name: "Khuzdar" },
  { id: 49, name: "Chitral" },
  { id: 50, name: "Loralai" },
  { id: 51, name: "Dera Ismail Khan" },
  { id: 52, name: "Bannu" },
  { id: 53, name: "Timergara" },
  { id: 54, name: "Mastung" },
  { id: 55, name: "Gakuch" },
  { id: 56, name: "Chaman" },
  { id: 57, name: "Kharan" },
  { id: 58, name: "Kalat" },
  { id: 59, name: "Khairpur" },
  { id: 60, name: "Dera Allahyar" },
  { id: 61, name: "Mehrabpur" },
  { id: 62, name: "Mianwali" },
  { id: 63, name: "Musa Khel Bazar" },
  { id: 64, name: "Naushahro Firoz" },
  { id: 65, name: "New Mirpur" },
  { id: 66, name: "Parachinar" },
  { id: 67, name: "Pishin" },
  { id: 68, name: "Qila Abdullah" },
  { id: 69, name: "Qila Saifullah" },
  { id: 70, name: "Sibi" },
  { id: 71, name: "Zhob" },
  { id: 72, name: "Attock" },
  { id: 73, name: "Badin" },
  { id: 74, name: "Bagh" },
  { id: 75, name: "Bahawalnagar" },
  { id: 76, name: "Bhimber" },
  { id: 77, name: "Chakwal" },
  { id: 78, name: "Charsadda" },
  { id: 79, name: "Dera Bugti" },
  { id: 80, name: "Dipalpur" },
  { id: 81, name: "Fateh Jang" },
  { id: 82, name: "Ghotki" },
  { id: 83, name: "Gujar Khan" },
  { id: 84, name: "Haripur" },
  { id: 85, name: "Hangu" },
  { id: 86, name: "Jacobabad" },
  { id: 87, name: "Jamshoro" },
  { id: 88, name: "Jampur" },
  { id: 89, name: "Jaranwala" },
  { id: 90, name: "Jhang Sadr" },
  { id: 91, name: "Raiwind" },
  { id: 92, name: "Kamalia" },
  { id: 93, name: "Kamra" },
  { id: 94, name: "Kandhkot" },
  { id: 95, name: "Kasur" },
  { id: 96, name: "Kharian" },
  { id: 97, name: "Khushab" },
  { id: 98, name: "Khyber" },
  { id: 99, name: "Kundian" },
  { id: 100, name: "Lakki Marwat" },
  { id: 101, name: "Leiah" },
  { id: 102, name: "Lodhran" },
  { id: 103, name: "Malakand" },
  { id: 104, name: "Mamoori" },
  { id: 105, name: "Mansehra" },
  { id: 106, name: "Mian Channun" },
  { id: 107, name: "Mianwali" },
  { id: 108, name: "Musa Khel Bazar" },
  { id: 109, name: "Nankana Sahib" },
  { id: 110, name: "Narowal" },
  { id: 111, name: "Nowshera" },
  { id: 112, name: "Nowshera Virkan" },
  { id: 113, name: "Pakpattan" },
  { id: 114, name: "Pattoki" },
  { id: 115, name: "Pindi Bhattian" },
  { id: 116, name: "Pind Dadan Khan" },
  { id: 117, name: "Pir Mahal" },
  { id: 118, name: "Qazi Ahmad" },
  { id: 119, name: "Qila Didar Singh" },
  { id: 120, name: "Rajanpur" },
];

export default citiesData;
