const express = require("express");
const {products1, products2, products3,
     products4, products5, products6,
      products7, products8, products9, products10, products11, products12, products13, products14, products15} = require("../model/prodModels");
const { cloudinary } = require("../utils/cloudinary");
const { upload } = require("../utils/multer");
let router = express.Router();

router.get('/furniturehome', (req, res)=>{
    products1.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({home: "homepage"});
})
router.post('/createproduct', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice, prodSnippet, prodDetails} = req.body;

    //step3
    let toDb = {
        prodDetails,
        prodName,
        prodPrice,
        prodSnippet,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products1(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
})

router.patch('/updateproduct', upload.single('prodImg'), async(req, res)=>{
     // let {upd, id} = req.body;
     // console.log(upd);
    //  res.json({update: upd, id});

    let {prodName, prodPrice, prodDetails, prodSnippet, id} = req.body;
    let upd = {};
    if(prodName) {
        upd['prodName'] = prodName;
    }
    if(prodPrice) {
        upd['prodPrice'] = prodPrice;
    }
    if(prodDetails) {
        upd['prodDetails'] = prodDetails;
    }
    if(prodSnippet) {
        upd['prodSnippet'] = prodSnippet;
    }
    console.log(upd)
    if(req.file){
        // res.json({res: "this request has a file, id, upd"});
        //get product from db
        let toUpd = await products1.findById(id);
        //delete from cloudinary
        let remImg = await cloudinary.uploader.destroy(toUpd.prodImg_id);
        //now using upload
        let newImg = await cloudinary.uploader.upload(req.file.path, 
            {folder: "furniture_backend_product"});
            //add prodImg_id and prodImg_url to upd
            upd["prodImg_id"] = newImg.public_id;
            upd["prodImg_url"] = newImg.secure_url;
        //update to db
        product.findByIdAndUpdate(id, {$set: upd})
        .then(ans=>{
           res.json({status: true});
        })
        .catch(err=>{
            res.json({status: false});
        })
    } else{
        // res.json({res: "this request doesnt have a file"});
        products1.findByIdAndUpdate(id, {$set: upd})
        .then(ans=>{
            res.json({status: true});
        })
        .catch(err=>{
            res.json({status: false});
        })
    }


    // res.json({updatepage: "product updated"});
})

router.get('/deleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products1.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products1.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/single/:id', (req, res)=>{
    let {id} = req.params;
    products1.findById(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json({status: false});
    });
    // res.json({singleproduct: "single product page"});
});

router.post('/love', (req, res)=>{
    let {id, love} = req.body;
    products1.findByIdAndUpdate(id, {$inc: {'prodlove': love}})
    .then(ans=>{
        res.json({status: true});
    })
    .catch(err=>{
        res.json({status: false});
    })
    // res.json({id, like});
})


router.get('/nowonsale', (req, res)=>{
    products2.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({nowonsale: "now on sale page"});
})
router.post('/nowcreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products2(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
})
router.get('/nowdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products2.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products2.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/about', (req, res)=>{
    products3.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    
    // res.json({about: "about page"});
})
router.post('/aboutcreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products3(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
})
router.get('/aboutdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products3.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products3.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/newarrivals', (req, res)=>{
    products4.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({newarrivals: "new arival page"});
})
router.post('/newarrivalscreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products4(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
})
router.get('/newarrivaldeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products4.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products4.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/newcollection', (req, res)=>{
    products5.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({newcollection: "new collection page"});
})
router.post('/newcollectioncreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products5(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
})
router.get('/newcollectiondeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products5.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products5.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/limitedcollection', (req, res)=>{
    products6.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({limitedcollection: "limited collection page"});
})
router.post('/limitedcollectioncreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products6(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
})
router.get('/limiteddeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products6.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products6.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/inspiration', (req, res)=>{
    products7.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({inspiration: "inspiration page"});
})
router.post('/inspirationcreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products7(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({inspirationcreate: "inspiration create page"});
})
router.get('/inspirationdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products7.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products7.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/newsletter', (req, res)=>{
    products8.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message)
    })
    // res.json({newsletter: "news letter page"});
});
router.post('/newslettercreate', upload.single('prodImg'), async(req, res)=>{
     // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products8(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({newslettercreate: "news letter create page"});
});
router.get('/newsletterdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products8.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products8.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/footer', (req, res)=>{
    products9.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({footer: "footer page"});
});
router.post('/footercreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products9(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({footercreate: "footer create page"});
})
router.get('/footerdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products9.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products9.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/chairshome', (req, res)=>{
    products10.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    
    // res.json({catalog: "catolog page"});
})
router.post('/chairshomecreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products10(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({catalogcreate: "catalog create page"});
})
router.get('/chairshomedeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products10.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products10.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})
router.get('/chairs', (req, res)=>{
    products11.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    
    // res.json({catalog: "catolog page"});
})
router.post('/chairscreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products11(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({catalogcreate: "catalog create page"});
})
router.get('/chairsdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products11.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products11.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})

router.get('/lightninghome', (req, res)=>{
    products12.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    
    // res.json({catalog: "catolog page"});
})
router.post('/lightninghomecreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products12(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({catalogcreate: "catalog create page"});
})
router.get('/lightninghomedeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products12.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products12.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})

router.get('/lightning', (req, res)=>{
    products13.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    
    // res.json({catalog: "catolog page"});
})
router.post('/lightningcreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products13(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({catalogcreate: "catalog create page"});
})
router.get('/lightningdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products13.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products13.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})

router.get('/tables', (req, res)=>{
    products14.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    
    // res.json({catalog: "catolog page"});
})
router.post('/tablescreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products14(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({catalogcreate: "catalog create page"});
})
router.get('/tablesdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products14.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products14.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})

router.get('/sofas', (req, res)=>{
    products15.find()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    
    // res.json({catalog: "catolog page"});
})
router.post('/sofascreate', upload.single('prodImg'), async(req, res)=>{
    // console.log(req.file);
    // if(req.file) {
    //     console.log("this request has a file");
    //     console.log(req.file);
    //     console.log(req.body);
    // } else{
    //     console.log("this request doesn't have a file");
    // }
    // res.json({create: "product created"});
     
    // >>>>>>>>algorithm>>>>>>>>>
    //step1
    let result = await cloudinary.uploader.upload(req.file.path, 
        {folder: 'furniture_backend_product'})
    // console.log(result);
    // res.json(result);

    //step2
    let prodImg_id = result.public_id;
    let prodImg_url = result.secure_url;
    let {prodName, prodPrice} = req.body;

    //step3
    let toDb = {
        prodName,
        prodPrice,
        prodImg_id,
        prodImg_url
    }

    //step4
    let db = new products15(toDb);
    db.save()
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({catalogcreate: "catalog create page"});
})
router.get('/sofasdeleteproduct', async(req, res)=>{
    //step 1
    let {id} = req.body;
    //step2
    let toDel = await products15.findById(id);
    //step3
    let remImg = await cloudinary.uploader.destroy(toDel.prodImg_id);
    //step4
    products15.findByIdAndDelete(id)
    .then(ans=>{
        res.json(ans);
    })
    .catch(err=>{
        res.json(err.message);
    })
    // res.json({deleteproduct: "product deleted"});
})


router.get('/like', (req, res)=>{
    res.json({like: "likes page"});
})
router.get('*', (req, res)=>{
    res.json({error: "uknown url please try again..."});
})



module.exports= {
    router
}