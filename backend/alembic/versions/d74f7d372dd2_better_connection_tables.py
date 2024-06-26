"""Better connection tables

Revision ID: d74f7d372dd2
Revises: bdf08b670cbb
Create Date: 2024-02-29 16:13:12.344189

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd74f7d372dd2'
down_revision = 'bdf08b670cbb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('flathubuser_role', 'flathubuser_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('flathubuser_role', 'role_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('role_permission', 'role_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('role_permission', 'permission_name',
               existing_type=sa.VARCHAR(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('role_permission', 'permission_name',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('role_permission', 'role_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('flathubuser_role', 'role_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('flathubuser_role', 'flathubuser_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
