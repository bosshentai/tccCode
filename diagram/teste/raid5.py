
from diagrams import Diagram, Cluster
from diagrams.aws.storage import StorageGateway
from diagrams.generic.storage import Storage



raid5 = "RAID 5"


with Diagram("Raid 5 ",show=False,direction="TB"):
  storageController0 = StorageGateway(raid5)

  with Cluster("Disk 1 - 22 TB"):
    disk1 = Storage("Projectos,Financeiros,Comercial,Gestao")

