const serverless = require("serverless-http");
const express = require("express");
const app = express();
const axios = require("axios");
const { pool } = require("./db");

// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     message: "Hello from root!",
//   });
// });
/*
app.get("/", async (req, res, next) => {
  console.log("entered function ");
  // const acList = [
  //   "Yerragondapalem",
  //   "Darsi",
  //   "Ongole",
  //   "Kondepi",
  //   "Markapur",
  //   "Giddalur",
  //   "Kanigiri",
  //   "Kandukur",
  //   "Kavali",
  //   "Atmakur",
  //   "Kovur",
  //   "Nellore City",
  //   "Nellore Rural",
  //   "Udayagiri",
  //   "Sarvepalli",
  //   "Gudur",
  //   "Sullurpet",
  //   "Venkatagiri",
  //   "Tirupati",
  //   "Srikalahasti",
  //   "Satyavedu",
  //   "Chandragiri",
  //   "Nagari",
  //   "Gangadhara Nellore",
  //   "Chittoor",
  //   "Puthalapattu",
  //   "Palamaner",
  //   "Kuppam",
  //   "Rajampet",
  //   "Kodur",
  //   "Rayachoty",
  //   "Thamballapalle",
  //   "Pileru",
  //   "Madanpalle",
  //   "Punganur",
  // ];
  const zone2 = [
    "Tuni",
    "Prathipad",
    "Pithapuram",
    "Kakinada Rural",
    "Peddapuram",
    "Kakinada City",
    "Jaggampeta",
    "Ramachandrapuram",
    "Mummidivaram",
    "Amalapuram",
    "Razole",
    "Gannavaram (Eg)",
    "Kothapeta",
    "Mandapeta",
    "Anaparthy",
    "Rajanagaram",
    "Rajahmundry City",
    "Rajahmundry Rural",
    "Kovvur",
    "Nidadavole",
    "Gopalpuram",
    "Achanta",
    "Palacole",
    "Narasapur",
    "Bhimavaram",
    "Undi",
    "Tanuku",
    "Tadepalligudem",
    "Ungutur",
    "Dendulur",
    "Eluru",
    "Polavaram",
    "Chintalapudi",
    "Nuzvid",
    "Kaikalur",
  ];
  const zone1 = [
    "Palakonda",
    "Kurupam",
    "Parvathipuram",
    "Salur",
    "Araku Valley",
    "Paderu",
    "Rampachodavaram",
    "Ichapuram",
    "Palasa",
    "Tekkali",
    "Pathapatnam",
    "Srikakulam",
    "Amadalavalasa",
    "Narasannapeta",
    "Etcherla",
    "Rajam",
    "Bobbili",
    "Cheepurupalli",
    "Gajapathinagaram",
    "Nellimarla",
    "Vizianagaram",
    "Srungavarapukota",
    "Bhimili",
    "Visakhapatnam East",
    "Visakhapatnam South",
    "Visakhapatnam North",
    "Visakhapatnam West",
    "Gajuwaka",
    "Chodavaram",
    "Madugula",
    "Anakapalli",
    "Pendurthi",
    "Elamanchili",
    "Payakaraopeta",
    "Narsipatnam",
  ];
  const zone5 = [
    "Badvel",
    "Kadapa",
    "Pulivendla",
    "Kamalapuram",
    "Jammalamadugu",
    "Proddatur",
    "Mydukur",
    "Rayadurg",
    "Uravakonda",
    "Guntakal",
    "Tadpatri",
    "Singanamala",
    "Anantapur Urban",
    "Kalyandurg",
    "Raptadu",
    "Madakasira",
    "Hindupur",
    "Penukonda",
    "Puttaparthi",
    "Dharmavaram",
    "Kadiri",
    "Kurnool",
    "Pattikonda",
    "Kodumur",
    "Yemmiganur",
    "Mantralayam",
    "Adoni",
    "Alur",
    "Allagadda",
    "Srisailam",
    "Nandikotkur",
    "Panyam",
    "Nandyal",
    "Banaganapalle",
    "Dhone",
  ];
  const zone3 = [
    // "Gannavaram (Krishna)",
    // "Gudivada",
    // "Pedana",
    // "Machilipatnam",
    // "Avanigadda",
    // "Pamarru",
    // "Penamaluru",
    // "Tiruvuru",
    // "Vijayawada West",
    // "Vijayawada Central",
    // "Vijayawada East",
    // "Mylavaram",
    // "Nandigama",
    // "Jaggayyapet",
    // "Tadikonda",
    // "Mangalagiri",
    // "Ponnur",
    // "Tenali",
    // "Prathipadu",
    // "Guntur West",
    // "Guntur East",
    // "Peddakurapadu",
    // "Chilakaluripet",
    // "Narasaraopet",
    // "Sattenapalli",
    // "Vinukonda",
    "Gurzala",
    "Macherla",
    "Vemuru",
    "Repalle",
    "Bapatla",
    "Parchur",
    "Addanki",
    "Chirala",
    "Santhanuthalapadu",
  ];
  let result = [];
  for (const element of zone3) {
    console.log(`entered function loop${element} `);
    try {
      const ret = await axios({
        method: "post",
        headers: {
          "x-maytapi-key": "447548e6-4afb-4003-88b1-1a90d3a4cc15",
        },
        url: "https://api.maytapi.com/api/fae6487d-d2e1-4e7b-855a-69c3426fcaf0/42637/createGroup",
        data: {
          name: `${element}-బాబు తో నేను`,
          numbers: ["8520073461"],
        },
      });

      result.push(ret);
      console.log(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
    sleep(9000);
  }
  return res.send(JSON.stringify(result));
});
*/
async function createGroup(name) {
  try {
    const ret = await axios({
      method: "post",
      headers: {
        "x-maytapi-key": "447548e6-4afb-4003-88b1-1a90d3a4cc15",
      },
      url: "https://api.maytapi.com/api/fae6487d-d2e1-4e7b-855a-69c3426fcaf0/42637/createGroup",
      data: {
        name: `${name}`,
        numbers: ["8520073461"],
      },
    });

    return ret["data"];
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function insertDataDB(id, name, inviteLink, ac) {
  console.log(`id ${id}`);
  console.log(`id ${name}`);
  console.log(`id ${inviteLink}`);
  const client = await pool.connect();
  try {
    const queryREs = await Promise.all(
      [
        client.query(
          "INSERT INTO groups (groupid,groupname,invitelink) VALUES ($1,$2,$3) RETURNING *",
          [id, name, inviteLink]
        ),
        client.query(
          "UPDATE ac SET group_link=$1,group_id =$2 WHERE ac=$3 RETURNING *",
          [inviteLink, id, ac]
        ),

      ]
    );
    if (!queryREs.rows[0]) {
      return false;
    }
    console.log(queryREs.rows[0]);
    client.release();
    return true;
  } catch (err) {
    throw err;
  }
}

async function GetData(ac) {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT * FROM zonegroupaclinking WHERE ac =$1", [ac]);
    if (res.rowCount <= 0) {
      return false;
    } else {
      console.log(res.rows[0])
      return res.rows[0];
    }
  } catch (err) {
    throw err;
  }
}


app.get("/getACWhatsappLink/:ac",async(req,res,next)=>{
  try{
    const acar = [];
    const ac = req.params.ac;
    const acDat = await GetData(ac);

    const aclink = JSON.stringify(acDat);
    console.log(JSON.parse(aclink)['id']);

    console.log("entered aclink block")
    console.log(JSON.parse(aclink)['ac'])
    acar.push(JSON.parse(aclink)['group_link']);
    acar.push(JSON.parse(aclink)['ac_name']);
    return res.redirect(acar[0]);
  }catch(err){
    throw err;
  }
})
/*
app.get("/getAcLink/:AcID", async (req, res, next) => {

  try {
    const acar = [];
    const id = req.params.AcID;
    const acDat = await GetData(id);

    const aclink = JSON.stringify(acDat);
    console.log(JSON.parse(aclink)['id']);

    console.log("entered aclink block")
    console.log(JSON.parse(aclink)['group_id'])
    acar.push(JSON.parse(aclink)['group_link']);
    acar.push(JSON.parse(aclink)['group_id']);

    const result = await axios({
      method: "get",
      headers: {
        "x-maytapi-key": "447548e6-4afb-4003-88b1-1a90d3a4cc15",
      },
      url: `https://api.maytapi.com/api/fae6487d-d2e1-4e7b-855a-69c3426fcaf0/42637/getGroups/${acar != null ? acar[1] : acArray[1]}`,
    });
    const data = JSON.stringify(result["data"]);
    console.log(acar[0])
    console.log(JSON.parse(data)['success'])
    if (JSON.parse(data)["success"] === true) {

      if (JSON.parse(data)['data']['type'] == "error") {
        console.log("entered if block")
        console.log(acar[0])
        return res.redirect(acar[0]);
      } else {
        console.log("enetere heres");

        const participants = JSON.parse(data)["data"]["participants"];
        console.log(JSON.parse(data)["data"]);
        const grpLimit = participants.length;
        const grpName = JSON.parse(data)["data"]["name"];

        if (grpLimit == 5) {
          const result = await createGroup(grpName + "-1");
          if (result["success"] === true) {
            // const { id, name, inviteLink } = (result['data']);
            if (result['data']['type'] == "error") {
              console.log(result['data'])
              return res.redirect(acar[0]);
            } else {
              const id = result["data"]["id"];
              const name = result["data"]["name"];
              const invitation = result["data"]["inviteLink"];
              const save = await insertDataDB(id, name, invitation,);
              // return res.redirect(invitation);
              acar[0] = invitation;
              acar[1] = id;
              return res.redirect(acar[0]);
            }
          }
        }
        else {
          return res.redirect(acar[0]);
        }
      }
    } else {
      return res.redirect(acar[0])
    }

  } catch (err) {
    throw (err);
  }

});
*/
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

// app.get("/path", (req, res, next) => {
//   return res.redirect(301, "https://chat.whatsapp.com/E4thEQ8ASRfIXUvujsM7vy");
//   // return res.status(200).json({
//   //   message: "Hello from path!",
//   // });
// });

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


app.listen(5050, () => {
  console.log(`Example app listening on port 5050`)
})
module.exports.handler = serverless(app);
