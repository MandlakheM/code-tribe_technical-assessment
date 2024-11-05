import admin from "firebase-admin";

const db = admin.firestore();

export const addItems = async (req, res) => {
  try {
    const itemData = {
      itemName: req.body.itemName,
      itemPrice: req.body.itemPrice,
      category: req.body.category,
      itemDescription: req.body.itemDescription,
      availability: req.body.availability,
      location: req.body.location,
      image: req.body.image,
    };

    const itemsRef = db.collection("items").doc();

    const newItemId = itemsRef.id;

    itemData.itemID = newItemId;

    await itemsRef.set(itemData);

    res.status(201).send({
      message: "Item added successfully",
      itemId: newItemId,
      item: itemData,
    });
  } catch (error) {
    console.error("Failed to add item: ", error);
    res.status(500).send({
      message: "Failed to add item",
      error: error.message,
    });
  }
};

export const getItems = async (req, res) => {
  try {
    const itemRef = db.collection("items");
    const snapshot = await itemRef.get();

    if (snapshot.empty) {
      res.status(200).send([]);
      return;
    }

    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.status(200).send(items);
  } catch (error) {
    console.error("Error getting items:", error);
    res.status(500).send("Error retrieving items");
  }
};

export const getItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const itemRef = db.collection("items").doc(itemId);
    const doc = await itemRef.get();

    if (!doc.exists) {
      res.status(404).send("Item not found");
    } else {
      res.status(200).send(doc.data());
    }
  } catch (error) {
    console.error("Error getting item:", error);
    res.status(500).send("Error retrieving item");
  }
};

export const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    const itemDoc = await db.collection("items").doc(itemId).get();

    if (!itemDoc.exists) {
      return res.status(404).send("item not found");
    }

    // const itemData = itemDoc.data();

    await db.collection("items").doc(itemId).delete();
    res.status(200).send("item deleted successfully");

  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).send("Error deleting item");
  }
};

export const updateItem = async (req, res) => {
    try {
      const itemId = req.params.id;
      const updateData = req.body;
  
      const itemRef = db.collection("items").doc(itemId);
      const doc = await itemRef.get();
  
      if (!doc.exists) {
        res.status(404).send(`item with ID ${itemId} not found`);
        return;
      }
  
      await itemRef.update(updateData);
  
      res.status(200).send("item updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
      res.status(500).send(`Error updating item: ${error.message}`);
    }
  };