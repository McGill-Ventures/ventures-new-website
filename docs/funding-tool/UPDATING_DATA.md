# Refreshing the data from your master Excel sheet

You maintain the 500+ programs in the master spreadsheet. Two ways to get changes
into the live tool.

## Small, ongoing edits: use /admin
Day to day, edit directly in the admin console. The "Needs attention" tab shows
what is stale, unclear, or past deadline, with one-click fixes. This is the normal
workflow and needs no spreadsheet.

## Big refresh: re-import the sheet
When you have made many changes in Excel at once:
1. Export the funding_programs tab and rebuild data/programs.json. The multi-value
   columns (sectors, applicant_types, company_stage, employee_band, revenue_band,
   eligible_activities, tags) must be pipe-delimited in Excel, e.g. "sme|nonprofit".
   The seed script splits them into arrays.
2. Run `npm run seed`. It upserts by id: existing programs are updated in place,
   new ids are added. It does not delete rows. To retire a program, set its status
   to closed or archived in the sheet (or in /admin) rather than deleting it.

Keep the Excel column headers identical to the database columns, and keep values
inside the allowed enum lists (the enums tab), or matching will not understand them.
