# # diagram.py
# from diagrams import Diagram
# from diagrams.aws.compute import EC2
# from diagrams.aws.database import RDS
# from diagrams.aws.network import ELB

# with Diagram("Web Service", show=False):
#     ELB("lb") >> EC2("web") >> RDS("userdb")


from diagrams import Diagram, Cluster

from diagrams.onprem.database import PostgreSQL
from diagrams.onprem.compute import Server
from diagrams.onprem.container import Docker
from diagrams.onprem.client import Client


with Diagram("Web Service", show=False):

  # with Cluster("Backend"):
  #     server = Docker("Express")

  with Cluster("Frontend"):
    client = Client("Client")
    # client >> Server("Server")
    # client >> PostgreSQL("Database")

  with Cluster("Server"):
    server = Server("Express")


  with Cluster("Db"):
    db = PostgreSQL("db")
    db

  client >> server >> db