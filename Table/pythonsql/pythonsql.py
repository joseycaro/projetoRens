import pandas as pd
import psycopg2 as pg
from sqlalchemy import create_engine

engine = create_engine('postgresql://postgres:123456@localhost:5435/DBRensClint')



