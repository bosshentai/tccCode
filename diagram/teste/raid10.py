

from diagrams import Diagram , Cluster
from diagrams.aws.storage import Storage, StorageGateway
# from diagrams.onprem.storage import Ceph, Glusterfs
# from diagrams.database import Db
# from diagram.database import container




with Diagram("Raid 1+0",show=False,direction="TB"):
  storageController0 = StorageGateway("Raid 0")
  # raid = Glusterfs("RAID Controller")

  storageController1 = StorageGateway("Raid 1")

  storageController2 = StorageGateway("Raid 1")

  storageController3 = StorageGateway("Raid 1")

  storageController4 = StorageGateway("Raid 1")

  storageController5 = StorageGateway("Raid 1")


  with Cluster("Disk 1 - 22TB"):
    disk1 = Storage("Projetos,Financeiros")


  with Cluster("Disk 2 - 22TB Mirror of Disk 1"):
    diskImage1 = Storage("Projetos,Financeiros")

  with Cluster("Disk 3 - 22TB"):
    disk3 = Storage("Projetos,Comercial")

  with Cluster("Disk 4 - 22TB Mirror of Disk 3"):
    diskImage2 = Storage("Projetos,Comercial")

  with Cluster("Disk 5 - 22TB"):
    disk5 = Storage("Projetos,Gestão")

  with Cluster("Disk 6 - 22TB Mirror of Disk 5"):
    diskImage3 = Storage("Projetos,Gestão")

  with Cluster("Disk 7 - 22TB"):
    disk7 = Storage("Projetos")

  with Cluster("Disk 8 - 22TB Mirror of Disk 7"):
    diskImage4 = Storage("Projetos")

  with Cluster("Disk 9 - 22TB"):
    disk9 = Storage("Projetos")

  with Cluster("Disk 10 - 22TB Mirror of Disk 9"):
    diskImage5 = Storage("Projetos")





  # with Db("Disk 22TB"):
  #   container = container
  # disk1 >> diskImage1
  # disk3 >> diskImage2
  # disk5 >> diskImage3
  # disk7 >> diskImage4
  # disk9 >> diskImage5


  storageController0 >> storageController1
  storageController0 >> storageController2
  storageController0 >> storageController3
  storageController0 >> storageController4
  storageController0 >> storageController5

  storageController1 >> disk1
  storageController1 >> diskImage1

  storageController2 >> disk3
  storageController2 >> diskImage2

  storageController3 >> disk5
  storageController3 >> diskImage3

  storageController4 >> disk7
  storageController4 >> diskImage4

  storageController5 >> disk9
  storageController5 >> diskImage5


  # storageController >> disk3
  # storageController >> disk5
  # storageController >> disk7
  # storageController >> disk9
