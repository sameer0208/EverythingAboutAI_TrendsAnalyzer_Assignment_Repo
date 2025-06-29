const express = require("express");
const router = express.Router();

// Simulated user info
const mockUser = {
  openid: "mock_openid_123",
  nickname: "Mock User",
  language: "zh_CN",
  city: "Shenzhen",
  province: "Guangdong",
  country: "China",
  avatar: "https://placekitten.com/100/100"
};

// Middleware to simulate authentication
router.use((req, res, next) => {
  req.user = mockUser;
  next();
});

// GET /api/me
router.get("/me", (req, res) => {
  res.json(req.user);
});

// GET /api/usage
router.get("/usage", (req, res) => {
  const apps = [];
  for (let i = 1; i <= 30; i++) {
    apps.push({
      appid: `mini_program_${i}`,
      daily_active_users: Math.floor(Math.random() * 10000) + 1000,
      feature_adoption: Math.floor(Math.random() * 100),
      performance_score: Math.floor(Math.random() * 100)
    });
  }
  res.json({ apps });
});

// GET /api/trends
router.get("/trends", (req, res) => {
  const categories = [];
  const categoryNames = [
    "E-commerce", "Gaming", "Education", "Finance", "Healthcare",
    "Social", "Travel", "Food", "Fitness", "Entertainment",
    "Real Estate", "Automotive", "Fashion", "Music", "News",
    "Productivity", "Utilities", "Weather", "Photography", "Sports"
  ];
  categoryNames.forEach(name => {
    categories.push({
      category: name,
      growth: `+${Math.floor(Math.random() * 50)}%`,
      top_feature: `Feature ${Math.floor(Math.random() * 10) + 1}`
    });
  });
  res.json({ categories });
});

// GET /api/competitors
router.get("/competitors", (req, res) => {
  const competitors = [];
  for (let i = 1; i <= 15; i++) {
    competitors.push({
      name: `Competitor ${String.fromCharCode(64 + i)}`,
      users: Math.floor(Math.random() * 50000) + 5000,
      top_feature: `Top Feature ${i}`
    });
  }
  res.json({ competitors });
});

// GET /api/alerts
router.get("/alerts", (req, res) => {
  const alerts = [];
  for (let i = 1; i <= 10; i++) {
    alerts.push({
      message: `Alert message ${i}: Important market event detected.`
    });
  }
  res.json({ alerts });
});

module.exports = router;

// In your routes/api.js
router.get("/userflow", (req, res) => {
  res.json({
    flows: [
      { step: "Homepage", visits: 12000 },
      { step: "Product Page", visits: 8000 },
      { step: "Checkout", visits: 3000 }
    ]
  });
});

router.get("/comparison", (req, res) => {
  res.json({
    matrix: [
      { feature: "Flash Sales", CompetitorA: "Yes", CompetitorB: "No", CompetitorC: "Yes" },
      { feature: "AR Shopping", CompetitorA: "Yes", CompetitorB: "Yes", CompetitorC: "No" },
      { feature: "Mini Games", CompetitorA: "No", CompetitorB: "Yes", CompetitorC: "Yes" }
    ]
  });
});

router.get("/success", (req, res) => {
  res.json({
    patterns: [
      { description: "Apps with leaderboards see 2x engagement." },
      { description: "Flash Sales increase retention by 30%." }
    ]
  });
});

router.get("/retention", (req, res) => {
  res.json({
    retention: [
      { period: "Day 1", rate: "60%" },
      { period: "Day 7", rate: "35%" },
      { period: "Day 30", rate: "15%" }
    ]
  });
});

router.get("/monetization", (req, res) => {
  res.json({
    revenues: [
      { appid: "mini_program_1", monthly_revenue: "$12,000" },
      { appid: "mini_program_2", monthly_revenue: "$7,500" }
    ]
  });
});

router.get("/growth", (req, res) => {
  res.json({
    hacks: [
      { description: "Referral program increased installs by 40%." },
      { description: "Push notifications boosted DAUs by 20%." }
    ]
  });
});

router.get("/qr", (req, res) => {
  res.json({
    campaigns: [
      { campaign: "Spring Sale", scans: 5000, conversions: 800 },
      { campaign: "New Year Promo", scans: 12000, conversions: 3000 }
    ]
  });
});
