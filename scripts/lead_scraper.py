import os
import json
from apify_client import ApifyClient
from dotenv import load_dotenv
from supabase_client import get_supabase_client

load_dotenv()

# Initialize Apify Client
APIFY_TOKEN = os.getenv("APIFY_API_TOKEN")
if not APIFY_TOKEN:
    raise ValueError("APIFY_API_TOKEN is not set")

apify_client = ApifyClient(APIFY_TOKEN)
supabase = get_supabase_client()

def run_linkedin_scraper(search_url: str, limit: int = 10):
    """
    Runs the LinkedIn scraper via Apify (mock implementation until Actor ID is confirmed).
    """
    print(f"Starting scraping for: {search_url} with limit {limit}")
    
    # TODO: Replace with actual Actor ID and Input
    # run = apify_client.actor("ACTOR_ID").call(run_input={"url": search_url, "limit": limit})
    # dataset_items = apify_client.dataset(run["defaultDatasetId"]).list_items().items
    
    # Mock Data for Phase 1 Testing
    dataset_items = [
        {
            "linkedin_url": "https://www.linkedin.com/in/johndoe/",
            "first_name": "John",
            "last_name": "Doe",
            "full_name": "John Doe",
            "headline": "CEO at TechCorp",
            "location": "San Francisco, CA",
            "company_name": "TechCorp",
            "job_title": "CEO",
            "email": "john@techcorp.com"
        },
        {
             "linkedin_url": "https://www.linkedin.com/in/janedoe/",
            "first_name": "Jane",
            "last_name": "Doe",
            "full_name": "Jane Doe",
            "headline": "CTO at StartUp",
            "location": "Berlin, Germany",
            "company_name": "StartUp",
            "job_title": "CTO",
             "email": None
        }
    ]
    
    return dataset_items

def save_leads(leads, campaign_id=None):
    """
    Saves leads to Supabase, handling deduplication.
    """
    results = []
    for lead in leads:
        data = {
            "linkedin_url": lead.get("linkedin_url"),
            "first_name": lead.get("first_name"),
            "last_name": lead.get("last_name"),
            "full_name": lead.get("full_name"),
            "headline": lead.get("headline"),
            "location": lead.get("location"),
            "company_name": lead.get("company_name"),
            "job_title": lead.get("job_title"),
            "email": lead.get("email"),
            "campaign_id": campaign_id,
            "enrichment_data": lead # Store raw data as well
        }
        
        try:
            # Upsert based on linkedin_url
            response = supabase.table("leads").upsert(data, on_conflict="linkedin_url").execute()
            results.append(response)
            print(f"Saved: {lead.get('full_name')}")
        except Exception as e:
            print(f"Error saving {lead.get('full_name')}: {e}")

    return results

if __name__ == "__main__":
    # Test Run
    print("Running scraper test...")
    leads = run_linkedin_scraper("https://linkedin.com/search/results/people/?keywords=ceo", limit=5)
    # Note: This will fail if DB is not connected/setup, but the logic is here.
    # save_leads(leads) 
    print(f"Scraped {len(leads)} leads (Dry Run).")
