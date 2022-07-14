from diagrams import Cluster, Diagram
from diagrams.onprem.database import PostgreSQL


with Diagram("Web Service",show=False):

  with Cluster("BD"):
    bd = PostgreSQL("BD")