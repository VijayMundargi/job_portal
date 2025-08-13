const db = require('../config/db.js');

const createSubscription = async (subscription) => {
  const sql = `
    INSERT INTO subscriptions 
    (user_id, plan_name, price, name_on_card, phone, expiry_date, cvv)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    subscription.user_id,
    subscription.plan_name,
    subscription.price,
    subscription.name_on_card,
    
    subscription.phone,
    subscription.expiry_date,
    subscription.cvv,
  ]);
  return result;
};

module.exports = {
  createSubscription,
};
