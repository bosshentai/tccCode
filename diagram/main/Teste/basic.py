from diagrams import Cluster, Diagram
from diagrams.onprem.database import PostgreSQL
from diagrams.programming.framework import React
from diagrams.programming.language import TypeScript


with Diagram("Web Service",show=False):


  with Cluster("Frontend"):
    framework = React()
    language = TypeScript()


  # with Cluster("BD"):
  #   bd = PostgreSQL("BD")

