-- PostHog endpoint "growth_studio_dashboard", read by the Website analytics tab in the
-- funding admin (src/app/api/funding/admin/analytics/route.ts). Setup: SETUP.md, Part 6.
-- PostHog runs the live copy. After editing it there, update this file to match.
-- Keep the three columns metric, label, value. "Today" follows the project time zone (America/Toronto).
-- The form ids come from the Google Form links on the Growth Studio pages. Update them if those links change.

SELECT 'views' AS metric, '30m' AS label, count() AS value
FROM events
WHERE event = '$pageview'
  AND properties.$pathname LIKE '/growth-studio%'
  AND timestamp >= now() - INTERVAL 30 MINUTE

UNION ALL
SELECT 'views', 'today', count()
FROM events
WHERE event = '$pageview'
  AND properties.$pathname LIKE '/growth-studio%'
  AND timestamp >= toStartOfDay(now())

UNION ALL
SELECT 'visitors', 'today', count(DISTINCT distinct_id)
FROM events
WHERE event = '$pageview'
  AND properties.$pathname LIKE '/growth-studio%'
  AND timestamp >= toStartOfDay(now())

UNION ALL
SELECT 'views', '7d', count()
FROM events
WHERE event = '$pageview'
  AND properties.$pathname LIKE '/growth-studio%'
  AND timestamp >= now() - INTERVAL 7 DAY

UNION ALL
SELECT 'form', 'Startup applications', count()
FROM events
WHERE event = '$autocapture'
  AND properties.$external_click_url LIKE '%1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ%'
  AND timestamp >= now() - INTERVAL 7 DAY

UNION ALL
SELECT 'form', 'Consultant applications', count()
FROM events
WHERE event = '$autocapture'
  AND properties.$external_click_url LIKE '%1FAIpQLSfbyiRB5Lo5Pb-s7c9OYx48h60NqwwZ1I9dlUJbMYjnJg5HbA%'
  AND timestamp >= now() - INTERVAL 7 DAY

UNION ALL
SELECT * FROM (
  SELECT 'page' AS metric, properties.$pathname AS label, count() AS value
  FROM events
  WHERE event = '$pageview'
    AND properties.$pathname LIKE '/growth-studio%'
    AND timestamp >= now() - INTERVAL 7 DAY
  GROUP BY label
  ORDER BY value DESC
  LIMIT 5
)

UNION ALL
SELECT * FROM (
  SELECT 'source' AS metric, properties.$referring_domain AS label, count(DISTINCT $session_id) AS value
  FROM events
  WHERE event = '$pageview'
    AND properties.$pathname LIKE '/growth-studio%'
    AND properties.$referring_domain != properties.$host
    AND timestamp >= now() - INTERVAL 7 DAY
  GROUP BY label
  ORDER BY value DESC
  LIMIT 10
)
